# 🏠 Homify – Full-Stack Property Rental Platform

**Homify** is a modern full-stack property rental platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can search, explore, and list rental properties with an interactive interface.

## Features
- Homepage: View featured properties
- Searched Page: Search & filter properties
- Listing Page: Detailed property info
- Login Page: User authentication
- Create Account Page: User registration
- Backend API: Store property & user data in MongoDB

## Tech Stack
- Frontend: React.js, React Router DOM
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Other: CORS, npm

## Folder Structure
Homify/
├── client/
│ ├── src/routes/ (Homepage, SearchedPage, Listing, Login, CreateAccount)
│ ├── main.jsx
│ └── package.json
├── server/
│ ├── index.js
│ └── package.json
└── README.md

bash
Copy code

## Setup (Server + Client)
1. Clone the repo:
```bash
git clone https://github.com/Riti-tech/PropertyRent.git
cd PropertyRent
Backend setup:

bash
Copy code
cd server
npm install
Create .env file in server folder:

ini
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start the server:

bash
Copy code
node index.js
# or use nodemon if installed
Server runs at http://localhost:5000.

Frontend setup:

bash
Copy code
cd ../client
npm install
npm run dev   # for Vite
# or npm start if using CRA
Client runs at http://localhost:5173 (Vite) or http://localhost:3000.

Frontend Routes
Path	Component	Description
/	Homepage	Landing page
/SearchedPage	SearchedPage	Search results
/ListingPage	ListingPage	Detailed property
/LoginPage	Login	Login page
/CreateAccount	CreateAccount	Registration page

Backend API
Method	Endpoint	Description
GET	/	Server status
POST	/login	Login (expects name & password)
POST	/register	Register new user

Images
Screenshot[1]
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/52a30ca1-a68f-4cee-be78-a0ec48c2974a" />

