# FullStack Assignment – Express + MongoDB + EJS

A full-stack project built as part of the **CodeRower Software Pvt Ltd** assignment.  
This app demonstrates a simple **REST API with Express & MongoDB** and a **frontend using EJS templates**.

---

## 📌 Features
- REST API with **Express & Mongoose**
- MongoDB Atlas connection
- EJS templates for frontend
- Fetch configuration by `configId`
- Update remark by `configId`
- Simple clean UI with forms

---

## 📂 Project Structure
```
internship/
│── server.js              # Entry point
│── package.json
│
├── config/                # Database connection
│   └── db.js
│
├── models/                # Mongoose schemas
│   └── Configuration.js
│
├── controllers/           # API logic
│   └── configController.js
│
├── routes/                # API routes
│   └── configRoutes.js
│
├── views/                 # EJS templates
│   ├── index.ejs
│   ├── update.ejs
│   └── partials/header.ejs
│
└── public/                # Static assets
    ├── css/style.css
    └── js/main.js
```

---

## ⚙️ Installation & Setup

1. Clone the repo or unzip the project folder:
   ```bash
   git clone https://github.com/SGoD11/internship.git
   cd internship
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev   # for development (with nodemon)
   npm start     # for production
   ```

4. The app runs at:
   ```
   http://localhost:8080
   ```

---

## 🗄️ Database Setup
This project uses **MongoDB Atlas**.  
The connection string is inside `.env` file with named as `DATABASE_URL`:
so create a .env file and then do this below

```js
DATABASE_URL = secret
```

### Sample Document
Insert at least one config document for testing:
```json
{
  "configId": "qwertyuiop",
  "matrix": [
    ["sym1","sym2","sym3"],
    ["sym4","sym6","sym8"],
    ["sym5","sym1","sym0"]
  ],
  "remark": "Initial remark"
}
```

---

## 🔗 API Endpoints

### 1. Get Configuration
**Request**
```
GET /api/configurations/:id
```

**Response**
```json
[
  ["sym1","sym2","sym3"],
  ["sym4","sym6","sym8"],
  ["sym5","sym1","sym0"]
]
```

---

### 2. Update Remark
**Request**
```
PUT /api/configurations/:id
```
**Body**
```json
{ "remark": "I am done with task" }
```

**Response**
```json
{ "message": "success" }
```

---

## 🖥️ Frontend Pages

### 🔹 Fetch Page
- URL: `http://localhost:8080/`
- Enter a **Config ID** and click **Fetch**
- Displays the configuration matrix

### 🔹 Update Page
- URL: `http://localhost:8080/update`
- Enter a **Config ID** and new **remark**
- Click **Update** → Remark gets updated in MongoDB

---
