# E-Commerce Website

This is a full-stack eCommerce web application built using React for the frontend and Node.js for the backend. The application allows users to browse products, view product details, add items to their cart, and manage their accounts with login and signup functionality.

## Features

- **Home Page**: A welcoming page with a search bar for products and delivery location.
- **Product Listing**: Displays all available products with details like name, description, price, and stock.
- **Product Details**: View detailed information about a specific product.
- **Cart**: Add products to the cart and manage them.
- **Authentication**: Login and signup functionality for users.
- **Responsive Design**: Fully responsive UI for all devices.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Axios**: For making API requests.
- **CSS**: For styling the application.

### Backend
- **Node.js**: For building the server-side logic.
- **Express.js**: For handling API routes.
- **MongoDB**: For storing product and user data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-website.git
   cd ecommerce-website

 2. Install dependencies for the frontend:
     cd client
     npm install

3. Install dependencies for the backend:
    cd ../server
    npm install

4. Start the development servers:

   Frontend:    
   cd client
   npm run dev

  Backend:
  cd ../server
  npm start

5.  Open the application in your browser at http://localhost:5173.

ecommerce-website
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar
│   │   │   ├── Footer
│   │   │   └── Card
│   │   ├── pages
│   │   │   ├── Home
│   │   │   ├── Product
│   │   │   ├── Login
│   │   │   ├── Signup
│   │   │   └── Cart
│   │   └── App.jsx
│   └── public
├── server
│   ├── routes
│   ├── models
│   ├── controllers
│   └── server.js
└── README.md
