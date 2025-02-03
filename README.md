# Blog-App

A mobile blog app developed using React Native. The app allows users to create, edit, and delete blog posts. JSON Server is used as the backend for handling the CRUD operations.

## Features
- Create, read, update, delete blog posts
- JSON Server backend
- Ngrok for exposing local server to the internet

## Installation

To run the project, you first need to install the dependencies for both the frontend and backend.

### 1. Clone the repository:

git clone https://github.com/Yarenaydin/Blog-App.git

Backend Setup
cd backend
npm install

Running the Backend (JSON Server + Ngrok)
cd backend
npm start

Expose the Backend to the Internet with Ngrok:
cd backend
ngrok http 5000

Ngrok will generate a public URL (e.g., http://xyz123.ngrok.io), which forwards to your local server running on http://localhost:5000.
Keep this terminal open, as Ngrok needs to keep running.

Frontend Setup
cd blog
npm install

İşte verdiğin yazıların düzenlenmiş hali, Markdown formatına uygun şekilde:


# Blog-App

A mobile blog app developed using React Native. The app allows users to create, edit, and delete blog posts. JSON Server is used as the backend for handling the CRUD operations.

## Features
- Create, read, update, delete blog posts
- JSON Server backend
- Ngrok for exposing local server to the internet

## Installation

To run the project, you first need to install the dependencies for both the frontend and backend.

### 1. Clone the repository:
```bash
git clone https://github.com/Yarenaydin/Blog-App.git
Backend Setup
2. Navigate to the backend directory:

cd backend
Install backend dependencies:


npm install
Running the Backend (JSON Server + Ngrok)
3. Run the Backend with JSON Server:
Navigate to the backend folder if you're not already there:


cd backend
Start the JSON Server:


npm start
By default, the server will run on http://localhost:5000.

4. Expose the Backend to the Internet with Ngrok:
In a new terminal window (while JSON Server is running), navigate to the backend folder:


cd backend
Run Ngrok to expose the backend:


ngrok http 5000
Ngrok will generate a public URL (e.g., http://xyz123.ngrok.io), which forwards to your local server running on http://localhost:5000.

Keep this terminal open, as Ngrok needs to keep running.

Frontend Setup
5. Navigate to the frontend directory:

cd blog
Install frontend dependencies:


npm install

Running the Frontend (Expo)
cd blog
npx expo start
