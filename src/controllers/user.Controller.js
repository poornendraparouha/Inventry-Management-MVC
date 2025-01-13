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
        const { email, password } = req.body;
        const user = UserModel.isValidUser(email, password);
        if (!user) {
            return res.render('signin', { errorMessage: 'Invalid email or password' 
            });
        }
        req.session.userEmail = email;
        let products = ProductModal.get();
        res.render('products', {products, userEmail: req.session.userEmail});  
    };
    signOut(req, res){
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Unable to log out');
            }
            res.redirect('/signin');
        });
    }

}