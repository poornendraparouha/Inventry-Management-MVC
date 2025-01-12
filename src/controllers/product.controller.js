import path from 'path';
import ProductModal from '../models/product.model.js';


export default class ProductController{

     getProducts(req, res){
        // productModal.get() will return the products array
        let products = ProductModal.get();
        console.log(products);
        // render the products view and pass the products array to it
        res.render('products', {products:products});
        // return res.sendFile(path.join(path.resolve(),"src","views","products.html"));
    }

    getAddForm(req, res){
        return res.render('new-product', {errorMessage: null});
    }

    addNewProduct(req, res){
        // access data from the form
        ProductModal.add(req.body);        
        let products = ProductModal.get();
        return res.render('products', {products:products});
    }

    getUpdateProductView( req, res, next){
        // 1. if product exists then return view
        const id = req.params.id;
        let productFound = ProductModal.getById(id);
        if(productFound){
             res.render('update-product', {product: productFound , errorMessage: null});
        }else{
            // 2. else return error message
            res.status(401).send('Product not found');
        }
    }

    postUpdateProduct(req, res){
        // access data from the form
        ProductModal.update(req.body);        
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