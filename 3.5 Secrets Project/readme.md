# Secrets Project

This is a simple Node.js project that demonstrates the use of middleware, routing, and basic authentication using Express.js. The project allows users to access a secret page if they provide the correct password.

## Features

- Middleware to check user authentication.
- Serves static HTML files for the main page and the secret page.
- Uses `body-parser` to parse incoming form data.
- Demonstrates basic routing with Express.js.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd 3.5\ Secrets\ Project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. Enter the password in the form to access the secret page. The correct password is:

   ```
   ILoveProgramming
   ```

## Project Structure

```
3.5 Secrets Project/
├── public/
│   ├── index.html       # Main page
│   ├── secret.html      # Secret page
├── index.js             # Main server file
├── package.json         # Project metadata and dependencies
```

## How It Works

1. The server uses `body-parser` middleware to parse incoming form data.
2. A custom middleware function `passwordCheck` checks if the password entered by the user matches the predefined password (`ILoveProgramming`).
3. If the password is correct, the user is authorized to access the secret page. Otherwise, they are redirected back to the main page.

## Dependencies

- `express`: Web framework for Node.js.
- `body-parser`: Middleware to parse incoming request bodies.
