# ExpressJs + TypeScript + MongoDB + Auth – Starter Template

This custom starter template builds a robust foundation for server-side applications using **Express.js**, **TypeScript**, and **MongoDB**, with a modular folder structure, routes, controllers, and utilities for streamlined development.

## Features

- **TypeScript Integration**: Fully typed codebase for enhanced type safety and developer productivity.
- **MongoDB with Mongoose**: Pre-configured MongoDB connection using Mongoose in `src/db/init.ts`, managed via `DB_URI` environment variable.
- **Modular Structure**: Organized folders for routes, controllers, models, and utilities to ensure maintainability.
- **Secure Middleware**: Includes `helmet` for security headers, `cors` with configurable origins, and `express-rate-limit` for IP rate limiting (100 requests/10 minutes).
- **Authentication Utilities**: JWT-based auth with `TryCatch` for async error handling and `ErrorHandler` for consistent error responses.
- **Import Aliases**: `@/` alias mapped to `src/` for cleaner imports.
- **Environment Management**: Uses `dotenv` for secure configuration of environment variables (e.g., `DB_URI`, `PORT`, `ALLOWED_ORIGINS`).
- **Dockerfile**: Dockerfiles setup for development and production.

## Folder Structure

```
src/
├── controllers/                      # Request handlers for API endpoints
│   ├── user.ts                       # Example controller for user-related logic
│   └── ...                           # Add more controllers as needed
├── routes/                           # Express route definitions
│   ├── user.ts                       # Routes for user-related endpoints
├── db/                               # Database connection and configuration
│   ├── init.ts                       # MongoDB connection setup using Mongoose
├── middlewares/                      # Custom middleware functions
│   ├── error.ts                      # Centralized error handling middleware
│   ├── verifyAuth.ts                 # Example middleware for authentication
├── models/                           # Mongoose schemas for MongoDB collections
│   ├── user.ts                       # Example User schema with fields like name, email
│   └── ...                           # Add more models as needed
├── types/                            # TypeScript type definitions
│   ├── user.ts                       # Interfaces for User-related data
├── utils/                            # Utility functions and helpers
│   ├── asyncHandler.ts               # Async wrapper for controllers
│   ├── errorHandler.ts               # Error handling utility
├── app.ts                            # Main application entry point (Express setup)
├── .env.example                      # Template for environment variables
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Project dependencies and scripts
```

## Getting Started

1. **Clone the Template**:
   ```bash
   git clone -b express-ts-mongo-auth https://github.com/viraj-gamdha/aplance-app-templates.git my-project
   cd my-project
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Copy `.env.example` to `.env` and configure:
     ```bash
     cp .env.example .env
     ```

4. **Run the Application**:
   - Development mode with hot reload:
     ```bash
     npm run dev
     ```
   - Production build:
     ```bash
     npm run build
     npm start
     ```

5. **Access the API**:
   - The server runs on `http://localhost:4000` (default: 4000).
   - Example endpoints (if implemented, e.g., user routes):
     - `POST /api/users/signup` – Register a new user.
     - `POST /api/users/login` – Log in a user.

## Scripts

- `npm run dev`: Start the server in development mode with `tsx` for hot reloading of `src/app.ts`.
- `npm run build`: Compile TypeScript to JavaScript (output in `dist/`).
- `npm run start`: Run the compiled JavaScript in production mode with `NODE_ENV=production`.
- `npm run lint`: Run ESLint to check code style.
- `npm run lint:fix`: Run ESLint with automatic fixes for code style issues in the `src/` directory.

## Notes

- **Scalability**: Add new routes, controllers, and models in their respective folders to extend the application.
- **Authentication**: The template includes a basic auth setup (e.g., JWT-based). Enhance it with additional middleware as needed.
- **MongoDB**: Ensure a MongoDB instance is running locally or use a cloud provider like MongoDB Atlas.