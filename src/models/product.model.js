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
    static add(productObj){
        let newProduct = new ProductModal(
            products.length + 1,
            productObj.name, 
            productObj.desc, 
            productObj.price, 
            productObj.imageUrl);
        products.push(newProduct);
    }
}

var products = [
    new ProductModal(1, "Atomic Habits", "A supremely practical and useful book.", 100, "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"),
    new ProductModal(2, "Ikigai", "The Japanese secret to a long and happy life", 200, "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"),
    new ProductModal(3, "Deep Work", "RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD", 300, "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"),
];