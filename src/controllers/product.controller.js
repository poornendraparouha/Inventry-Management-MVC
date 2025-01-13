import path from 'path';
import ProductModal from '../models/product.model.js';


export default class ProductController{

     getProducts(req, res){
        // productModal.get() will return the products array
        let products = ProductModal.get();
        console.log(products);
        // render the products view and pass the products array to it
        res.render('products', {products:products, userEmail: req.session.userEmail});
        // return res.sendFile(path.join(path.resolve(),"src","views","products.html"));
    }

    getAddForm(req, res){
        return res.render('new-product', {errorMessage: null, userEmail: req.session.userEmail});
    }

    addNewProduct(req, res){
        // access data from the form
        const {name, desc, price } = req.body;
        const imageUrl = "images/" + req.file.filename;
        ProductModal.add(name, desc, price, imageUrl);        
        let products = ProductModal.get();
        return res.render('products', {products:products, userEmail: req.session.userEmail});
    }

    getUpdateProductView( req, res, next){
        // 1. if product exists then return view
        const id = req.params.id;
        let productFound = ProductModal.getById(id);
        if(productFound){
             res.render('update-product', {product: productFound , errorMessage: null, userEmail: req.session.userEmail});
        }else{
            // 2. else return error message
            res.status(401).send('Product not found');
        }
    }

    postUpdateProduct(req, res){
        const {id, name, desc, price } = req.body
        const imageUrl = "images/" + (req.file ? req.file.filename : req.body.existingImageUrl);
        const updatedProduct = {id, name, desc, price, imageUrl};

        ProductModal.update(updatedProduct);
        let products = ProductModal.get();
        return res.render('products', {products:products});
    }

    deleteProduct(req, res){
        const id = req.params.id;
        let productFound = ProductModal.getById(id);
        if(!productFound){
           return res.status(401).send('Product not found');
       }
        ProductModal.delete(id);
        let products = ProductModal.get();
        res.render('products', {products:products});
    }

}