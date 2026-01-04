
# Node Express JWT Authentication API

A **secure backend API** built using **Node.js**, **Express.js**, and **MongoDB** with **JWT-based authentication**.  
This project demonstrates clean code structure, secure password handling, and modular architecture — ideal for freelance backend projects.

---

## 🚀 Features

- User registration and login  
- Password hashing using **bcrypt**  
- JWT-based authentication for protected routes  
- Express.js routing with modular controllers  
- MongoDB integration using Mongoose  
- Error handling and logging middleware  
- Configurable database connection  

---

## 🛠️ Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB ODM  
- **bcrypt** – Password hashing  
- **jsonwebtoken** – Authentication tokens  
- **Middleware** – Error handling & logging  

---

## 📁 Project Structure

server.js
package.json
src/
├─ controllers/
├─ routes/
├─ models/
├─ middlewares/
└─ config/
└─ connectToDatabase.js
.gitignore
README.md


---

## ⚡ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DuaAkbar/node_express_jwt_auth.git

2. Navigate into the project directory:

cd node-express-jwt-auth

3. Install dependencies:

npm install

4. Create a .env file with your MongoDB connection string and JWT secret:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

5. Run the server:

npm run dev

🔐 Security

Passwords are hashed before saving to the database

JWT secrets and sensitive data are never committed

.env file is ignored using .gitignore

📌 Usage

Test authentication endpoints using Postman or Insomnia

Protected routes require a valid JWT token

Easy to extend for role-based access or additional features