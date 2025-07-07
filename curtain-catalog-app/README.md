# Curtain Catalog App

## Overview
The Curtain Catalog App is an interactive web platform designed for the custom curtain business, Diegux23. The application provides users with a catalog of prefabricated curtains and a budget calculator that allows for personalized pricing based on user-defined measurements and fabric choices.

## Features
- **Interactive Catalog**: Browse through a variety of prefabricated curtain models with fixed pricing.
- **Budget Calculator**: Input dimensions, fabric type, and installation system to receive an instant budget estimate.
- **Admin Panel**: Manage and update fabric prices and installation systems easily.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **Technologies**: Node.js, Express.js, MySQL/SQLite
- **Key Files**:
  - `src/app.ts`: Entry point for the backend application.
  - `src/controllers/index.ts`: Handles requests related to the catalog and budget calculator.
  - `src/models/index.ts`: Defines data models for curtains and pricing.
  - `src/routes/index.ts`: Maps HTTP requests to controller functions.
  - `src/services/index.ts`: Contains business logic for data operations.
  - `src/types/index.ts`: TypeScript interfaces for data shapes.

### Frontend
- **Technologies**: React, TypeScript
- **Key Files**:
  - `public/index.html`: Main HTML file for the frontend application.
  - `src/components/Catalog.tsx`: Displays the catalog of prefabricated curtains.
  - `src/components/Calculator.tsx`: Provides budget calculation functionality.
  - `src/components/AdminPanel.tsx`: Admin panel for managing prices and systems.
  - `src/pages/Home.tsx`: Home page component.
  - `src/App.tsx`: Main application component for routing.
  - `src/index.tsx`: Entry point for the React application.

## Installation
1. Clone the repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
4. Set up the database using the schema provided in `database/schema.sql`.
5. Start the backend server and the frontend application.

## Usage
- Access the application through the designated URL after starting both the backend and frontend servers.
- Use the catalog to explore available curtain options and utilize the budget calculator for personalized estimates.

## Metrics of Success
- Load time under 3 seconds.
- Budget calculation time under 2 seconds.
- 100% of functionalities implemented.
- User satisfaction rate of 80% or higher in mobile usability tests.

## Next Steps
- Register a domain and set up hosting.
- Configure Git repository and development environments.
- Establish an initial catalog of prefabricated curtains.
- Create detailed wireframes for the user interface.
- Plan weekly progress reviews.

## License
This project is licensed under the MIT License.