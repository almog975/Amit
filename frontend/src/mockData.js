export const mockProperties = [
  {
    id: 1,
    title: {
      en: "Modern Family Home",
      he: "בית משפחתי מודרני"
    },
    price: 2850000, // Convert to Israeli Shekels
    location: {
      en: "Tel Aviv, Israel",
      he: "תל אביב, ישראל"
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 120, // Convert to meters squared
    type: "house",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    description: {
      en: "Beautiful modern family home with updated kitchen and spacious backyard.",
      he: "בית משפחתי מודרני ויפה עם מטבח מעודכן וחצר אחורית רחבה."
    },
    features: {
      en: ["Swimming Pool", "Modern Kitchen", "Parking", "Garden"],
      he: ["בריכת שחייה", "מטבח מודרני", "חניה", "גינה"]
    }
  },
  {
    id: 2,
    title: {
      en: "Downtown Luxury Condo",
      he: "דירת יוקרה במרכז"
    },
    price: 1940000,
    location: {
      en: "Jerusalem, Israel",
      he: "ירושלים, ישראל"
    },
    bedrooms: 3,
    bathrooms: 2,
    sqft: 85,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description: {
      en: "Stunning luxury condo in the heart of downtown with city views.",
      he: "דירת יוקרה מהממת בלב המרכז עם נוף לעיר."
    },
    features: {
      en: ["City View", "Concierge", "Gym", "Rooftop Terrace"],
      he: ["נוף לעיר", "שירותי קונסיירז'", "חדר כושר", "מרפסת גג"]
    }
  },
  {
    id: 3,
    title: {
      en: "Charming Suburban Villa",
      he: "וילה מקסימה בפרברים"
    },
    price: 2480000,
    location: {
      en: "Herzliya, Israel",
      he: "הרצליה, ישראל"
    },
    bedrooms: 5,
    bathrooms: 3,
    sqft: 150,
    type: "house",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
    description: {
      en: "Charming villa in quiet neighborhood with beautiful landscaping.",
      he: "וילה מקסימה בשכונה שקטה עם נוף יפהפה."
    },
    features: {
      en: ["Fireplace", "Walk-in Closet", "Patio", "Updated Appliances"],
      he: ["אח", "חדר ארונות", "פטיו", "מכשירי חשמל מעודכנים"]
    }
  },
  {
    id: 4,
    title: {
      en: "Luxury Penthouse Suite",
      he: "פנטהאוס יוקרה"
    },
    price: 4800000,
    location: {
      en: "Netanya, Israel",
      he: "נתניה, ישראל"
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 180,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    description: {
      en: "Exclusive penthouse with panoramic sea views and premium finishes.",
      he: "פנטהאוס בלעדי עם נוף פנורמי לים וגימורים יוקרתיים."
    },
    features: {
      en: ["Sea View", "Private Balcony", "Premium Finishes", "Parking"],
      he: ["נוף לים", "מרפסת פרטית", "גימורים יוקרתיים", "חניה"]
    }
  },
  {
    id: 5,
    title: {
      en: "Cozy Starter Home",
      he: "בית חמוד להתחלה"
    },
    price: 1280000,
    location: {
      en: "Haifa, Israel",
      he: "חיפה, ישראל"
    },
    bedrooms: 2,
    bathrooms: 1,
    sqft: 65,
    type: "house",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    description: {
      en: "Perfect starter home with great potential in up-and-coming neighborhood.",
      he: "בית מושלם להתחלה עם פוטנציאל גדול בשכונה מתפתחת."
    },
    features: {
      en: ["Renovated Kitchen", "Parquet Floors", "Balcony", "Near Schools"],
      he: ["מטבח משופץ", "רצפת פרקט", "מרפסת", "קרוב לבתי ספר"]
    }
  },
  {
    id: 6,
    title: {
      en: "Executive Townhouse",
      he: "בית עירוני יוקרתי"
    },
    price: 3560000,
    location: {
      en: "Ramat Gan, Israel",
      he: "רמת גן, ישראל"
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 140,
    type: "townhouse",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
    description: {
      en: "Modern executive townhouse with high-end finishes and great location.",
      he: "בית עירוני מנהלי מודרני עם גימורים יוקרתיים ומיקום מעולה."
    },
    features: {
      en: ["Attached Garage", "Modern Design", "Premium Appliances", "Private Garden"],
      he: ["חניה צמודה", "עיצוב מודרני", "מכשירי חשמל יוקרתיים", "גינה פרטית"]
    }
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: {
      en: "Sarah Cohen",
      he: "שרה כהן"
    },
    text: {
      en: "Amit helped us find our dream home! His expertise and dedication made the process smooth and stress-free.",
      he: "עמית עזר לנו למצוא את בית החלומות שלנו! המקצועיות והמסירות שלו הפכו את התהליך לחלק וללא דאגות."
    },
    rating: 5,
    location: {
      en: "Tel Aviv, Israel",
      he: "תל אביב, ישראל"
    }
  },
  {
    id: 2,
    name: {
      en: "Michael Levi",
      he: "מיכאל לוי"
    },
    text: {
      en: "Professional, knowledgeable, and always available. Amit went above and beyond to get us the best deal.",
      he: "מקצועי, בעל ידע, ותמיד זמין. עמית עשה הכל כדי להשיג לנו את העסקה הטובה ביותר."
    },
    rating: 5,
    location: {
      en: "Jerusalem, Israel",
      he: "ירושלים, ישראל"
    }
  },
  {
    id: 3,
    name: {
      en: "Rachel Goldstein",
      he: "רחל גולדשטיין"
    },
    text: {
      en: "Outstanding service! Amit's market knowledge and negotiation skills saved us thousands on our home purchase.",
      he: "שירות מעולה! הידע השוק וכישורי המשא ומתן של עמית חסכו לנו אלפי שקלים ברכישת הבית."
    },
    rating: 5,
    location: {
      en: "Herzliya, Israel",
      he: "הרצליה, ישראל"
    }
  }
];

export const mockAgent = {
  name: "עמית",
  title: {
    en: "Premium Real Estate Agent",
    he: "סוכן נדל\"ן מוביל"
  },
  experience: {
    en: "8+ Years Experience",
    he: "מעל 8 שנות ניסיון"
  },
  phone: "050-123-4567",
  email: "amit@realestate.co.il",
  bio: {
    en: "Dedicated to helping families find their perfect home with personalized service and expert market knowledge.",
    he: "מחויב לעזור למשפחות למצוא את הבית המושלם שלהן עם שירות אישי וידע מקצועי בשוק."
  },
  specialties: {
    en: ["Luxury Homes", "First-Time Buyers", "Investment Properties", "Relocation Services"],
    he: ["בתים יוקרתיים", "קונים ראשונים", "נכסי השקעה", "שירותי רילוקיישן"]
  },
  achievements: {
    en: ["Top 5% Agent", "100+ Satisfied Clients", "Excellence Award 2024"],
    he: ["סוכן ב-5% העליונים", "מעל 100 לקוחות מרוצים", "פרס מצוינות 2024"]
  }
};