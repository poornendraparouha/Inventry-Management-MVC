import UserModel from "../models/user.model.js";
import ProductModal from "../models/product.model.js";

export default class UserController {
    getRegister(req, res) {
        res.render('register');
    }
    getSignIn(req, res) {
        res.render('signin', { errorMessage: null });
    }
    postRegister(req, res) {
        const { name, email, password } = req.body;
        UserModel.addUser(name, email, password);
        res.render('signin', { errorMessage: null });
    }
    postSignIn(req, res) {
        console.log('Request body:', req.body);
        const { email, password } = req.body;
        console.log(`Attempting login with: ${email}, ${password}`);
        const user = UserModel.isValidUser(email, password);
        if (!user) {
            console.log('Invalid credentials, rendering error message.');
            return res.render('signin', { errorMessage: 'Invalid email or password' 
            });
        }
        console.log('Login successful, rendering products.');
        let products = ProductModal.get();
        res.render('products', {products});
        
    }
}