from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from datetime import datetime
import uuid

# Property Models
class PropertyTranslation(BaseModel):
    en: str
    he: str

class PropertyFeatures(BaseModel):
    en: List[str] = []
    he: List[str] = []

class ContactInfo(BaseModel):
    name: str = "עמית וולף"
    phone: str = "050-123-4567"
    email: str = "amit.wolf@realestate.co.il"

class PropertyCreate(BaseModel):
    title: PropertyTranslation
    price: int
    location: PropertyTranslation
    bedrooms: int
    bathrooms: int
    sqft: int  # square meters
    type: str  # house, condo, townhouse
    status: str = "for-sale"  # for-sale, sold, rented
    image: str = ""
    description: PropertyTranslation
    features: PropertyFeatures = PropertyFeatures()
    contactInfo: ContactInfo = ContactInfo()

class Property(PropertyCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class PropertyUpdate(BaseModel):
    title: Optional[PropertyTranslation] = None
    price: Optional[int] = None
    location: Optional[PropertyTranslation] = None
    bedrooms: Optional[int] = None
    bathrooms: Optional[int] = None
    sqft: Optional[int] = None
    type: Optional[str] = None
    status: Optional[str] = None
    image: Optional[str] = None
    description: Optional[PropertyTranslation] = None
    features: Optional[PropertyFeatures] = None
    contactInfo: Optional[ContactInfo] = None

# Contact Models
class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    propertyId: Optional[str] = None
    isRead: bool = False
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    propertyId: Optional[str] = None

# Response Models
class MessageResponse(BaseModel):
    message: str
    success: bool = True

class PropertyListResponse(BaseModel):
    properties: List[Property]
    total: int

class ContactListResponse(BaseModel):
    contacts: List[ContactInquiry]
    total: int

# Admin Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminResponse(BaseModel):
    message: str
    token: Optional[str] = None
    success: bool = True