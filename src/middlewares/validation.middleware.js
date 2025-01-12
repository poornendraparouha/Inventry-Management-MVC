

const formValidationMiddleware = (req, res, next) => {
    // validate the data
    const {name, price, imageUrl} = req.body;
    let errors=[];
    if(!name || name.trim == ''){
        errors.push({message: 'Name is required'});
    }
    if(!price || parseFloat(price) < 1){
        errors.push({message: 'Price must be greater than 0'});
    }
    try{
        const url = new URL(imageUrl);
    }catch(err){
        errors.push({message: 'Invalid URL'});
    }
    if(errors.length > 0){
        return res.render('new-product', {errorMessage: errors[0].message});
    }
    next();
}

export default formValidationMiddleware;