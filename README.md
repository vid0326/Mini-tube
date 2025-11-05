# Mini-tube(Youtube clone)

A full-stack YouTube clone application built with Node.js, Express, React, and Vite. This project replicates core YouTube features including video uploads, channel management, playlists, shorts, real-time interactions, and analytics.

## Features

- **User Authentication**: Sign up, sign in, and password recovery
- **Channel Management**: Create and update personal channels
- **Content Creation**: Upload videos, shorts, posts, and create playlists
- **Real-time Features**: Live interactions using Socket.io
- **AI Integration**: AI-powered content features
- **Analytics & Revenue**: Track performance and earnings
- **Responsive Design**: Mobile-friendly interface with TailwindCSS
- **Search & Recommendations**: Content discovery and personalized suggestions

## Tech Stack

### Backend

- **Node.js** with **Express.js** for server-side logic
- **MongoDB** with **Mongoose** for data storage
- **JWT** for secure authentication
- **Cloudinary** for media uploads and management
- **Socket.io** for real-time communication
- **Nodemailer** for email services
- **bcryptjs** for password hashing

### Frontend

- **React** with **Vite** for fast development
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **TailwindCSS** for styling
- **Axios** for API communication
- **Firebase** for additional integrations
- **Recharts** for data visualization

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB database
- Cloudinary account for media storage
- Firebase project (optional, for additional features)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd youtube
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following variables:

   ```
   PORT=8000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   EMAIL_USER=<your-email-address>
   EMAIL_PASS=<your-email-password>
   ```

   For Firebase integration, update the configuration in `frontend/utils/firebase.js`.

## Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm run dev
   ```

   The server will run on `http://localhost:8000`

2. **Start the frontend development server:**

   ```bash
   cd frontend
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

3. **Access the application:**
   Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
youtube/
├── backend/                 # Node.js/Express backend
│   ├── config/             # Configuration files
│   ├── controller/         # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── model/              # MongoDB models
│   ├── route/              # API routes
│   ├── socket.js           # Socket.io configuration
│   └── package.json
├── frontend/                # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── component/      # Reusable components
│   │   ├── customHooks/    # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── redux/          # State management
│   │   └── utils/          # Utility functions
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/forgot-password` - Password reset request

### User Management

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/update` - Update user information

### Content Management

- `GET /api/content/videos` - Get all videos
- `POST /api/content/upload-video` - Upload new video
- `GET /api/content/shorts` - Get all shorts
- `POST /api/content/create-playlist` - Create playlist

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by YouTube's design and functionality
- Built with modern web technologies for educational purposes
