🌍 Tour & Travel Booking Website – Full Stack (Frontend + Backend)

This MERN Tour & Travel Booking Website is a complete full-stack web application built using MongoDB, Express.js, React.js, and Node.js. The frontend delivers a responsive, modern, and user-friendly interface where visitors can explore destinations, view packages, browse galleries, and submit booking forms. The backend handles all major server-side operations, including booking management, authentication, API routing, and data storage using MongoDB. Designed with a clean architecture, modular code organization, and professional full-stack concepts, this project is perfect for learning MERN development, academic submissions, business prototypes, or portfolio showcases.

✨ Features
🎨 Frontend (React.js)

Fully responsive and modern UI

Elegant pages for Home, Destinations, Packages, Gallery, Contact

Single Page Application (SPA) using React Router

Smooth transitions and interactive UI

Form validation and user interactions

Dynamic data rendering through APIs

🖥 Backend (Node.js + Express.js)

Complete RESTful API for all operations

Booking API (create, fetch, delete)

User authentication using JWT (optional)

Destination & package management endpoints

Secure backend with validation and error handling

MVC folder structure (Routes, Models, Controllers)

🗄 Database (MongoDB + Mongoose)

Tour Packages Collection

Destination Collection

Booking Collection

User Collection (optional login/signup)

Optimized schema and queries

🛠 Tech Stack
Layer	Technology
Frontend	React.js, HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Tools	npm, Git, Postman, VS Code
📁 Project Structure
mern-tour/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── bookingController.js
│   │   └── packageController.js
│   ├── models/
│   │   ├── Booking.js
│   │   └── Package.js
│   ├── routes/
│   │   ├── bookingRoutes.js
│   │   └── packageRoutes.js
│   ├── middleware/
│   └── utils/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.js
│
└── README.md

⚙️ How to Install & Run the complete MERN Tour Project

Follow these steps to run Frontend + Backend + Database correctly.

1️⃣ Clone the Repository
git clone <https://github.com/Raj-Kumar-Chaurasiya/MERN2-Project>
cd mern-tour

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend server:

npm start


Backend will run at:

http://localhost:5000

3️⃣ Frontend Setup

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

4️⃣ Connect Frontend to Backend API

Inside frontend/.env:

REACT_APP_API_URL=http://localhost:5000


React will now communicate with your backend API endpoints.

🔗 API Endpoints (Examples)
📦 Packages API
Method	Endpoint	Description
GET	/api/packages	Get all tour packages
POST	/api/packages	Add new package
GET	/api/packages/:id	Get package by ID
📝 Booking API
Method	Endpoint	Description
POST	/api/bookings	Submit booking
GET	/api/bookings	View all bookings
DELETE	/api/bookings/:id	Delete booking
📄 Project Description (Paragraph)

This MERN Tour & Travel Booking Website is a full-stack travel application that brings together a beautiful and responsive frontend with a fully functional backend API. Built using React, the frontend offers an interactive user experience with smooth navigation, dynamic content, and visually appealing pages that showcase destinations, tour packages, and travel details. The backend — developed using Node.js and Express.js — manages booking operations, API routing, form processing, and secure data management. MongoDB serves as the database layer, storing user bookings, packages, and destination data efficiently using Mongoose schemas. This project demonstrates how a real-world travel booking system works, combining professional UI/UX design with powerful backend functionality. It is ideal for full-stack learning, academic projects, practical demonstrations, and portfolio submissions.

🚀 Future Enhancements

Admin Dashboard for managing tours & bookings

Online payment gateway integration

Cloud image storage (Cloudinary)

Email confirmation for bookings

Search & filtering features

Role-based access (Admin/User)

📜 License

This project is free for education, research, and portfolio purposes.
