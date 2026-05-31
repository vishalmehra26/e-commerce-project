# UrbanThread - Cloth Shop E-Commerce

A full-stack e-commerce web application for clothing built with React, Node.js, Express, and MongoDB.

## 2026 Capstone Project by Vishal Mehra

---

## Features

- **User Authentication** — Register, login, password reset via email (Nodemailer / SendGrid)
- **Product Browsing** — Search, filter, sort, and paginate products
- **Product Details** — Image carousel, reviews, and ratings
- **Shopping Cart** — Add/remove items, update quantities
- **Wishlist** — Save products for later
- **Checkout & Payments** — Stripe and Paytm integration
- **Order Management** — Track order status and history
- **Admin Dashboard** — Manage products, orders, users, and reviews with charts (Chart.js)
- **Image Uploads** — Cloudinary-powered product and avatar images
- **Responsive Design** — Mobile-friendly UI with Material UI and TailwindCSS

---

## Tech Stack

- **Frontend:** React 17, Redux, Material UI 5, TailwindCSS 3, Vite 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Payment:** Stripe, Paytm
- **Image Storage:** Cloudinary
- **Email:** Nodemailer, SendGrid
- **Charts:** Chart.js, react-chartjs-2

---

## Prerequisites

- Node.js (v18+ recommended for Vite 5 compatibility)
- MongoDB (running locally or Atlas connection string)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd "E-Commerce"
```

### 2. Install dependencies

```bash
npm install
npm install --prefix frontend
```

### 3. Configure environment variables

Update the `.env` file in the project root with your credentials:

| Variable | Description |
|----------|-------------|
| `PORT` | HTTP port for the backend (default: `4000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `JWT_EXPIRE` | JWT token expiry duration (e.g. `7d`) |
| `COOKIE_EXPIRE` | Cookie expiry in days |
| `CLOUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `SMTP_HOST` | SMTP server host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP server port (e.g. `465`) |
| `SMTP_SERVICE` | SMTP service name (e.g. `gmail`) |
| `SMTP_MAIL` | SMTP email address |
| `SMTP_PASSWORD` | SMTP email password |
| `SENDGRID_API_KEY` | SendGrid API key |
| `SENDGRID_MAIL` | SendGrid sender email |
| `SENDGRID_RESET_TEMPLATEID` | SendGrid password-reset template ID |
| `SENDGRID_ORDER_TEMPLATEID` | SendGrid order-confirmation template ID |
| `STRIPE_API_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `PAYTM_MID` | Paytm merchant ID |
| `PAYTM_MERCHANT_KEY` | Paytm merchant key |
| `PAYTM_WEBSITE` | Paytm website (e.g. `WEBSTAGING`) |
| `PAYTM_CHANNEL_ID` | Paytm channel ID (e.g. `WEB`) |
| `PAYTM_INDUSTRY_TYPE` | Paytm industry type (e.g. `Retail`) |
| `PAYTM_CUST_ID` | Paytm customer ID |
| `NODE_ENV` | Environment mode (`development` / `production`) |

### 4. Seed the database

```bash
npm run seed
```

This populates the database with sample products and a default user.

### 5. Run the application

**Both frontend & backend together:**

```bash
npm run dev
```

**Backend only (port 4000):**

```bash
npm run server
```

**Frontend only (port 3000):**

```bash
npm run frontend
```

> The frontend Vite dev server proxies `/api` requests to `http://localhost:4000`.

---

## Default Credentials

**Admin User:**
- **Email:** Vishal@gmail.com
- **Password:** Vishal@123

**Standard User:**
- **Email:** Vansh@gmail.com
- **Password:** Vansh@123

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend & backend concurrently |
| `npm start` | Run backend with nodemon |
| `npm run server` | Run backend with nodemon |
| `npm run frontend` | Run frontend dev server |
| `npm run seed` | Seed database with sample data |
| `npm run build --prefix frontend` | Build frontend for production |

---

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/products` | Get all products (with search, filter, pagination) |
| GET | `/api/v1/product/:id` | Get single product details |
| POST | `/api/v1/product/new` | Create product (Admin) |
| PUT | `/api/v1/product/:id` | Update product (Admin) |
| DELETE | `/api/v1/product/:id` | Delete product (Admin) |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/register` | Register a new user |
| POST | `/api/v1/login` | Login |
| GET | `/api/v1/logout` | Logout |
| GET | `/api/v1/me` | Get logged-in user profile |
| PUT | `/api/v1/me/update` | Update profile |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/order/new` | Place a new order |
| GET | `/api/v1/order/:id` | Get order details |
| GET | `/api/v1/orders/me` | Get logged-in user's orders |

### Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/payment/process` | Process Stripe payment |
| POST | `/api/v1/payment/paytm` | Process Paytm payment |

---

## Project Structure

```
├── backend/
│   ├── config/
│   │   ├── config.env.example  # Example environment config
│   │   └── database.js         # MongoDB connection
│   ├── controllers/
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── asyncErrorHandler.js
│   │   ├── auth.js             # JWT authentication
│   │   └── error.js            # Error handling
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── paymentModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── orderRoute.js
│   │   ├── paymentRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── utils/
│   │   ├── errorHandler.js
│   │   ├── searchFeatures.js
│   │   ├── sendEmail.js
│   │   └── sendToken.js
│   ├── seed.js                 # Database seeder
│   ├── app.js                  # Express app setup
│   └── server.js               # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Admin/          # Admin dashboard & management
│   │   │   ├── Cart/           # Shopping cart
│   │   │   ├── Home/           # Homepage
│   │   │   ├── Layouts/        # Shared layout components
│   │   │   ├── Order/          # Order tracking
│   │   │   ├── ProductDetails/ # Product detail pages
│   │   │   ├── Products/       # Product listing
│   │   │   ├── User/           # Auth & profile
│   │   │   └── Wishlist/       # Wishlist
│   │   ├── actions/            # Redux action creators
│   │   ├── constants/          # Redux action types
│   │   ├── reducers/           # Redux reducers
│   │   ├── Routes/             # Protected route wrappers
│   │   ├── assets/             # Static assets
│   │   ├── utils/              # Utility functions
│   │   ├── store.js            # Redux store configuration
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # Application entry point
│   │   └── index.css           # Global styles
│   ├── vite.config.mjs         # Vite configuration
│   ├── tailwind.config.js      # TailwindCSS configuration
│   ├── postcss.config.js       # PostCSS configuration
│   └── package.json
├── .env                        # Environment variables
├── .gitignore
├── Procfile                    # Deployment process file
├── package.json                # Root package.json
└── README.md
```

---

## Deployment

A `Procfile` is included for deployment on platforms like Render or Heroku:

```
web: node backend/server.js
```

To build the frontend for production:

```bash
npm run build --prefix frontend
```

The backend is configured to serve the frontend build files in production mode.
