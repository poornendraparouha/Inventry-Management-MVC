// Code for Product Model
export default class ProductModal{
    constructor(_id, _name, _desc, _price, _imageUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl;
    }

    static get(){
        return products;
    }
}

var products = [
    new ProductModal(1, "Product 1", "This is product 1", 100, "https://via.placeholder.com/150"),
    new ProductModal(2, "Product 2", "This is product 2", 200, "https://via.placeholder.com/150"),
    new ProductModal(3, "Product 3", "This is product 3", 300, "https://via.placeholder.com/150"),
];