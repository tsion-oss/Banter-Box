# Banter Box

## Overview

Banter Box is an anonymous chat platform that allows users to engage in real-time conversations without revealing personal identities. It provides customizable user settings to enhance privacy and security while facilitating spontaneous and open discussions.

## Problem

In traditional chat platforms, users often feel hesitant to express themselves freely due to concerns about privacy and the fear of judgment. Banter Box addresses this by offering a space where individuals can interact anonymously, encouraging authentic conversations without the pressure of identity exposure.

## Features

- **Real-time Anonymous Chat (One-on-One)t**: Users can engage in one-on-one conversations in real-time without revealing personal identities.
- **Search**: Users can search for conversations through username.

## Implementation

### Tech Stack

**Frontend**:
- React
- Socket.io Client
- SASS

**Backend**:
- Node.js
- Express
- Socket.io
- MongoDB 

**Authentication**:
- JWT (JSON Web Tokens) for user authentication

**Deployment**:
- Netlify(frontend) Heroku(backend)

### Starting the Server with Vite

To start the Banter Box server locally using Vite, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the server directory in your terminal.
3. Run the command `npm install` to install the necessary dependencies.
4. Start the server by running `npm run dev`.

Once the server is running, you can access the Banter Box application in your web browser.


### Authentication

User authentication is handled using JWT (JSON Web Tokens) for secure access to protected routes.



## Upcoming Features

- **Customizable User Settings**: Users have the option to customize their settings to enhance privacy and security, such as setting chat visibility preferences and profile anonymity levels.
- **Public Chat Rooms**: Users can join public chat rooms based on interests.

![create account page](Banter-Box/images/create-account.png)
![Log in page](images/login.png)
![Chat room page](images/chatroom.png)
![User setting page](images/profile-setting.png)
![Diagram](images/diagram.png)

