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
        return res.render('new-product');
    }

    addNewProduct(req, res){
        // access data from the form
        console.log(req.body);
        let products = ProductModal.get();

        res.render('products', {products:products});
    }

}