# API Contracts - Amit Wolf Real Estate

## Properties Management System

### Database Schema - Properties Collection
```javascript
{
  _id: ObjectId,
  title: {
    en: String,
    he: String
  },
  price: Number, // In Israeli Shekels
  location: {
    en: String,
    he: String
  },
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number, // Square meters
  type: String, // "house", "condo", "townhouse"
  status: String, // "for-sale", "sold", "rented"
  image: String, // URL to image
  description: {
    en: String,
    he: String
  },
  features: {
    en: [String],
    he: [String]
  },
  contactInfo: {
    name: String,
    phone: String,
    email: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Properties
- `GET /api/properties` - Get all properties
- `POST /api/properties` - Create new property
- `GET /api/properties/:id` - Get specific property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Contact Inquiries
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact inquiries (admin)

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/verify` - Verify admin session

## Frontend-Backend Integration

### Mock Data Replacement
1. Remove mockData.js usage
2. Replace with API calls to backend
3. Add loading states and error handling
4. Implement real-time updates

### Admin Panel Features
1. **Simple Property Management**
   - Add new properties with image upload
   - Edit existing properties
   - Delete properties
   - Toggle property status (for sale/sold)

2. **Super Simple Interface**
   - Large buttons and clear labels
   - Drag & drop image upload
   - Auto-save functionality
   - Hebrew interface with RTL support

3. **Contact Management**
   - View all inquiries
   - Mark as read/responded
   - Contact details management