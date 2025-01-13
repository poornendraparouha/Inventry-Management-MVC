import express from 'express';
import UserController from './src/controllers/user.Controller.js';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import formValidationMiddleware from './src/middlewares/validation.middleware.js';
import {uploadFile} from './src/middlewares/file-upload-middleware.js';

const server = express();

server.use(express.static("public"));
// parse form data
server.use(express.urlencoded({ extended: true }));

// setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),"src","views",));

// setup express-ejs-layouts
server.use(expressEjsLayouts);



// create a new instance of the UserController and ProductController 
const userController = new UserController();
const productController = new ProductController();

server.use(express.static("src/views"));

server.get('/', productController.getProducts);
server.get('/register', userController.getRegister);
server.get('/signin', userController.getSignIn);
server.get('/new', productController.getAddForm);
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/register', userController.postRegister);
server.post('/signin', userController.postSignIn);
server.post('/delete-product/:id', productController.deleteProduct);
server.post('/',uploadFile.single('imageUrl'),formValidationMiddleware, productController.addNewProduct);
server.post('/update-product', uploadFile.single('imageUrl'), productController.postUpdateProduct);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

