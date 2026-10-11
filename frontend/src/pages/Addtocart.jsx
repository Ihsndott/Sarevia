//  This page is created for crud operations in this ecommerce page

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLock} from "@fortawesome/free-solid-svg-icons"
import {faRetweet} from "@fortawesome/free-solid-svg-icons"
import {faCreditCard} from "@fortawesome/free-solid-svg-icons"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"



function Addtocart(){

     const [cartitems,setCartitems] = useState([])

      
//click proceed to checkout it will send the cart items details to backend
const handleCheckout = async () =>{
  try{
    const response = await fetch("http://localhost:5000/api/payment/checkout",
    {
      method:"POST",
      headers: {
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        cart:cartitems
      })
    });
    const data = await response.json();
    console.log(data);
    if(data.success){
      window.location.href= data.checkout.url;
    }
  } catch(error){
      console.log(error);
  }
}

      useEffect(()=>{
        
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartitems(cart);
      
      },[]);

// Function to delete the selected card when the remove icon is clicked.
function Delete(id){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = cart.filter((item) => item._id !==id);

    setCartitems(updatedCart);

     localStorage.setItem("cart",JSON.stringify(updatedCart));

};

//Function to delete all the card from localstorage
function ClearAll(){
  setCartitems([]);
  localStorage.clear();
  
}

//function to increase the quantity in a shopping card
function Increaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item._id === id){
        return{...item,quantity:item.quantity+1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//function to decrease the quantity in a shopping card
function decreaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item._id === id && item.quantity >1){
        return{...item,quantity:item.quantity-1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//summary operations for calculate the subtotal , discount and total
  const subtotal = cartitems.reduce((total,item)=>{
  return total + item.price*item.quantity;
  },0);

  const discount = subtotal*0.10;

  const total = subtotal - discount;
      

      
  
    return (
        <>
        <div>
        <div className="flex flex-row text-center justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold mt-8  text-center  text-[#8F0628] mr-4 ">Sarevia | </h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-8  text-center  text-[#8F0628] ">Your Cart |</h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-8  text-center  text-[#8F0628] ml-4 ">Saree Collection</h1>
        </div>
        <h4 className="md:text-xl font-semibold text-center text-[#55031A] mt-3">Review your selected sarees and complete your order with ease.<br/> Discover timeless elegance, beautiful fabrics, and styles carefully selected for every occasion.</h4>
       </div>

       <div className="flex flex-row justify-between items-center md:mr-4">

    <div>
    <h1 className="text-2xl md:text-4xl font-bold m-12 text-[#8F0628]" >Shopping  Cart</h1>
    <h4 ></h4>
    </div>
    <button onClick={ClearAll} className="text-white bg-red-700 rounded-2xl px-4 py-2 font-semibold mr-2 md:mr-0" > Clear All</button>
</div>

<div className="flex flex-col md:flex md:flex-row gap-4 justify-between mb-10">
 <div className="flex flex-col gap-4 ml-4 md:ml-12">
      {cartitems.map((item)=> (
        
        <div key={item._id} className="flex flex-row items-center justify-between gap-4  rounded-xl border border-[#C9953E]/60 py-2 bg-[[#F9E5B8] w-[350px] md:w-[850px] h-[200px] p-4">
        <div className="flex flex-row items-center gap-4  border-gray-500 py-4">
            <img src={item.image} alt="image" className="bg-white/80 rounded w-32 h-32 object-cover"/>
            <div className= "md:ml-4">
                <h3 className="text-[#8F0628] text-xl">{item.name}</h3>
                <p className="text-[#8F0628]">Rs. {item.price}</p>
            </div>
            </div>
          <div className=" flex flex-col">   
        <div className= "flex flex-row gap-0 md:ml-[250px] mr-4" >
            <button onClick={()=>decreaseqty(item._id)}   className="decreasebtn px-4 rounded-bl rounded-tl font-semibold text-[#8F0628] bg-[#FFE3AD]/40 cursor-pointer">−</button>
            <p className="quantitynum bg-[#FFE3AD]/40 font-semibold text-[#8F0628]" >{item.quantity}</p>
          <button  onClick={()=>Increaseqty(item._id)} className="increasebtn px-4 bg-[#FFE3AD]/40 rounded-br font-semibold text-[#8F0628] rounded-tr cursor-pointer">+</button>
        </div>
          <div className= "mt-4"  >
          <button id="removebutton"onClick={()=> Delete(item._id)} className="flex gap-1 text-[#8F0628]/80 text-xs ml-6 md:ml-[270px] active:scale-95 cursor-pointer"><FontAwesomeIcon icon={faTrash} className="mt-1 text-xs"/>Remove </button>
            </div>
            </div>
            
            </div>
           
      ))}
       </div>



 {/* Summary of shopping */}

<div id="summary"className="w-[350px] md:w-[400px] h-fit   rounded-xl bg-[#FFE3AD]/20 border border-[#26352D]/40 ml-4 md:ml-0  md:mr-20 mb-6">
     <p className="text-[#55031A] font-bold p-4 text-xl">Order Summary</p>
     <div className="flex flex-row justify-between mx-6 ">
     <p className="text-[#8F0628]">Subtotal</p>
     <p id="subtotal" className="text-[#55031A]">Rs. {subtotal.toFixed(2)}</p>
     </div>
     <div className="flex flex-row justify-between mx-6">
     <p  className="text-[#8F0628]">Discount(10%)</p>
     <p id="discount" className="text-[#55031A] ">Rs. {discount.toFixed(2)} </p>
     </div>
     <div className="flex flex-row justify-between mx-6 mb-4">
     <p className="text-[#8F0628]">Shipping</p>
     <p className="text-[#8F0628]">FREE</p>
     </div>
     <hr className="border-[#26352D]/40 mx-4"/>
     <div className="flex flex-row justify-between mx-6 mb-4 mt-4 text-xl font-semibold">
      <p className="text-[#55031A] ">Total</p>
      <p id="tot" className="text-[#55031A] ">Rs. {total.toFixed(2)}</p>
     </div>
      <hr className="border-[#26352D]/40 mx-4"/>
      <div>
        <button onClick={handleCheckout} className="bg-[#8F0628] rounded-full text-white font-semibold flex items-center px-12 py-4 mt-4 ml-20 transition duration-300 active:scale-95">Proceed to Checkout</button>
        <button className="text-[#8F0628] flex items-center px-12 py-4 mt-2 ml-20 transition duration-300 active:scale-95"> ← Continue Shopping</button>
      </div>

       <div className="bg-transparent border border-[#26352D]/40  w-[300px] rounded-xl m-6 p-4 flex flex-col gap-2  ">
        <div >
          <p className="flex gap-3 items-center text-[#8F0628]"><FontAwesomeIcon icon={faLock} className="text-[#55031A] " />Secure Checkout </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center text-[#8F0628]">  <FontAwesomeIcon icon={faCreditCard} className="text-[#55031A] "/> Multiple Payment Option </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center text-[#8F0628]">  <FontAwesomeIcon icon={faRetweet} className="text-[#55031A] "/> Free Returns </p> 
        </div>
      </div> 
</div>

</div>
</>
    )
}

export default Addtocart