import express from 'express';
import UserController from './src/controllers/user.Controller.js';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import formValidationMiddleware from './src/middlewares/validation.middleware.js';
import {uploadFile} from './src/middlewares/file-upload-middleware.js';
import {authMiddleware} from './src/middlewares/auth.middleware.js';
import session from 'express-session';

const server = express();

server.use(express.static("public"));

// setup express-session
server.use(session({
  secret: 'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
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

server.get('/', authMiddleware, productController.getProducts);
server.get('/register', userController.getRegister);
server.get('/signin', userController.getSignIn);
server.get('/new',authMiddleware, productController.getAddForm);
server.get('/update-product/:id',authMiddleware, productController.getUpdateProductView);
server.get('/signout',userController.signOut)
server.post('/register', userController.postRegister);
server.post('/signin', userController.postSignIn);
server.post('/delete-product/:id',authMiddleware, productController.deleteProduct);
server.post('/',authMiddleware, uploadFile.single('imageUrl'),formValidationMiddleware, productController.addNewProduct);
server.post('/update-product',authMiddleware, uploadFile.single('imageUrl'), productController.postUpdateProduct);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

