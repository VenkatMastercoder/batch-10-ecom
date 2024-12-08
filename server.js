const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();

// Http Server Instance
const app = express();

// GET : http://localhost:3000/products
app.get("/products", async (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic
  const products = await prisma.product.findMany();

  // 3. Data to Frontend
  res.status(200).json({ message: "products data Fetched", data: products });
});

// GET : Http://localhost:3000/products/:product_id
app.get("/products/:product_id", async (req, res) => {
  // 1. Data from Frontend
  const data = req.params;

  // 2. DB Logic
  const products = await prisma.product.findUnique({
    where: {
      product_id: data.product_id,
    },
  });

  // 3. Data to Frontend
  res.status(200).json({ message: "products data Fetched", data: products });
});

app.listen(3000);