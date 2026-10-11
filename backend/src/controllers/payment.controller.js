const Stripe = require("stripe");



const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const payment = async (req,res)=>{
    try{
     const {cart} = req.body
     const checkout = await stripe.checkout.sessions.create({
        line_items:cart.map((item) => ({
            price_data:{
                currency:"lkr",
                product_data:{
                    name:item.name
                },
                unit_amount:Math.round(item.price*100)
            },
            quantity:item.quantity 
     })),
     mode:"payment",
     success_url:"http://localhost:5173/success",
     cancel_url:"http://localhost:5173/cancel"
    })
     res.json({
        success:true,
        message:"Checkout session has been created successfully",
        checkout
     }) 
     }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:error.message
        });
    }
}


 
module.exports={payment};