# Pokémon React App

## Overview

This React application interfaces with the Pokémon API to display a list of Pokémon, supporting features like searching, filtering by type, and pagination.

## Objectives

-   Fetch and display Pokémon data from [PokéAPI](https://pokeapi.co/).
-   Implement search functionality to find Pokémon by name.
-   Filter Pokémon by type.
-   Add pagination for the list of Pokémon.

## Project Status

The project implements the requested functionalities, such as fetching and displaying Pokémon, search functionality, type filtering, and pagination. However, due to the absence of backend capabilities for advanced features like search and filters, certain front-end workarounds were implemented, leading to suboptimal results.

## **Requirements**

-   The application must be built using React.
-   Use modern React features and best practices.
-   The UI should be responsive and match the provided Figma designs.
-   Write clean, readable, and maintainable code.

## Additional Features

-   Pokémon Details Page: Added a basic information page for individual Pokémon. Clicking on a Pokémon redirects to this page, providing fundamental details about the Pokémon.
-   Not Found Page: Implemented a "Not Found" page to handle incorrect URLs gracefully.


## Areas for Improvement

-   Component Refactoring: The project lacks some optimization in terms of component hierarchy and passing variables between components. While a Higher Order Component wasn't deemed necessary for this small application, future iterations could benefit from  improved component organization.
-  Testing: Unit testing is absent from the current implementation. Incorporating testing would ensure better code reliability and maintainability.
-  Global Variables with SaSS: Updating global variables using SaSS is pending and is crucial for a comprehensive styling solution. This enhancement is earmarked for future updates.

## **Design**

-   Use the provided [Figma Dev Mode link](https://www.figma.com/file/gvPOzo76JFAUFUZ4laxgBc/React-Developer-Challenge?type=design&node-id=0%3A1&mode=dev&t=RGeBdMC9tKVyCqYf-1) for development references.
-   Use the [Figma Prototype link](https://www.figma.com/proto/gvPOzo76JFAUFUZ4laxgBc/React-Developer-Challenge?type=design&node-id=1-14&t=jvM2TGGyfH1QN0r6-1&scaling=min-zoom&page-id=0%3A1&mode=design) for user flow and interaction models.

## **API Usage**

-   All Pokémon data should be fetched from the PokéAPI.
-   Ensure proper error handling if the API is down or returns an error.

## Technologies Used

-   React
-   Axios
-   React-Query
-   Sass (BEM methodology)
-   ESLint
-   Prettier

## Setup

1. Clone the repository:

```bash
  git clone https://github.com/fedecanesa/challenge-consultr.git
```

2. Change into the project directory:

```bash
  cd pokemon-react-app
```

3. Install dependencies:

```bash
  npm install
```

4. Create a .env and add this variable:

```bash
  VITE_API_URL_BASE='https://pokeapi.co/api/v2'
```

5. Start the development server:

```bash
  npm run dev
```

6. Open the app in your browser at http://localhost:5173.

## Folder Structure

The project follows a standard React project structure:

pokemon-react-app/
|-- public/
|-- src/
| |-- assets/
| |-- components/
| |-- config/
| |-- hooks/
| |-- models/
| |-- pages/
| |-- routes/
| |-- services/
| |-- utils/
| |-- main.tsx
|-- .gitignore
|-- package.json
|-- README.md

-   `public/`: Contains the public assets and the HTML file.
-   `src/`: Holds the source code.
    -   `assets/`: Includes images, styles, or other assets.
    -   `components/`: Reusable React components.
    -   `config/`: Custom configuration.
    -   `hooks/`: Custom hooks used across the app.
    -   `models/`: Reusable interfaces.
    -   `pages/`: Top-level components/pages.
    -   `services/`: API calls and external services.
    -   `utils/`: Utility functions.
    -   `main.tsx`: Main React component.
-   `.gitignore`: Specifies files or directories to ignore in version control.
-   `package.json`: Node.js project configuration.
-   `README.md`: Project documentation.

## Scripts

-   `npm run dev`: Runs the app in development mode.
-   `npm run format`: Apply Prettier to format the code.
-   `npm run lint`: Run ESLint to analyze the code.
-   `npm build`: Builds the app for production.

## Contact

For questions or feedback, please contact [Federico Canesa](mailto:federicocanesa@gmail.com).
