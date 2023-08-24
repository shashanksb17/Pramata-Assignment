

# Photo Album Backend

The Photo Album Backend is a RESTful API that serves as the backend for a photo album application. It provides endpoints for managing albums, photos, and user authentication.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Albums](#albums)
  - [Photos](#photos)
  - [Comments](#comments)
  - [User Authentication](#user-authentication)

## Prerequisites

Before running the backend application, ensure you have the following installed:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shashanksb17/Pramata-Assignment
cd backend
```

2. Install dependencies:

```bash
npm install
```

## Configuration

1. Rename `.env.example` to `.env` and configure the following environment variables:

   - `PORT`: Port number for the server (default: 4000)
   - `JWT_SECRET`: Secret key for JWT token generation

2. Make sure you have MongoDB running. Update the database connection URL in `config/db.js` if necessary.

## Usage

To start the server, run:

```bash
npm start
```

The server will be running at `http://localhost:4000`.

## API Endpoints

### Albums

- `POST /album/albums`: Create a new album.
  - Request Body: `{ "title": "Album Title", "coverImage": "URL to Cover Image" }`
  - Response: Newly created album object.

- `GET /album/albums`: Get all albums.
  - Response: Array of album objects.

### Photos

- `POST /album/photos`: Create a new photo.
  - Request Body: `{ "title": "Photo Title", "imageUrl": "URL to Photo Image", "albumId": "Album ID" }`
  - Response: Newly created photo object.

- `GET /album/albums/:albumId/photos`: Get all photos in an album.
  - Response: Array of photo objects.

### Comments

- `POST /album/comments`: Add a comment to a photo.
  - Request Body: `{ "photoId": "Photo ID", "text": "Comment Text" }`
  - Response: Newly created comment object.

- `GET /album/photos/:photoId/comments`: Get comments for a photo.
  - Response: Array of comment objects.

### User Authentication

- `POST /user/login`: Authenticate a user.
  - Request Body: `{ "email": "user@example.com", "password": "userpassword" }`
  - Response: Token and success message upon successful login.

- `POST /user/register`: Register a new user.
  - Request Body: `{ "name": "User Name", "email": "user@example.com", "password": "userpassword" }`
  - Response: Token, success message, and user name upon successful registration.

---

API table summarizing the endpoints provided by your Photo Album Backend:

| Endpoint                            | Method | Description                                                  | Request Body                                    | Response Example                                 |
|-------------------------------------|--------|--------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------|
| `/album/albums`                     | POST   | Create a new album.                                         | `{ "title": "Album Title", "coverImage": "URL" }` | `{ "_id": "abc123", "title": "Album Title" }`     |
| `/album/albums`                     | GET    | Get all albums.                                             | N/A                                             | `[{ "_id": "abc123", "title": "Album 1" }]`       |
| `/album/photos`                     | POST   | Create a new photo.                                         | `{ "title": "Photo Title", "imageUrl": "URL", "albumId": "abc123" }` | `{ "_id": "xyz456", "title": "Photo Title" }`    |
| `/album/albums/:albumId/photos`     | GET    | Get all photos in an album.                                 | N/A                                             | `[{ "_id": "xyz456", "title": "Photo 1" }]`      |
| `/album/comments`                   | POST   | Add a comment to a photo.                                   | `{ "photoId": "xyz456", "text": "Comment Text" }` | `{ "_id": "123abc", "text": "Comment Text" }`    |
| `/album/photos/:photoId/comments`   | GET    | Get comments for a photo.                                   | N/A                                             | `[{ "_id": "123abc", "text": "Comment 1" }]`     |
| `/user/login`                       | POST   | Authenticate a user.                                        | `{ "email": "user@example.com", "password": "userpassword" }` | `{ "success": true, "token": "jwt-token" }`     |
| `/user/register`                    | POST   | Register a new user.                                        | `{ "name": "User Name", "email": "user@example.com", "password": "userpassword" }` | `{ "success": true, "token": "jwt-token", "name": "User Name" }` |

Please note that the "Response Example" column contains mock response data for illustrative purposes. Replace the mock data with actual responses your API would generate. Also, remember to include any additional information that you want to provide in your actual API responses.