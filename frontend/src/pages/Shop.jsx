import heroimg from "../assets/heroshop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight, faShoppingBag ,faSeedling, faWandMagicSparkles, faGem, faPalette,faStar,faListUl,faTableCells,faSearch, faFilter,faChevronDown, faChevronRight, faChevronLeft,faBars,faXmark} from "@fortawesome/free-solid-svg-icons"
import line from "../assets/underline.png"
import { useState,useEffect } from "react"
import ProductCard from "../components/ProductCard"

function Shop(){

    const [products,setProducts] = useState([]);
    const [error,setError] = useState("")

    //set 8 product cards to show in each page
    const [ currentPage,setCurrentPage] = useState(1);
    const productsPerPage = 8;

  

    //filter products by using radio buttons
    const [category,setCategory] = useState("All");

    //open a filter sidebar
    const[filterOpen,setFilterOpen] = useState(false);


    useEffect(()=>{
         fetch("http://localhost:5000/api/products")
         .then((response) =>{
            if(!response.ok){
                throw new Error ("Failed to load products")
            }
            return response.json();
         })
         .then((data)=>{
            console.log("Full API response",data);

            //Display the products array
            const productList = Array.isArray(data)?data:data.products;

            if(!Array.isArray(productList)){
                throw new Error ("API response does not contain a products array") 
            }
            setProducts(productList);
         })
        .catch((error)=>{
            console.log("Product fetching error, Try Again",error)
            setError(error.message);
            setProducts([]);
        })
    },[])

    //get the products for the current page by using their index

    const indexOfLastProduct = (currentPage * productsPerPage);
    const indexOfFirstProduct = (indexOfLastProduct - productsPerPage);

    const filteredProducts = products.filter((product)=>{return category === "All" || product.category === category})
    const currentProducts =filteredProducts.slice( indexOfFirstProduct, indexOfLastProduct );

    return(
        <>
        
         {/* hero image of shop page */}
        <div>
            <img src={heroimg} alt="hero image" className="absolute z-50 top-25"/>
        </div>

        {/* hero content above the image */}
            <div className="absolute z-50 top-24 sm:top-25 md:top-30 lg:top-33 xl:top-50 left-4 md:left-20 lg:left-45 ">
                        <p className="text-[#55031A] font-semibold  inline-block lg:px-2 rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SHOP SAREES</p>
                        <p className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-2" style={{ fontFamily: "'Playfair Display', serif" }} >Elegant Sarees</p>
                        <p className=" [word-spacing:5px] md:[word-spacing:10px] lg:[word-spacing:15px] text-[#C9A227]  md:mt-2 lg:mt-4 text-xl md:text-3xl lg:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>For Every Occasion </p>
                        <p className="text-[#55031A] text-[9px] md:text-xl  lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>Discover our curated collection of exquisite sarees,  <br/> crafted with tradition, elegance and grace.</p>

                        <div className="mt-1 md:mt-4 lg:mt-8 flex items-center ">
                            <button className="bg-[#8F0628] text-white font-semibold px-2 md:pl-8 md:pr-4  md:py-2 lg:py-3 rounded md:rounded-3xl  text-xs md:text-base " style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore Collection <FontAwesomeIcon icon={faArrowRight} className="text-md md:text-xl ml-2  mr-2 text-white "/></button>
                        </div>
                           
            </div>

         {/* shop by category */}
                    <div>
                            <div className="flex flex-col justify-center items-center mt-[150px] md:mt-[250px] lg:mt-[500px]">
                                <p className="text-[#8F0628] md:text-3xl font-bold mt-8 mr-8 md:mr-0 lg:mr-0"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shop By Category</p>
                                <img src={line} alt="decorative line" className="w-[180px] md:w-[300px] lg:w-[300px] absolute z-50 top-[260px] md:top-[400px] lg:top-[660px] mr-8 md:mr-0 lg:mr-0"  />
                            </div>
                            <div className="flex   grid grid-cols-5 gap-[200px] overflow-x-auto md:grid-cols-5  md:gap-6 mx-4 md:ml-2  lg:ml-22  pb-4 mt-12">
                                {/* category-All */}
                                <div className="group relative shrink-0 w-32 h-32 md:w-30 lg:w-40  md:h-30 lg:h-36 bg-[#F9E5B8] border border-[#C9953E] rounded-t-[60px] flex flex-col items-center pb-4 hover:bg-[#55031A] transition-duration-300 active:scale-95">
                                     <FontAwesomeIcon icon={faShoppingBag} className="text-4xl mt-12  text-[#55031A] group-hover:text-white/80 trnsition-duration-300" /> 
                                    <p className="text-[#7A2020] md:mt-2 lg:mt-4 text-base font-bold group-hover:text-white/80 trnsition-duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>All Sarees</p>
                                </div>

                                 {/* category-Cotton */}
                                <div className="group relative shrink-0 w-32 h-32 md:w-30 lg:w-40 md:h-30 lg:h-36 bg-[#F9E5B8] border border-[#C9953E] rounded-t-[60px] flex flex-col items-center pb-4 hover:bg-[#55031A] transition-duration-300 active:scale-95">
                                     <FontAwesomeIcon icon={faSeedling} className="text-4xl mt-12  text-[#55031A] group-hover:text-white/80 trnsition-duration-300" /> 
                                    <p className="text-[#7A2020] md:mt-2 lg:mt-4 text-base font-bold group-hover:text-white/80 trnsition-duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Cotton</p>
                                </div>

                                 {/* category-Nylon */}
                                <div className="group relative shrink-0 w-32 h-32 md:w-30 lg:w-40  md:h-30 lg:h-36 bg-[#F9E5B8] border border-[#C9953E] rounded-t-[60px] flex flex-col items-center pb-4 hover:bg-[#55031A] transition-duration-300 active:scale-95">
                                     <FontAwesomeIcon icon={faWandMagicSparkles} className="text-4xl mt-12  text-[#55031A] group-hover:text-white/80 trnsition-duration-300" /> 
                                    <p className="text-[#7A2020] md:mt-2 lg:mt-4 text-base font-bold group-hover:text-white/80 trnsition-duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Nylon</p>
                                </div>

                                 {/* category-Silk */}
                                <div className="group relative shrink-0 w-32 h-32 md:w-30 lg:w-40  md:h-30 lg:h-36 bg-[#F9E5B8] border border-[#C9953E] rounded-t-[60px] flex flex-col items-center pb-4 hover:bg-[#55031A] transition-duration-300 active:scale-95">
                                     <FontAwesomeIcon icon={faGem} className="text-4xl mt-12  text-[#55031A] group-hover:text-white/80 trnsition-duration-300" /> 
                                    <p className="text-[#7A2020] md:mt-2 lg:mt-4 text-base font-bold group-hover:text-white/80 trnsition-duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Silk</p>
                                </div>

                                 {/* category-Handloom */}
                                <div className="group relative  shrink-0 w-32 h-32  md:w-30 lg:w-40  md:h-30 lg:h-36 bg-[#F9E5B8] border border-[#C9953E] rounded-t-[60px] flex flex-col items-center pb-4 hover:bg-[#55031A] transition-duration-300 active:scale-95">
                                     <FontAwesomeIcon icon={faPalette} className="text-4xl mt-12  text-[#55031A] group-hover:text-white/80 trnsition-duration-300" /> 
                                    <p className="text-[#7A2020] md:mt-2 lg:mt-4 text-base font-bold group-hover:text-white/80 trnsition-duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Handloom</p>
                                </div>

                            </div>
                    </div>  

{/* ##################### */}  
  {/* filter  sidebar for tablet and mobile phones */}

            {/* filter button to open the sidebar */}
                <div className="lg:hidden flex justify-end w-full mt-6 pr-4">
                    <button type="button" onClick={()=>setFilterOpen(true)} className=" flex items-center gap-2 text-[#55031A]"><FontAwesomeIcon icon={faFilter}/> Filter Sarees </button>
                </div>
            
            {/* blur the page when sidebar is open */}
                {filterOpen  && (
                    <div className="lg:hidden fixed inset-0 z-[60] bg-black/50" onClick={()=>setFilterOpen(false)}/>

                 )}

            {/* setup the transition of sidebar */}
                <div className={`lg:hidden fixed top-0 left-0 z-70 h-full w-72 max-w-[85vw] overflow-y-auto p-5 shadow-xl transition-transform duration-300 bg-white ${filterOpen ? "translate-x-0" : " -translate-x-full"}`}>
                    
                    {/* close button- faxmark */}
                     <div className="flex justify-end">
                          <button type="button" onClick={()=> setFilterOpen(false)} className="text-xl text-[#55031A]">  <FontAwesomeIcon icon={faXmark} /> </button>
 
                      </div>
                            {/* filter by */}
                               
                                <div className="flex flex-row items-center mt-4 ml-2 ">
                                    <FontAwesomeIcon icon={faFilter} className=" text-lg text-[#55031A]  "/>
                                    <h1 className="text-2xl font-bold text-[#55031A] ml-2 ">Filter</h1>
                                </div>

                                <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>
                                     
                            {/* Categories options */}
                                    <div>
                                        <p className="text-2xl font-bold text-[#55031A] ml-4 mt-2"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>Categories</p>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2 ">
                                                <input type="radio" name="categorymobile" value="All" checked={category==="All"} onChange={()=>{setCategory("All");setCurrentPage(1)}}  className="accent-[#55031A]"  /> All Sarees
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="categorymobile" value="Cotton"  checked={category==="Cotton"} onChange={()=>{setCategory("Cotton");setCurrentPage(1)}}  className="accent-[#55031A] " /> Cotton
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="categorymobile" value="Nylon"  checked={category==="Nylon"} onChange={()=>{setCategory("Nylon");setCurrentPage(1)}}  className="accent-[#55031A] " /> Nylon
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="categorymobile" value="Silk"  checked={category==="Silk"} onChange={()=>{setCategory("Silk");setCurrentPage(1)}}  className="accent-[#55031A] " /> Silk
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="categorymobile" value="Handloom"  checked={category==="Handloom"} onChange={()=>{setCategory("Handloom");setCurrentPage(1)}}  className="accent-[#55031A] " /> Handloom
                                            </label>
                                        </div>
                                    </div>

                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>

                            {/* Price Range */}
                                            
                                    <div>
                                        <h1 className="text-2xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Price Range</h1>
                                        <input type="range" min="0" max="30000" defaultValue="30000" className="w-[200px] accent-[#8F0628] ml-4 mt-2" />
                                        <div className="flex flex-row justify-between text-[#8F0628] ml-4 mr-8">
                                            <span>0</span>
                                            <span>30K</span>
                                        </div>
                                    </div>

                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>           

                            {/* Rating */}

                                    <div>
                                    <p className="text-2xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Rating</p>
                                    <div className="flex flex-col gap-2">
                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A] mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>
                                    </div>
                                    </div> 
                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>  

                            {/* Stock Status          */}

                                    <div>
                                    <p className="text-xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Stock Status</p>
                                        <div className="ml-4 mt-2">
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="stockStatus" value="instock" className="accent-[#55031A] " style={{ fontFamily: "'Montserrat', sans-serif" }} /> In Stock
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2">
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="stockStatus" value="outofstock" className="accent-[#55031A] " style={{ fontFamily: "'Montserrat', sans-serif" }}/>Out of Stock
                                            </label>
                                        </div>
                                    </div>
                                </div>
    {/* ##################### */}  

     {/* products container  for laptop       */}
                                    
                <div className="bg-transparent min-h-screen  pb-6  border border-[#C9953E]/60 mx-2 md:mx-7 rounded-xl mt-8 mb-2">
                                    
                            <div className="hidden lg:block flex flex-row gap-2 md:gap-4 justify-between ml-2 items-center mr-2">
                            
                             {/* featured */}
                                        <div className="hidden md:block" >
                                        <input name="filter" id="filterbar" type="text" placeholder="Featured"className="relative w-[240px] h-[30px] text-[#55031A] font-semibold pl-4 bg-transparent border border-[#C9953E]/60  ml-1 mt-4 rounded"/>
                                        <FontAwesomeIcon icon={faChevronDown} className="absolute mt-6 right-[1260px] text-[#55031A]/80"/>
                                        </div>
                                </div>

                           
                                        
                            <div className="flex flex-row gap-4 ml-2">
                            {/* filter by */}
                                <div className="hidden lg:block bg-transparent border border-[#C9953E]/60 w-[250px]   mt-6 rounded-xl ">
                                <div className="flex flex-row items-center mt-4 ml-2 ">
                                    <FontAwesomeIcon icon={faFilter} className=" text-lg text-[#55031A]  "/>
                                    <h1 className="text-2xl font-bold text-[#55031A] ml-2 ">Filter</h1>
                                </div>

                                <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>
                                     
                            {/* Categories options */}
                                    <div>
                                        <p className="text-2xl font-bold text-[#55031A] ml-4 mt-2"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>Categories</p>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2 ">
                                                <input type="radio" name="category" value="All" checked={category==="All"} onChange={()=>{setCategory("All");setCurrentPage(1)}}  className="accent-[#55031A]"  /> All Sarees
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="category" value="Cotton"  checked={category==="Cotton"} onChange={()=>{setCategory("Cotton");setCurrentPage(1)}}  className="accent-[#55031A] " /> Cotton
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="category" value="Nylon"  checked={category==="Nylon"} onChange={()=>{setCategory("Nylon");setCurrentPage(1)}}  className="accent-[#55031A] " /> Nylon
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="category" value="Silk"  checked={category==="Silk"} onChange={()=>{setCategory("Silk");setCurrentPage(1)}}  className="accent-[#55031A] " /> Silk
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="category" value="Handloom"  checked={category==="Handloom"} onChange={()=>{setCategory("Handloom");setCurrentPage(1)}}  className="accent-[#55031A] " /> Handloom
                                            </label>
                                        </div>
                                    </div>

                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>

                            {/* Price Range */}
                                            
                                    <div>
                                        <h1 className="text-2xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Price Range</h1>
                                        <input type="range" min="0" max="30000" defaultValue="30000" className="w-[200px] accent-[#8F0628] ml-4 mt-2" />
                                        <div className="flex flex-row justify-between text-[#8F0628] ml-4 mr-8">
                                            <span>0</span>
                                            <span>30K</span>
                                        </div>
                                    </div>

                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>           

                            {/* Rating */}

                                    <div>
                                    <p className="text-2xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Rating</p>
                                    <div className="flex flex-col gap-2">
                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>

                                    <label className="ml-4 text-[#8F0628] ">
                                    <input type="checkbox" name="rating" value="4" className="accent-[#55031A] w-4 h-4 " /> 
                                    <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-[#8F0628]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A] mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-[#D9B45A]  mt-3 mr-2"/> 
                                    & UP
                                    </label>
                                    </div>
                                    </div> 
                                    <hr className="border-[#C9953E]/60 border-1 mx-4 my-4 w-[210px]"/>  

                            {/* Stock Status          */}

                                    <div>
                                    <p className="text-xl font-bold text-[#55031A] ml-4 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Stock Status</p>
                                        <div className="ml-4 mt-2">
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="stockStatus" value="instock" className="accent-[#55031A] " style={{ fontFamily: "'Montserrat', sans-serif" }} /> In Stock
                                            </label>
                                        </div>

                                        <div className="ml-4 mt-2">
                                            <label className="text-[#8F0628] flex items-center gap-2">
                                                <input type="radio" name="stockStatus" value="outofstock" className="accent-[#55031A] " style={{ fontFamily: "'Montserrat', sans-serif" }}/>Out of Stock
                                            </label>
                                        </div>
                                    </div>
                                </div>

                             {/* Display the Sarees from mongoDB */}
                        
                             <div className="bg-transparent  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center mt-6 mx-12">
                                {products.length >0 ?
                                        (currentProducts.map((product)=>(
                                            <ProductCard
                                            key={product._id}
                                            product={product}/> 
                                         ))
                                        ) : ( <p>{error || "No Sarees Available"}</p>)
                                    }


                            </div>

                            </div>

                    {/* previous button and next button to show other product cards */}

               
                <div className="flex flex-row items-center justify-center gap-6 mt-8 ">
                
                 {/* previous page */}
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9953E]/60 text-[#55031A] hover:bg-[#55031A] hover:text-white transition duration-300">
                        <button  onClick={()=>{setCurrentPage(currentPage-1)}} disabled={currentPage === 1}className="text-xs disabled:opacity-30"><FontAwesomeIcon icon={faChevronLeft}/></button>
                        </div>
                {/* page numbers */}
                        <div className="flex flex-row items-center gap-5 text-[#55031A]" >
                        <button onClick={()=>{setCurrentPage(1)}}   className={`w-8 h-8 rounded-full transition duration-300 ${currentPage===1 ? "bg-[#55031A] text-white" :"text-[#55031A] hover:bg-[#55031A] hover:text-white" }`}>1</button>
                        <button onClick={()=>{setCurrentPage(2)}}  className={`w-8 h-8 rounded-full  transition duration-300 ${currentPage===2 ? "bg-[#55031A] text-white" :"text-[#55031A] hover:bg-[#55031A] hover:text-white" }`}>2</button>
                        <button onClick={()=>{setCurrentPage(3)}}  className={`w-8 h-8 rounded-full transition duration-300  ${currentPage===3 ? "bg-[#55031A] text-white" :"text-[#55031A] hover:bg-[#55031A] hover:text-white" }`}>3</button>
                        </div>
                {/* next page */}
                        <div  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9953E]/60 text-[#55031A] hover:bg-[#55031A] hover:text-white transition duration-300 ">
                        <button onClick={()=>{setCurrentPage(currentPage+1)}} disabled={currentPage === 3} className="text-xs disabled:opacity-30"><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    </div>
                            
                        
                       
            </div>
                            
                             
        </>
    )
}
export default Shop;