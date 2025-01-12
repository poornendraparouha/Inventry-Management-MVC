import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import formValidationMiddleware from './src/middlewares/validation.middleware.js';

const server = express();

// parse form data
server.use(express.urlencoded({ extended: true }));

// setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),"src","views",));

// setup express-ejs-layouts
server.use(expressEjsLayouts);



// create a new instance of the ProductController 
const productController = new ProductController();

server.use(express.static("src/views"));

server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);
server.post('/',formValidationMiddleware, productController.addNewProduct);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});