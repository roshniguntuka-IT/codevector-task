

# Product Catalog API

A RESTful API built with Node.js, Express.js, and PostgreSQL to manage and retrieve product data efficiently.

## Features

* Fetch products
* Filter products by category
* Cursor-based pagination
* PostgreSQL indexing for optimized queries
* Cloud-hosted PostgreSQL database using Neon
* Deployed on Render

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Neon
* Render

## Live Demo

API Base URL:

[https://codevector-task-api.onrender.com](https://codevector-task-api.onrender.com)

Products Endpoint:

[https://codevector-task-api.onrender.com/products](https://codevector-task-api.onrender.com/products)

## API Usage

### Get All Products

GET /products

### Limit Results

GET /products?limit=5

### Filter by Category

GET /products?category=Books

GET /products?category=Electronics

### Cursor-Based Pagination

GET /products?limit=5&cursor=5

## Database Design

Table: products

Columns:

* id
* name
* category
* price
* created_at
* updated_at

## Performance Optimizations

### Category Filter Index

CREATE INDEX idx_products_category
ON products(category);

### Pagination & Sorting Index

CREATE INDEX idx_products_created_id
ON products(created_at DESC, id DESC);

These indexes improve filtering, sorting, and pagination performance on large datasets.

## Project Structure

codevector-task/

├── server.js

├── db.js

├── seed.js

├── package.json

├── .gitignore

└── README.md

## Setup Instructions

Clone Repository

git clone [https://github.com/roshniguntuka-IT/codevector-task.git](https://github.com/roshniguntuka-IT/codevector-task.git)

Install Dependencies

npm install

Configure Environment Variables

DATABASE_URL=your_database_url

Run Application

node server.js

## Future Enhancements

* Product name search
* Request validation
* API documentation


## Learnings

This project helped me understand:

* Express API development
* PostgreSQL query optimization
* Cursor-based pagination
* Database indexing
* Cloud database integration with Neon
* Deployment using Render


