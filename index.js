import express from 'express';
import ProductController from './src/controllers/product.controller.js';

const server = express();

// create a new instance of the ProductController 
const productController = new ProductController();

server.use(express.static("src/views"));

server.get('/', productController.getProducts);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});