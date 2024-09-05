# Real-time Chat Application

This is a real-time chat application built using Socket.io for real-time communication, Node.js for the backend server, and React.js for the frontend. The application allows users to join chat rooms and exchange messages in real-time.

## Features

- Real-time messaging with Socket.io
- Join different chat rooms
- Display online users in a room
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, Socket.io
- **Build Tool**: Vite

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

## Installation

### Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

   The server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React application:

    ```bash
    npm run dev
    ```

   The application will be available at `http://localhost:3000`.

## Configuration

1. **Backend**: Configure the server by editing `backend/.env` if needed. Set the appropriate environment variables such as port and database connection details.

2. **Frontend**: Configure the frontend by editing `frontend/.env` and adding the API endpoint or any other environment variables required.

## Usage

1. Open the React application in your browser (`http://localhost:3000`).

2. Use the URL query parameters to join a chat room. For example:

    ```ruby
    http://localhost:3000/?name=John&room=Room1
    ```

3. Interact with the chat application by sending messages and viewing online users.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

