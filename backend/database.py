from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional
import os
from models import Property, ContactInquiry
import logging

logger = logging.getLogger(__name__)

class Database:
    def __init__(self):
        self.client = None
        self.db = None

    async def connect(self):
        try:
            mongo_url = os.environ.get('MONGO_URL')
            self.client = AsyncIOMotorClient(mongo_url)
            self.db = self.client[os.environ.get('DB_NAME', 'real_estate')]
            logger.info("Connected to MongoDB")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            raise

    async def close(self):
        if self.client:
            self.client.close()

    # Property operations
    async def create_property(self, property_data: Property) -> Property:
        try:
            result = await self.db.properties.insert_one(property_data.dict())
            if result.inserted_id:
                return property_data
            raise Exception("Failed to create property")
        except Exception as e:
            logger.error(f"Error creating property: {e}")
            raise

    async def get_properties(self, skip: int = 0, limit: int = 100) -> List[Property]:
        try:
            cursor = self.db.properties.find().skip(skip).limit(limit).sort("createdAt", -1)
            properties = []
            async for property_doc in cursor:
                property_doc['id'] = property_doc.pop('_id', str(property_doc.get('_id', '')))
                properties.append(Property(**property_doc))
            return properties
        except Exception as e:
            logger.error(f"Error getting properties: {e}")
            return []

    async def get_property(self, property_id: str) -> Optional[Property]:
        try:
            property_doc = await self.db.properties.find_one({"id": property_id})
            if property_doc:
                property_doc['id'] = property_doc.pop('_id', property_doc.get('id', ''))
                return Property(**property_doc)
            return None
        except Exception as e:
            logger.error(f"Error getting property {property_id}: {e}")
            return None

    async def update_property(self, property_id: str, update_data: dict) -> Optional[Property]:
        try:
            update_data['updatedAt'] = datetime.utcnow()
            result = await self.db.properties.update_one(
                {"id": property_id},
                {"$set": update_data}
            )
            if result.modified_count:
                return await self.get_property(property_id)
            return None
        except Exception as e:
            logger.error(f"Error updating property {property_id}: {e}")
            return None

    async def delete_property(self, property_id: str) -> bool:
        try:
            result = await self.db.properties.delete_one({"id": property_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting property {property_id}: {e}")
            return False

    async def get_properties_count(self) -> int:
        try:
            return await self.db.properties.count_documents({})
        except Exception as e:
            logger.error(f"Error counting properties: {e}")
            return 0

    # Contact operations
    async def create_contact(self, contact_data: ContactInquiry) -> ContactInquiry:
        try:
            result = await self.db.contacts.insert_one(contact_data.dict())
            if result.inserted_id:
                return contact_data
            raise Exception("Failed to create contact")
        except Exception as e:
            logger.error(f"Error creating contact: {e}")
            raise

    async def get_contacts(self, skip: int = 0, limit: int = 100) -> List[ContactInquiry]:
        try:
            cursor = self.db.contacts.find().skip(skip).limit(limit).sort("createdAt", -1)
            contacts = []
            async for contact_doc in cursor:
                contact_doc['id'] = contact_doc.pop('_id', str(contact_doc.get('_id', '')))
                contacts.append(ContactInquiry(**contact_doc))
            return contacts
        except Exception as e:
            logger.error(f"Error getting contacts: {e}")
            return []

    async def mark_contact_read(self, contact_id: str) -> bool:
        try:
            result = await self.db.contacts.update_one(
                {"id": contact_id},
                {"$set": {"isRead": True}}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error marking contact as read {contact_id}: {e}")
            return False

    async def get_contacts_count(self) -> int:
        try:
            return await self.db.contacts.count_documents({})
        except Exception as e:
            logger.error(f"Error counting contacts: {e}")
            return 0

# Global database instance
db = Database()