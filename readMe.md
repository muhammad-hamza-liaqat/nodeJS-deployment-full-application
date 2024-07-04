# My Node.js Project

This project is a Node.js application that uses Express for the server and Morgan for logging HTTP requests. It is configured to use environment variables securely with `dotenv`.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Vercel CLI

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/muhammad-hamza-liaqat/nodeJS-deployment-full-application
    cd your-repo-folder
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of your project and add the required environment variables. Ensure you also have a `.env.example` file listing all required environment variables.

    ```env
    PORT= "your PORT"
    ```

    Example `.env.example` file:

    ```env
    PORT=
    ```

4. **Install Vercel:**

    ```sh
    npm i vercel@latest
    ```

## Usage

1. **Start the server:**

    ```sh
    npm start
    ```

    This will start the server and log a message indicating that the server is running at `http://localhost:3000` (or the port specified in your `.env` file).

2. **Endpoints:**

    - Home: `GET /`

    This will hit the home route and log the request using Morgan.

## Deployment

1. **Deploy to Vercel:**

    ```sh
    vercel
    ```

    Follow the prompts in the terminal:

    - `Set up and deploy` -> Press `Y`
    - `Which scope do you want to deploy to?` -> Press `Enter`
    - `Link to existing project?` -> Press `N`
    - `What's your project's name?` -> Press `Enter`
    - `To which directory is your code located?` -> `./` -> Press `Enter`

    The code will be deployed and a link will be generated.

2. **Redeploy after changes:**

    ```sh
    vercel --prod
    ```

## Configuration

Create a `vercel.json` file in the root of your project with the following content:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}



This `README.md` file provides a clear and concise guide for setting up, using, and deploying your Node.js project. It follows standard conventions and includes sections for installation, usage, deployment, configuration, contributing, and licensing.

