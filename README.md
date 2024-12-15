Agenda - Todo Web Application
Table of Contents
Project Overview
Features
User Specifications
Tech Stack
Installation
Usage
Project Structure
API Documentation


Project Overview
Agenda is a full-stack Todo List Web Application that helps users organize their tasks effectively. It provides secure user authentication and a responsive interface for managing tasks.

Features
User Authentication:
Secure registration and login with encrypted passwords.

Task Management:
Create, view, update, and delete tasks.
Tasks are securely stored in the database and associated with specific users.

One-Step Execution:
Both frontend and backend are managed by starting the backend server with nodemon.

Responsive UI:
A dynamic and user-friendly interface built with React.
User Specifications

This application is designed for users who:
Want a simple and secure way to manage their daily tasks.
Require their tasks to be saved and associated with their user account.

Supported Actions:
Sign Up: Create a new account.
Sign In: Log in securely to access your tasks.
Add Tasks: Create tasks with a title and description.
View Tasks: Display all tasks for your account.
Update Tasks: Modify existing tasks.
Delete Tasks: Remove tasks when they're no longer needed.


Frontend:
React
Axios
Redux Toolkit
Backend:
Node.js
Express.js
MongoDB
Mongoose
Database:
MongoDB (Atlas)

Installation:

Configure MongoDB in conn.js
Open the conn.js file located in the backend/conn folder and replace the MongoDB URL with your own:

await mongoose.connect("your-mongodb-connection-string");


3. Install Dependencies
Install the backend and frontend dependencies by running:
npm install


5. Run the Application
Start the server using:

nodemon app.js
This will serve both the frontend and backend.

Usage
Visit http://localhost:1000 in your browser.
or https://localhost:3443(install cert)
Sign Up for a new account or Sign In if you already have one.
Use the app to add, view, edit, and delete your tasks.

API Documentation
Authentication
Sign Up

Endpoint: POST /api/v1/register
Payload:
json
Copy code
{
  "email": "user@example.com",
  "username": "exampleuser",
  "password": "examplepassword"
}
Sign In

Endpoint: POST /api/v1/signin
Payload:
json
Copy code
{
  "email": "user@example.com",
  "password": "examplepassword"
}
Task Management
Add Task

Endpoint: POST /api/v2/addTask
Payload:
json
Copy code
{
  "title": "Sample Task",
  "body": "Task details",
  "id": "user-id"
}
Get Tasks

Endpoint: GET /api/v2/getTasks/:id
Update Task

Endpoint: PUT /api/v2/updateTask/:id
Payload:
json
Copy code
{
  "title": "Updated Title",
  "body": "Updated Body"
}
Delete Task

Endpoint: DELETE /api/v2/deleteTask/:id
Payload:
json
Copy code
{
  "id": "user-id"
}
