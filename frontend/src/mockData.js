export const mockProperties = [
  {
    id: 1,
    title: {
      en: "Sea View Apartment",
      he: "דירה עם נוף לים"
    },
    price: 2850000,
    location: {
      en: "Kiryat Yam, Israel",
      he: "קרית ים, ישראל"
    },
    bedrooms: 4,
    bathrooms: 2,
    sqft: 110,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    description: {
      en: "Beautiful sea view apartment with modern renovations and balcony overlooking the Mediterranean.",
      he: "דירה יפהפייה עם נוף לים, שיפוצים מודרניים ומרפסת המשקיפה אל הים התיכון."
    },
    features: {
      en: ["Sea View", "Renovated", "Parking", "Balcony"],
      he: ["נוף לים", "משופצת", "חניה", "מרפסת"]
    }
  },
  {
    id: 2,
    title: {
      en: "Central Haifa Apartment",
      he: "דירה במרכז חיפה"
    },
    price: 2200000,
    location: {
      en: "Hadar HaCarmel, Haifa",
      he: "הדר הכרמל, חיפה"
    },
    bedrooms: 3,
    bathrooms: 2,
    sqft: 85,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description: {
      en: "Spacious apartment in central Haifa with easy access to transportation and shopping.",
      he: "דירה מרווחת במרכז חיפה עם נגישות קלה לתחבורה וקניות."
    },
    features: {
      en: ["Central Location", "Near Transportation", "Shopping Nearby", "Bright"],
      he: ["מיקום מרכזי", "קרוב לתחבורה", "קניות בקרבת מקום", "מוארת"]
    }
  },
  {
    id: 3,
    title: {
      en: "Kiryat Bialik House",
      he: "בית בקרית ביאליק"
    },
    price: 3200000,
    location: {
      en: "Kiryat Bialik, Israel",
      he: "קרית ביאליק, ישראל"
    },
    bedrooms: 5,
    bathrooms: 3,
    sqft: 140,
    type: "house",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
    description: {
      en: "Family house with garden in quiet Kiryat Bialik neighborhood, perfect for families.",
      he: "בית משפחתי עם גינה בשכונה שקטה בקרית ביאליק, מושלם למשפחות."
    },
    features: {
      en: ["Private Garden", "Quiet Street", "Family Friendly", "Parking"],
      he: ["גינה פרטית", "רחוב שקט", "ידידותי למשפחות", "חניה"]
    }
  },
  {
    id: 4,
    title: {
      en: "Carmel Penthouse",
      he: "פנטהאוס בכרמל"
    },
    price: 4500000,
    location: {
      en: "Carmel, Haifa",
      he: "הכרמל, חיפה"
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 160,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    description: {
      en: "Luxury penthouse on the Carmel with stunning views and premium finishes.",
      he: "פנטהאוס יוקרתי בכרמל עם נוף מהמם וגימורים יוקרתיים."
    },
    features: {
      en: ["Panoramic View", "Luxury Finishes", "Private Elevator", "Terrace"],
      he: ["נוף פנורמי", "גימורים יוקרתיים", "מעלית פרטית", "מרפסת"]
    }
  },
  {
    id: 5,
    title: {
      en: "Kiryat Motzkin Starter Home",
      he: "בית להתחלה בקרית מוצקין"
    },
    price: 1800000,
    location: {
      en: "Kiryat Motzkin, Israel",
      he: "קרית מוצקין, ישראל"
    },
    bedrooms: 3,
    bathrooms: 2,
    sqft: 75,
    type: "condo",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    description: {
      en: "Perfect starter home in Kiryat Motzkin with great potential and good location.",
      he: "בית מושלם להתחלה בקרית מוצקין עם פוטנציאל גדול ומיקום טוב."
    },
    features: {
      en: ["Good Investment", "Near Schools", "Public Transport", "Shopping Center"],
      he: ["השקעה טובה", "קרוב לבתי ספר", "תחבורה ציבורית", "מרכז קניות"]
    }
  },
  {
    id: 6,
    title: {
      en: "Nesher Family Villa",
      he: "וילה משפחתית בנשר"
    },
    price: 3800000,
    location: {
      en: "Nesher, Israel",
      he: "נשר, ישראל"
    },
    bedrooms: 6,
    bathrooms: 4,
    sqft: 180,
    type: "house",
    status: "for-sale",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
    description: {
      en: "Spacious family villa in Nesher with large garden and mountain views.",
      he: "וילה משפחתי מרווחת בנשר עם גינה גדולה ונוף להרים."
    },
    features: {
      en: ["Mountain View", "Large Garden", "Swimming Pool", "Garage"],
      he: ["נוף להרים", "גינה גדולה", "בריכת שחייה", "מוסך"]
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
  name: "עמית וולף",
  englishName: "Amit Wolf",
  title: {
    en: "Real Estate Marketer",
    he: "משווק נדל״ן"
  },
  licenseNumber: "3245947",
  experience: {
    en: "Licensed Professional",
    he: "משווק מוסמך ומנוסה"
  },
  phone: "050-123-4567",
  email: "amit.wolf@realestate.co.il",
  location: {
    en: "Kiryat/Haifa Area",
    he: "קריות / חיפה"
  },
  bio: {
    en: "Professional real estate marketer specializing in exclusive properties with personal guidance throughout the entire process.",
    he: "משווק נדל״ן מקצועי המתמחה בנכסים בלעדיים עם ליווי אישי לאורך כל התהליך."
  },
  specialties: {
    en: ["Rental Properties", "Property Sales", "Property Purchase", "Exclusive Properties", "Personal Guidance"],
    he: ["השכרה", "מכירה", "קנייה", "נכסים בלעדיים", "ליווי אישי"]
  },
  achievements: {
    en: ["Licensed Agent #3245947", "Kiryat & Haifa Specialist", "Exclusive Properties Expert"],
    he: ["רישיון משווק מס' 3245947", "מומחה לאזור קריות וחיפה", "מתמחה בנכסים בלעדיים"]
  }
};