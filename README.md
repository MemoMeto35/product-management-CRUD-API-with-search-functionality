# Product Management CRUD API with Search Functionality

A modular **Node.js + Express** REST API project for managing products.  
This API provides full **CRUD operations** along with a **search feature**, making it easy to build product-based applications.

---

## 🚀 Features

- **Add Product** – Create new product entries
- **Update Product** – Modify existing product details
- **Delete Product** – Remove products by ID
- **Get All Products** – Fetch all products from the database
- **Get One Product** – Retrieve details of a specific product
- **Search Products** – Search for products by name or other criteria
- **Modular Structure** – Clean and maintainable codebase

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/MemoMeto35/product-management-CRUD-API-with-search-functionality.git
cd product-management-CRUD-API-with-search-functionality
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=products
```

### 4. Database setup

Make sure your MySQL database is created and has a products table:

```sql
CREATE DATABASE products;
USE products;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT
);
```

### 5. Run the server

```bash
npm start
```

The server will run on `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update a product by ID |
| DELETE | `/products/:id` | Delete a product by ID |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get one product by ID |
| GET | `/products/search` | Search products |

---

## 🎯 Usage Examples

### Create a Product
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop", "price": 999.99, "description": "High-performance laptop"}'
```

### Get All Products
```bash
curl http://localhost:3000/products
```

### Search Products
```bash
curl "http://localhost:3000/products/search?name=laptop"
```

---

## 📦 Project Structure

```
project/
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── package.json
└── server.js
```

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
