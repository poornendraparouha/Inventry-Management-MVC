import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';

const server = express();

// setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),"src","views",));

// create a new instance of the ProductController 
const productController = new ProductController();

server.use(express.static("src/views"));

server.get('/', productController.getProducts);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});