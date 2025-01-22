

---

# FiverrIndia - A Freelancing Web App

## Overview
FiverrIndia is a modern and user-friendly freelancing web application designed to connect clients with talented freelancers from India. Modeled after popular platforms like Fiverr, this app allows freelancers to showcase their skills, manage projects, and receive payments. Clients can browse freelancer profiles, post projects, and collaborate with the right talent for their needs.

## Features
- **User Registration & Authentication**: Secure sign-up and login for both clients and freelancers.
- **Freelancer Profiles**: Freelancers can create detailed profiles, highlighting their skills, work history, and portfolio.
- **Project Listings**: Clients can post job opportunities with detailed requirements and browse available freelancers.
- **Job Bidding**: Freelancers can submit proposals for posted projects.
- **Stripe Payment Integration**: Secure payment system powered by Stripe to ensure freelancers are paid for completed work.
- **Ratings & Reviews**: Clients can rate freelancers after project completion, promoting transparency and trust.
- **Real-Time Messaging**: In-app messaging for efficient communication between freelancers and clients.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Stripe
- **Hosting**: Vercel
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure
The repository is divided into two main folders for the frontend and backend:

- **client**: Contains the React.js frontend code.
- **server**: Contains the Express.js backend code.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/eradilrasheed/fiverrindia.git
   ```

2. Navigate to the project directory:
   ```bash
   cd fiverrindia
   ```

3. Install dependencies for both the frontend and backend:

   For the frontend (client):
   ```bash
   cd client
   npm install
   ```

   For the backend (api):
   ```bash
   cd server
   npm install
   ```

4. Start the development servers:

   - Frontend: Running at `http://localhost:5173`
   ```bash
   npm run dev
   ```

   - Backend: Running at `http://localhost:3000`
   ```bash
   npm start
   ```

5. Visit `http://localhost:5173` to view the frontend, and ensure the backend is running on `http://localhost:3000`.

## .env

```bash
MONGO_URL = " "
STRIPE_SECRET_API = " "
JWT_KEY = " "

```

## Deployment
The application is deployed on **Vercel**. 
## Payment Integration
Stripe has been integrated as the payment gateway, enabling secure transactions between clients and freelancers. This ensures that freelancers are paid promptly for completed work.

## Contributing
Contributions are welcome! If you would like to contribute, feel free to fork the repository, make changes, and submit a pull request. Please follow the standard GitHub workflow for submitting issues and pull requests.

---
