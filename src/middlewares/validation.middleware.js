import {body, validationResult} from 'express-validator';

//  this is a form validation middleware using express-validator
const formValidationMiddleware = async (req, res, next) => {
    // 1. setup the validation rules
    const rules = [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({gt: 0}).withMessage('Price must be greater than 0'),
        body('imageUrl').isURL().withMessage('Invalid URL')
    ];
    // 2. run the validation rules
    await Promise.all(rules.map(rule => rule.run(req)));
    // 3. check if there are any errors after running the validation rules
    const validationErrors = validationResult(req);
    // 4.if there are errors, return the error message
    if(!validationErrors.isEmpty()){
        return res.render('new-product', {errorMessage: validationErrors.array()[0].msg});
    }
    next();
}

export default formValidationMiddleware;


// this is a costom form validation middleware
// const formValidationMiddleware = (req, res, next) => {
//     // validate the data
//     const {name, price, imageUrl} = req.body;
//     let errors=[];
//     if(!name || name.trim == ''){
//         errors.push({message: 'Name is required'});
//     }
//     if(!price || parseFloat(price) < 1){
//         errors.push({message: 'Price must be greater than 0'});
//     }
//     try{
//         const url = new URL(imageUrl);
//     }catch(err){
//         errors.push({message: 'Invalid URL'});
//     }
//     if(errors.length > 0){
//         return res.render('new-product', {errorMessage: errors[0].message});
//     }
//     next();
// }

// export default formValidationMiddleware;