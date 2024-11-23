# **Victory Faith Church Backend**

The backend service for the Victory Faith Church website, built with **Node.js**, **Express.js**, and **MongoDB**.

---

## **Features**
- RESTful API for sermons, ministries, and events.
- Database integration with MongoDB.
- Scalable and ready for future features like authentication.

---

## **Technologies**
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **dotenv** for environment variables.

---

## **Getting Started**

### **Setup**
1. Clone the repo:  
   ```bash
   git clone <repo-url>
   cd vfc-backend
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Add a `.env` file:
   ```env
   MONGO_URI=<your-mongo-db-uri>
   PORT=5000
   ```

4. Run the server:  
   ```bash
   npm run dev
   ```

---

## **API Endpoints**

### **Base URL:** `http://localhost:5000`

- **Sermons**:  
  - `GET /api/sermons`: Fetch all sermons.  
  - `POST /api/sermons`: Add a new sermon.

- **Ministries**:  
  - `GET /api/ministries`: Fetch all ministries.  
  - `POST /api/ministries`: Add a new ministry.

---

## **Deployment**
Deploy using platforms like **Heroku**, **Render**, or **AWS**.

---

## **License**
Licensed under the [MIT License](LICENSE).

