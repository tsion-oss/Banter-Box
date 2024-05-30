# Banter Box

## Overview

Banter Box is an anonymous chat platform that allows users to engage in real-time conversations without revealing personal identities. It provides customizable user settings to enhance privacy and security while facilitating spontaneous and open discussions.

## Problem

In traditional chat platforms, users often feel hesitant to express themselves freely due to concerns about privacy and the fear of judgment. Banter Box addresses this by offering a space where individuals can interact anonymously, encouraging authentic conversations without the pressure of identity exposure.

## Features

- **Real-time Anonymous Chat**: Users can engage in conversations with others in real-time without revealing personal identities.
- **Customizable User Settings**: Users have the option to customize their settings to enhance privacy and security, such as setting chat visibility preferences and profile anonymity levels.
- **Public Chat Rooms**: Users can join public chat rooms based on interests.
- **Search and Discovery**: Users can search for specific topics or interests to discover relevant chat rooms and conversations.


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

### Sitemap

- Chat Rooms Directory
- Public Chat Room
- User Profile Settings

### Authentication

User authentication is handled using JWT (JSON Web Tokens) for secure access to protected routes.

## Roadmap

1. **Backend Setup**: Implement server-side logic for handling chat rooms, messages, and user authentication.
2. **Frontend Setup**: Develop the user interface for interacting with chat rooms and managing user settings.
3. **Real-time Communication**: Integrate Socket.io for real-time messaging between users.
4. **User Authentication**: Implement user authentication using JWT for secure access to chat features.
5. **Customizable User Settings**: Develop user profile settings to customize chat preferences and privacy options.
6. **Chat Room Management**: Implement functionality for creating, joining, and managing public and private chat rooms.
7. **Testing and Optimization**: Perform thorough testing and optimization to ensure a seamless and responsive chat experience.
8. **Deployment and Launch**: Deploy the application to a hosting platform and launch to the public.

## Nice-to-Haves

 **Rich Media Support**: Enable support for sharing multimedia content within chat rooms.
 **Notification System**: Implement notification settings for alerting users about new messages and chat invitations.

![create account page](images/create-account.png)
![Log in page](images/login.png)
![Chat room page](images/chatroom.png)
![User setting page](images/profile-setting.png)
![Diagram](images/diagram.png)

