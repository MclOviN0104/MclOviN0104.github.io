# Curtain Catalog App - Backend Documentation

## Overview
This document provides an overview of the backend for the Curtain Catalog application. The backend is built using Node.js and Express, and it serves as the API for the frontend application, handling requests related to the catalog of curtains and budget calculations.

## Project Structure
The backend is organized into the following directories:

- **src**: Contains the source code for the backend application.
  - **controllers**: Contains controller functions that handle incoming requests.
  - **models**: Defines the data models used in the application.
  - **routes**: Contains route definitions that map HTTP requests to controller functions.
  - **services**: Contains business logic for data operations.
  - **types**: Defines TypeScript interfaces for data structures.
  - **app.ts**: The entry point of the application, initializing the Express app.

## Installation
To set up the backend, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd curtain-catalog-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the backend server, run the following command:
```
npm start
```
The server will be available at `http://localhost:3000` by default.

## API Endpoints
The backend exposes several API endpoints for interacting with the curtain catalog and budget calculator. Refer to the routes defined in `src/routes/index.ts` for detailed information on available endpoints.

## Testing
To run tests, use the following command:
```
npm test
```

## Contributing
If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.