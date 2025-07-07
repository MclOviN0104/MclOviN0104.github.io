# Curtain Catalog App - Frontend

## Overview
This document provides an overview of the frontend application for the Curtain Catalog project. The frontend is built using React and TypeScript, providing an interactive user experience for browsing and calculating budgets for custom curtains.

## Project Structure
The frontend application is organized as follows:

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Catalog.tsx     # Displays the catalog of prefabricated curtains
│   │   ├── Calculator.tsx   # Provides budget calculation functionality
│   │   └── AdminPanel.tsx   # Admin panel for managing curtain prices and systems
│   ├── pages/              # Application pages
│   │   └── Home.tsx        # Home page component
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types/              # TypeScript interfaces
│       └── index.ts        # Data structures used in components
├── package.json             # NPM configuration file
└── tsconfig.json            # TypeScript configuration file
```

## Installation
To get started with the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd curtain-catalog-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To run the frontend application in development mode, use the following command:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Building for Production
To create a production build of the application, run:
```
npm run build
```
This will generate optimized static files in the `build` directory.

## Contributing
If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.