
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons"


function ProductCard({product}){


  // Add the selected product to the cart
  function insertAddtoCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check whether the product is already in the cart
    const existingProduct = cart.find(
      (item) => item._id === product._id
    );

    let updatedCart;

    if (existingProduct) {

      // Increase quantity if product already exists
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    } else {

      // Add a new product to the cart
      const newProduct = {
        _id: product._id,
        name: product.name,
        price: product.price ?? product.Price,
        image: product.image,
        category: product.category,
        stock: product.stock,
        quantity: 1
      };

      updatedCart = [...cart, newProduct];
    }

    // Save the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart!`);
  }


    return(
        <>
    <div className="bg-[#F9E5B8] rounded-xl overflow-hidden shadow-lg">
    <div >
       <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"/>
    </div>
    <div className="p-2">

       <h1 className="text-[#55031A] mt-2 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{product.name}</h1>

       <h1 className="text-[10px] text-[#55031A]/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.category}</h1>

       <h1 className="mt-1 text-[#8F0628] font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Rs. {product.price}</h1>

       <button onClick={insertAddtoCart}   className="bg-[#8F0628] mt-2 mx-2 text-center px-8 py-1 rounded text-white/80 transition duration-300 hover:bg-[#55031A] cursor-pointer active:scale-95">
           <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-xs "/>Add to Cart</button>
    </div>
    </div>
        </>
    );
}

export default ProductCard;