# Asurion Device Protector App

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li>
        <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
        <a href="#web-architecture">Web Architecture</a>
        <ul>
        <li><a href="#file-structure">File Structure</a></li>
        </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the Project

This web application was developed as part of an interview assignment for Asurion. It is designed to help users track and manage protection plans for their devices. The app also provides AI-generated recommendations for maintaining or upgrading devices.

### Key Features:

- Device Protection Tracking: Add, view, and manage device protection plans.
- AI-Generated Recommendations: Receive personalized tips, reminders, and upgrade suggestions based on device type and age.
- User-Friendly Interface: Intuitive design for easy navigation and interaction.

## Tech Stack

<p align="center">
    <img src="https://skillicons.dev/icons?i=css,firebase,js,nextjs,react,tailwind,vercel" />
</p>

This app also uses Gemini by Google to generate AI recommendation to suggest tips, reminders, or upgrades based on device type and age that the users are currently using.

## Web Architecture

This app is based on the Next JS framework and uses the app routing to create dynamic routes based on the file system hierarchy or file structure of the repository.\

- Frontend: Next JS, React, HTML, CSS, Tailwind
- Backend: Firebase Firestore (NoSQL Database), Firebase Web API for Reads and Writes, Auth0 (OAuth) service for JWT (JSON Web Token) based Authentication and Authorization.
- AI: Google Gemini 1.5 Flash Hosted Model with Prompt Enhancement with Retrieval Augmented Generation

### File Structure

    .
    ├── public                  # Media and Images Used Throughout the Application
    │   ├── ...
    │   ├── index.js            # Javascript Exporting the Images as Objects
    ├── src/app                 # Source files. App Routing (Dynamic Routing) Directory that is used by Next JS.
    │   ├── ...
    │   ├── api                 # Local APIs that have been written in Next JS.
    │   │   ├── ...
    │   ├── components          # Modular and Reusable React Components that have been used across the application.
    │   │   ├── ...
    │   ├── confirmation        # Directory for the /confirmation route. Protected Page only accesible by Authenticated Users.
    │   │   ├── page.js         # src code for the rendered /confirmation page
    │   ├── constants           # constants used throughout the application for styling and other constant data.
    │   │   ├── ...
    │   ├── user                # Directory for the /user route. Protected Page only accesible by Authenticated Users.
    │   │   ├── page.js         # src code for the rendered /user page
    │   ├── utils               # Directory for backend handlers from firebase and gemini by google. Singleton pattern for handlers to avoid multiple instances.
    │   │   ├── ...
    ├── .env.local              # TO DO: Create and Fill Up as mentioned in Instructions below.
    ├── package.json            # Package Specification for the Application used by npm
    └── README.md

## Getting Started

This is how you may give set up your project locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

- Google Firebase Account and APIs: You can find out more at [Firebase](https://firebase.google.com).

- Gemini API Key: You can configure your API key to access the gemini 1.5 flash model at the Google AI Studio under the free tier [here](https://aistudio.google.com/).

- Auth0: Set up an Auth0 account and project to generate API keys required for running the project locally.

- Environment Variables: In the Root Folder of the Repository create an .env.local file and fill in with the API keys from all the above mentioned services in this format.

  ```sh
  NEXT_PUBLIC_FIREBASE_API_KEY= "Your API Key Here"
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= "Your API Key Here"
  NEXT_PUBLIC_FIREBASE_PROJECT_ID= "Your API Key Here"
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= "Your API Key Here"
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= "Your API Key Here"
  NEXT_PUBLIC_FIREBASE_APP_ID="Your API Key Here"

  NEXT_PUBLIC_GEMINI_API_KEY="Your API Key Here"

  AUTH0_SECRET='Your API Key Here'
  AUTH0_BASE_URL='Your API Key Here'
  AUTH0_ISSUER_BASE_URL='Your API Key Here'
  AUTH0_CLIENT_ID='Your API Key Here'
  AUTH0_CLIENT_SECRET='Your API Key Here'
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rmurarishetti/asurion-app
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Finish the [Prerequisites](#prerequisites) as mentioned in the above section
4. Run the Dev Environment
   ```sh
   npm run dev
   ```
