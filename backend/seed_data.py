import asyncio
from models import Property, PropertyTranslation, PropertyFeatures, ContactInfo
from database import db
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Sample properties for Amit Wolf - Kiryat/Haifa area
sample_properties = [
    {
        "title": PropertyTranslation(en="Sea View Apartment", he="דירה עם נוף לים"),
        "price": 2850000,
        "location": PropertyTranslation(en="Kiryat Yam, Israel", he="קרית ים, ישראל"),
        "bedrooms": 4,
        "bathrooms": 2,
        "sqft": 110,
        "type": "condo",
        "status": "for-sale",
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "description": PropertyTranslation(
            en="Beautiful sea view apartment with modern renovations and balcony overlooking the Mediterranean.",
            he="דירה יפהפייה עם נוף לים, שיפוצים מודרניים ומרפסת המשקיפה אל הים התיכון."
        ),
        "features": PropertyFeatures(
            en=["Sea View", "Renovated", "Parking", "Balcony"],
            he=["נוף לים", "משופצת", "חניה", "מרפסת"]
        )
    },
    {
        "title": PropertyTranslation(en="Central Haifa Apartment", he="דירה במרכז חיפה"),
        "price": 2200000,
        "location": PropertyTranslation(en="Hadar HaCarmel, Haifa", he="הדר הכרמל, חיפה"),
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 85,
        "type": "condo",
        "status": "for-sale",
        "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "description": PropertyTranslation(
            en="Spacious apartment in central Haifa with easy access to transportation and shopping.",
            he="דירה מרווחת במרכז חיפה עם נגישות קלה לתחבורה וקניות."
        ),
        "features": PropertyFeatures(
            en=["Central Location", "Near Transportation", "Shopping Nearby", "Bright"],
            he=["מיקום מרכזי", "קרוב לתחבורה", "קניות בקרבת מקום", "מוארת"]
        )
    },
    {
        "title": PropertyTranslation(en="Kiryat Bialik House", he="בית בקרית ביאליק"),
        "price": 3200000,
        "location": PropertyTranslation(en="Kiryat Bialik, Israel", he="קרית ביאליק, ישראל"),
        "bedrooms": 5,
        "bathrooms": 3,
        "sqft": 140,
        "type": "house",
        "status": "for-sale",
        "image": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
        "description": PropertyTranslation(
            en="Family house with garden in quiet Kiryat Bialik neighborhood, perfect for families.",
            he="בית משפחתי עם גינה בשכונה שקטה בקרית ביאליק, מושלם למשפחות."
        ),
        "features": PropertyFeatures(
            en=["Private Garden", "Quiet Street", "Family Friendly", "Parking"],
            he=["גינה פרטית", "רחוב שקט", "ידידותי למשפחות", "חניה"]
        )
    }
]

async def seed_database():
    """Add sample data to the database"""
    try:
        await db.connect()
        logger.info("Connected to database for seeding")
        
        # Check if properties already exist
        existing_count = await db.get_properties_count()
        if existing_count > 0:
            logger.info(f"Database already has {existing_count} properties. Skipping seed.")
            return
        
        # Add sample properties
        for prop_data in sample_properties:
            property_obj = Property(**prop_data)
            created = await db.create_property(property_obj)
            logger.info(f"Created property: {created.title.he}")
        
        logger.info(f"Successfully seeded database with {len(sample_properties)} properties")
        
    except Exception as e:
        logger.error(f"Error seeding database: {e}")
    finally:
        await db.close()

if __name__ == "__main__":
    asyncio.run(seed_database())