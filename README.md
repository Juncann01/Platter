Platter – Full-Stack Restaurant Web App

**Platter** is a modern, full-featured restaurant or restaurant chain web application that blends stunning user experience with intelligent features to streamline food ordering, reservations, and customer engagement.

 Features

User-Facing Pages
- **Landing/Home Page**
  - Hero section with CTAs
  - Featured dishes & promo videos
  - Location-based detection

- **Menu Page**
  - Categorized menu with filters
  - Dish cards with images, tags, prices
  - Add to cart & customizations

- **Scan Page**
  - Scan QR code or real dish with camera
  - AI-powered dish recognition & details

- **Cart + Checkout**
  - Modify quantity, delivery/pickup/dine-in options
  - Payment integration (Stripe, Paystack, etc.)

- **Order Tracking**
  - Real-time status (e.g., Preparing → Out for delivery)
  - Rider tracking + support chat

- **Reservation System**
  - Calendar & time slot picker
  - Table preferences & guest count

- **User Profile**
  - Personal info, dietary preferences, saved cards

- **Order History**
  - View past orders, re-order, download receipts

- **Reviews & Support**
  - Submit dish ratings
  - Live chat (AI + human fallback)

---

Admin Dashboard
- Manage menu (add/edit/remove dishes)
- Track live orders
- View reservations
- Access customer insights & analytics

---

Tech Stack

### Frontend
- **React / Next.js**
- TailwindCSS for styling
- Figma (design system)

### Backend
- **Node.js** + **Express.js** or **Supabase/Firebase**
- MongoDB / PostgreSQL for database
- Stripe / Paystack for payments
- Socket.IO or Firebase for live order tracking

### DevOps
- Vercel / Netlify (frontend hosting)
- Railway / Render / Supabase (backend hosting)

---

Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/savora.git
cd savora

# Install dependencies
npm install

# Start the frontend
npm run dev

# Set up backend
# (instructions vary depending on choice: Supabase/Firebase/Node.js)
````

---

Environment Variables

Create a `.env.local` file in the root and add:

```env
NEXT_PUBLIC_API_BASE_URL=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
MONGODB_URI=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

Roadmap

* [x] Landing, Menu, Cart pages
* [ ] Scan & AI food recognition
* [ ] Live chat & order tracking
* [ ] Full admin dashboard
* [ ] Multi-branch support

---

Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---


---

Developed by
Ogunsemoyin Ifeoluwa
X: @Ife_o3
📧 Email: [ifewebz03@gmail.com]

