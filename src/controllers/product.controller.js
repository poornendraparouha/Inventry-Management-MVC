import path from 'path';


export default class ProductController{
    // constructor(productService){
    //     this.productService = productService;
    // }

     getProducts(req, res){
        console.log(path.resolve());
        return res.sendFile(path.join(path.resolve(),"src","views","products.html"));
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