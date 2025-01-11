import path from 'path';
import ProductModal from '../models/product.model.js';


export default class ProductController{
    // constructor(productService){
    //     this.productService = productService;
    // }

     getProducts(req, res){
        // productModal.get() will return the products array
        let products = ProductModal.get();
        console.log(products);
        // render the products view and pass the products array to it
        res.render('products', {products:products});
        // return res.sendFile(path.join(path.resolve(),"src","views","products.html"));
    }

    // async getProducts(req, res){
    //     const products = await this.productService.getProducts();
    //     res.json(products);
    // }

    // async getProductById(req, res){
    //     const { id } = req.params;
    //     const product = await this.productService.getProductById(id);
    //     res.json(product);
    // }

    // async createProduct(req, res){
    //     const { body } = req;
    //     const newProduct = await this.productService.createProduct(body);
    //     res.json(newProduct);
    // }

    // async updateProduct(req, res){
    //     const { id } = req.params;
    //     const { body } = req;
    //     const updatedProduct = await this.productService.updateProduct(id, body);
    //     res.json(updatedProduct);
    // }

    // async deleteProduct(req, res){
    //     const { id } = req.params;
    //     const deletedProduct = await this.productService.deleteProduct(id);
    //     res.json(deletedProduct);
    // }
}