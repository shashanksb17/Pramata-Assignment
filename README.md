# Pramata-Assignment
## Application Documentation

### Introduction

Welcome to the comprehensive documentation for our application, covering both the frontend and backend aspects. This guide will walk you through the setup and usage of both the React frontend and the backend components of our application.

### Table of Contents

1. **Frontend Documentation**
   - Getting Started
   - Features
   - How to Use

2. **Backend Documentation**
   - Setup and Installation
   - API Endpoints
   - Database Schema

---

## Frontend Documentation

### Getting Started

#### Installation

To run the frontend React app locally, follow these steps:

1. Clone the frontend repository from [Frontend GitHub Repo URL].
2. Open a terminal and navigate to the frontend project directory.
3. Run `npm install` to install the required dependencies.

#### Running the Frontend App

Once the dependencies are installed, you can start the frontend app:

```bash
npm start
```

The app will be accessible at `http://localhost:3000` in your web browser.

### Features

Our frontend application provides the following features:

#### Home Page

- Displays a list of albums in a tile format.
- Clicking on an album tile will take you to its respective page.

#### Album Creation

- Navigate to the "Create Album" page.
- Enter a title for the album and upload images.
- Click "Create" to add the album with images.

#### Album Page

- Displays images associated with a specific album.
- Clicking on an image opens a slide show view.
- You can add comments to images on this page.

#### Image Upload

- Navigate to the album's page where you want to add images.
- Click "Add Image," provide a title and image URL.
- Click "Add Image" to include the image in the album.

#### Slide Show

- Clicking on an image on the album page opens a slide show view.
- Navigate through images using arrow buttons.

#### Commenting

- Add comments to images within an album.
- Open an image on the album page, scroll down to the comment section, and submit your comment.

### How to Use

#### Navigating the Frontend App

- Utilize the navigation bar to switch between different pages: Home, Create Album, Album Page.
- Click on album tiles on the home page to explore album content.

#### Creating an Album

1. Go to the "Create Album" page.
2. Provide a title for the album.
3. Click "Add Image" to upload images for the album.
4. Click "Create" to finalize the album.

#### Uploading Images

1. Navigate to the album page where you want to add images.
2. Click "Add Image," enter image title and URL.
3. Click "Add Image" to include the image in the album.

#### Viewing Slide Show

1. Open an album.
2. Click on an image to view it in slide show mode.
3. Navigate through images using the arrow buttons.

#### Adding Comments

1. Open an album, click on an image.
2. Scroll down to access the comment section.
3. Enter your comment and click "Submit."

---

## Backend Documentation

### Setup and Installation

To run the backend server locally, follow these steps:

1. Clone the backend repository from [Backend GitHub Repo URL].
2. Navigate to the backend project directory.
3. Run necessary setup commands (e.g., `npm install` or `pip install -r requirements.txt`).

### API Endpoints

Our backend provides the following API endpoints:

- **Endpoint 1**: Description of the endpoint.
  - Method: GET or POST
  - Route: `/route/endpoint1`
  - Parameters: Specify required parameters.
  - Response: Describe the structure of the response.

- **Endpoint 2**: Description of the endpoint.
  - Method: GET or POST
  - Route: `/route/endpoint2`
  - Parameters: Specify required parameters.
  - Response: Describe the structure of the response.

### Database Schema

Our backend utilizes a database with the following schema:

- **Table 1**: Description of the table.
  - Columns: List of columns and their data types.
  - Purpose: Explain the purpose of the table.

- **Table 2**: Description of the table.
  - Columns: List of columns and their data types.
  - Purpose: Explain the purpose of the table.

---

By combining both frontend and backend documentation, users will have a comprehensive guide to set up, run, and interact with both components of our application. Feel free to tailor and expand this documentation based on your application's specific functionalities and requirements.