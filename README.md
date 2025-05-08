Activity Booking App
=====================

Description:
------------
This is a simple REST API built using Node.js, Express.js, and MongoDB.
It allows users to register, log in, and book or view activities like sports or movies.

Setup Instructions:
-------------------

1. Clone the repository
   git clone https://github.com/Shifal/activity-booking-app.git
   cd activity-booking-app

2. Install dependencies
   npm install

3. Add environment variables
   Create a file named `.env` in the root directory and add:

   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/activity-app
   JWT_SECRET=your_jwt_secret

4. Start MongoDB locally
   Make sure MongoDB is installed and running.
   If you installed MongoDB locally, run:
   mongod

5. Start the server
   npm run start

6. The server should now be running at:
   http://localhost:5000


API Endpoints:
--------------

Auth:
- POST /api/auth/register
  Body: name, email, phone, password

- POST /api/auth/login
  Body: email, password

- Get /api/auth/allUsers

Activities:
- GET /api/activities/allActivities
  Description: Public list of all activities

- POST /api/activities/addActivities
  Description: Create one or more activities (requires login)
  Body: Array of objects with title, description, location, date, time

Bookings:
- GET /api/bookings/myBookings
  Description: get the booking which user have booked

- POST /api/bookings/bookActivities
  Description: book an activity which is available
  Body:pass activityId 

Tech Stack:
  Backend: Node.js, Express.js
  Database: MongoDB (with Mongoose)
  Authentication: JWT (JSON Web Token)
  Validation: Joi
  Password Security: Bcrypt
  Deployment: Render (optional)
  Testing: Postman

Notes:
------
- All passwords are stored as hashed strings.
- JWT is used for authentication.
- Joi is used for input validation.
