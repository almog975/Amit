from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import logging
from datetime import datetime
from typing import List, Optional

# Import our models and database
from models import (
    Property, PropertyCreate, PropertyUpdate, 
    ContactInquiry, ContactCreate, 
    MessageResponse, PropertyListResponse, ContactListResponse,
    AdminLogin, AdminResponse
)
from database import db

# Setup
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI(title="Amit Wolf Real Estate API")
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Startup and shutdown events
@app.on_event("startup")
async def startup_db():
    await db.connect()
    logger.info("Database connected successfully")

@app.on_event("shutdown")
async def shutdown_db():
    await db.close()
    logger.info("Database connection closed")

# Basic health check
@api_router.get("/")
async def root():
    return {"message": "Amit Wolf Real Estate API", "status": "running"}

# Properties endpoints
@api_router.get("/properties", response_model=PropertyListResponse)
async def get_properties(skip: int = 0, limit: int = 100):
    """Get all properties with pagination"""
    try:
        properties = await db.get_properties(skip=skip, limit=limit)
        total = await db.get_properties_count()
        return PropertyListResponse(properties=properties, total=total)
    except Exception as e:
        logger.error(f"Error getting properties: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve properties")

@api_router.post("/properties", response_model=Property)
async def create_property(property_data: PropertyCreate):
    """Create a new property"""
    try:
        new_property = Property(**property_data.dict())
        created_property = await db.create_property(new_property)
        logger.info(f"Created new property: {created_property.title.he}")
        return created_property
    except Exception as e:
        logger.error(f"Error creating property: {e}")
        raise HTTPException(status_code=500, detail="Failed to create property")

@api_router.get("/properties/{property_id}", response_model=Property)
async def get_property(property_id: str):
    """Get a specific property by ID"""
    try:
        property_data = await db.get_property(property_id)
        if not property_data:
            raise HTTPException(status_code=404, detail="Property not found")
        return property_data
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting property {property_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve property")

@api_router.put("/properties/{property_id}", response_model=Property)
async def update_property(property_id: str, property_data: PropertyUpdate):
    """Update a property"""
    try:
        # Only update fields that are provided
        update_dict = {k: v for k, v in property_data.dict().items() if v is not None}
        if not update_dict:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        updated_property = await db.update_property(property_id, update_dict)
        if not updated_property:
            raise HTTPException(status_code=404, detail="Property not found")
        
        logger.info(f"Updated property: {property_id}")
        return updated_property
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating property {property_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to update property")

@api_router.delete("/properties/{property_id}", response_model=MessageResponse)
async def delete_property(property_id: str):
    """Delete a property"""
    try:
        deleted = await db.delete_property(property_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Property not found")
        
        logger.info(f"Deleted property: {property_id}")
        return MessageResponse(message="Property deleted successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting property {property_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to delete property")

# Contact endpoints
@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact(contact_data: ContactCreate):
    """Create a new contact inquiry"""
    try:
        new_contact = ContactInquiry(**contact_data.dict())
        created_contact = await db.create_contact(new_contact)
        logger.info(f"New contact inquiry from: {created_contact.name} ({created_contact.email})")
        return created_contact
    except Exception as e:
        logger.error(f"Error creating contact: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contacts", response_model=ContactListResponse)
async def get_contacts(skip: int = 0, limit: int = 100):
    """Get all contact inquiries (admin only)"""
    try:
        contacts = await db.get_contacts(skip=skip, limit=limit)
        total = await db.get_contacts_count()
        return ContactListResponse(contacts=contacts, total=total)
    except Exception as e:
        logger.error(f"Error getting contacts: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve contacts")

@api_router.put("/contacts/{contact_id}/read", response_model=MessageResponse)
async def mark_contact_read(contact_id: str):
    """Mark a contact inquiry as read"""
    try:
        marked = await db.mark_contact_read(contact_id)
        if not marked:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        return MessageResponse(message="Contact marked as read")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error marking contact as read {contact_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to mark contact as read")

# Simple admin authentication (basic for now)
ADMIN_USERNAME = "amit"
ADMIN_PASSWORD = "wolf2025"

@api_router.post("/admin/login", response_model=AdminResponse)
async def admin_login(login_data: AdminLogin):
    """Simple admin login"""
    if login_data.username == ADMIN_USERNAME and login_data.password == ADMIN_PASSWORD:
        return AdminResponse(
            message="Login successful", 
            token="simple_token_amit_wolf",
            success=True
        )
    raise HTTPException(status_code=401, detail="Invalid credentials")

# Include the router
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)