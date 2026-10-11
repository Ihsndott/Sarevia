const Product = require("../models/product.model");

//get products
const getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({
            success:true,
            message:"Saree Details are..",
            products
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to fetch saree details",
            error:error.message
        });
    }
}

//post product

const addProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            success:true,
            message:"Product added successfully",
            product
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Validation wrong and try again"
        });
    }
}

module.exports={getProducts,addProduct};

