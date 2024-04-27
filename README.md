# ManajemenKost API

This project is a RESTful API for managing rooms in a kost (boarding house). It allows you to perform CRUD operations on room data.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/bayuhadi863/manajemen-kost-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `node server.js`

The server will start running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `GET /kamar`: Get all rooms
- `GET /kamar/:id`: Get a specific room by ID
- `POST /kamar`: Create a new room
- `PUT /kamar/:id`: Update a room by ID
- `DELETE /kamar/:id`: Delete a room by ID

## Sending Requests

To send requests to the API, you can use tools like cURL or Postman.

## View API Documentation

You can also view the API Documentation by visiting `http://localhost:3000/api-docs`.

![alt text](<Screenshot 2024-04-27 212756-1.png>)