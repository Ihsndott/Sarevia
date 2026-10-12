import heroimg from "../assets/hero.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight, faTruck, faShield, faRotateLeft, faHeadphones } from "@fortawesome/free-solid-svg-icons"
import cotton from "../assets/cotton.jpeg"
import nylon from "../assets/nylon.webp"
import silk from "../assets/silk.webp"
import handloom from "../assets/handloom.webp"
import line from "../assets/underline.png"
import promo from "../assets/promobanner.png"
import banarasi from "../assets/banarasi.webp"
import bridal from "../assets/bridal.webp"

function Home(){
    return(
        <>
        {/* hero image */}
        <div>
            <img src={heroimg} alt="hero image" className="absolute z-50 top-25"/>
        </div>

        {/* hero content above the image */}
            <div className="absolute z-50 top-24 sm:top-25 md:top-30 lg:top-33 xl:top-50 left-4 md:left-20 lg:left-45 ">
                        <p className="text-[#55031A] font-semibold  inline-block lg:px-2 rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>PREMIUM SAREE COLLECTION</p>
                        <p className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-2" style={{ fontFamily: "'Playfair Display', serif" }} >Timeless Elegance</p>
                        <p className=" [word-spacing:5px] md:[word-spacing:10px] lg:[word-spacing:15px] text-[#C9A227]  md:mt-2 lg:mt-4 text-xl md:text-3xl lg:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>in  Every Thread </p>
                        <p className="text-[#55031A] text-[9px] md:text-xl  lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>Discover our exquisite collection of sarees, crafted <br/> with tradition, elegance and grace.</p>

                        <div className="mt-1 md:mt-4 lg:mt-8 flex items-center ">
                            <button className="bg-[#8F0628] text-white font-semibold px-2 md:pl-8 md:pr-4  md:py-2 lg:py-3 rounded md:rounded-3xl  text-xs md:text-base " style={{ fontFamily: "'Montserrat', sans-serif" }}>SHOP NOW <FontAwesomeIcon icon={faArrowRight} className="text-md md:text-xl ml-2  mr-2 text-white "/></button>
                        </div>
                           
            </div>

            {/* shop by category */}
            <div>
                    <div className="flex flex-col justify-center items-center mt-[150px] md:mt-[250px] lg:mt-[500px]">
                        <p className="text-[#8F0628] md:text-3xl font-bold mt-8 mr-8 md:mr-0 lg:mr-0"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shop By Category</p>
                        <img src={line} alt="decorative line" className="w-[180px] md:w-[300px] lg:w-[300px] absolute z-50 top-[260px] md:top-[400px] lg:top-[660px] mr-8 md:mr-0 lg:mr-0"  />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 lg:gap-6 mt-12 mx-8 md:mx-20  pb-4">
                        {/* category-1 */}
                        <div>
                          <img src={cotton} alt="beauty image" className=" w-[250px] h-[380px]  object-cover rounded-3xl ml-6 text-center p-2 border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-29 md:ml-12 lg:ml-25 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>COTTON</p>
                        
                        </div>

                        {/* category-2 */}
                        <div >
                         <img src={nylon} alt="beauty image" className=" w-[250px] h-[380px]  object-cover mt-4 md:mt-16 lg:mt-16  rounded-3xl ml-7 md:ml-6 lg:ml-6 text-center p-2 border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-29 md:ml-15 lg:ml-25 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NYLON</p>
                         
                        </div>

                        {/* category-3 */}
                        <div>
                         <img src={silk} alt="beauty image" className=" w-[250px] h-[380px]  object-cover rounded-3xl ml-6 mt-4 md:mt-0 lg:mt-0 text-center p-2 border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-32 md:ml-17 lg:ml-30 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SILK</p>
                        
                        </div>

                        {/* category-4 */}
                        <div >
                         <img src={handloom} alt="beauty image" className=" w-[250px] h-[380px]  object-cover mt-4 md:mt-16 lg:mt-16 rounded-3xl ml-6 text-center p-2 border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-28 md:ml-10 lg:ml-25 mt-2 mb-4 md:mb-0 lg:mb-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>HANDLOOM</p>
                         
                        </div>
                    </div>
            </div>

            {/* Featured Products */}
            <div className=" bg-[#FFE3AD]/60">
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-[#8F0628] md:text-3xl font-bold mt-6 md:mt-8 lg:mt-8 "  style={{ fontFamily: "'Cormorant Garamond', serif" }}>Featured Products</p>
                        <img src={line} alt="decorative line" className="w-[170px] md:w-[300px] lg:w-[300px] absolute z-50 top-[2080px] md:top-[1010px]  lg:top-[1270px] "  />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 mx-10 md:mx-20 lg:mx-20  pb-4">
                        {/* category-1 */}
                        <div>
                          <img src="/images/cotton1.webp" alt="cotton image" className=" w-[250px] h-[380px]  object-cover rounded-3xl ml-6 text-center  border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-28 md:ml-12 lg:ml-25 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>COTTON</p>
                        
                        </div>

                        {/* category-2 */}
                        <div >
                         <img src="/images/nylon2.webp" alt="nylon image" className=" w-[250px] h-[380px]  object-cover   rounded-3xl ml-6 text-center  border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-30 md:ml-15 lg:ml-25 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NYLON</p>
                         
                        </div>

                        {/* category-3 */}
                        <div>
                         <img src="/images/silk2.webp" alt="silk image" className=" w-[250px] h-[380px]  object-cover rounded-3xl ml-6 text-center  border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-33 md:ml-17 lg:ml-30 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SILK</p>
                        
                        </div>

                        {/* category-4 */}
                        <div >
                         <img src="/images/handloom2.webp" alt="handloom image" className=" w-[250px] h-[380px]  object-cover  rounded-3xl ml-6 text-center  border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-semibold ml-28 md:ml-10 lg:ml-25 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>HANDLOOM</p>
                         
                        </div>
                    </div>
            </div>

        {/* promo banner */}
        <div>
            <img src={promo} alt="promo banner image" className="relative w-[348px] md:w-[700px] lg:w-[1430px] h-[200px] md:h-[250px] lg:h-[250px] object-cover mx-3 md:mx-7 lg:mx-12 mt-8 rounded-3xl "/>
        </div>

        {/* Promo content above image */}
        <div className="absolute z-50 top-[3930px] md:top-[1570px] lg:top-[1830px]">
            <p className=" ml-[270px] md:ml-[550px] lg:ml-[1240px] text-[10px] md:text-base lg:text-base text-white font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>ENDING SOON</p>
            <p className="text-4xl md:text-6xl lg:text-6xl [word-spacing:15px] md:[word-spacing:40px] lg:[word-spacing:40px]  text-white/80 font ml-[80px] md:ml-[250px] lg:ml-[600px] mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>Wedding Season</p>
            <p className="text-xl md:text-2xl lg:text-2xl font-semibold text-white ml-[240px] md:ml-[570px] lg:ml-[920px]" style={{ fontFamily: "'Cinzel', serif" }}>OFFER</p>
            <div className="flex flex-row gap-1 md:gap-2 lg:gap-2 items-center  md:mt-6 lg:mt-6 ml-[20px] md:ml-[50px] lg:ml-[460px] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p className="text-xl md:text-3xl lg:text-3xl">Get</p>
                <p className="text-3xl md:text-6xl lg:text-6xl">40%</p>
                <p className="text-xl md:text-3xl lg:text-3xl">off on Wedding Sarees</p>
                <button className="hidden md:block lg:block bg-[#F6F2E1] text-[#8F0628]  font-semibold lg:ml-12 md:px-2 lg:px-2 md:pl-4 md:pr-4  md:py-1 rounded md:rounded-3xl text-[10px] md:text-base lg:text-base " style={{ fontFamily: "'Montserrat', sans-serif" }}>Grab Deal</button>
             </div>           
              <div>
                 <button className="md:hidden lg:hidden bg-[#F6F2E1] text-[#8F0628] ml-[160px]  mt-5 px-2 py-1 font-semibold  rounded-2xl text-[10px]  " style={{ fontFamily: "'Montserrat', sans-serif" }}>Grab Deal</button>
                 </div>
            
        </div>

         {/* Latest collections */}
            <div >
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-[#8F0628] md:text-3xl font-bold mt-12 "  style={{ fontFamily: "'Cormorant Garamond', serif" }}>OUR LATEST COLLECTIONS</p>
                        <img src={line} alt="decorative line" className="w-[250px] md:w-[300px] lg:w-[300px] absolute z-50 top-[4160px] md:top-[1860px] lg:top-[2110px] "  />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2  mt-16 lg:pl-20 mx-2 md:mx-4 lg:mx-60 pb-4">
                        {/* category-1 */}
                        <div>
                          <img src={banarasi} alt="beauty image" className=" w-[400px] h-[380px]  object-cover rounded-3xl  text-center  border-2 border-[#8F0628]"/>
                         <p className="text-[#8F0628] md:text-xl font-bold ml-35 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Banarasi Silk</p>
                           <button className="text-[#F6F2E1] bg-[#8F0628] font-semibold ml-30 md:ml-32 lg:ml-32 px-2 md:pl-4 md:pr-4  md:py-1 rounded md:rounded-xl lg:rounded-xl mt-2 " style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore More</button>
                        </div>

                        {/* category-2 */}
                        <div >
                         <img src={bridal} alt="beauty image" className=" w-[400px] h-[380px]  object-cover   rounded-3xl  text-center  border-2 border-[#8F0628] mt-6 md:mt-0 lg:mt-0"/>
                         <p className="text-[#8F0628] md:text-xl font-bold ml-35 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Bridal Collection</p>
                            <button className="bg-[#8F0628] text-[#F6F2E1] font-semibold ml-32 md:ml-35 lg:ml-35 px-2 md:pl-4 md:pr-4  md:py-1 rounded md:rounded-xl mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore More</button>
                         
                        </div>
                    </div>
            </div>
        
        {/* services provide by shophub */}
            <div className="bg-[#FFE3AD]/60 px-4 py-6 flex flex-col md:flex-row gap-6 justify-between px-14 rounded-xl mt-6 ml-6 mr-6 mb-8 border border-[#55031A]/40 ">
                    <div className="flex flex-row gap-2">
                        <div className="bg-[#C9A227]/40 rounded-full px-2">
                            <FontAwesomeIcon icon={faTruck} className="text-xl mt-3 text-[#55031A]" /> 
                        </div> 
                        <div className="flex flex-col font-semibold">
                            <p className="text-[#8F0628]">Free Shipping</p>    
                            <p className="text-[#8F0628]/80 text-sm">On orders above $50 </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#C9A227]/40 rounded-full px-2">
                            <FontAwesomeIcon icon={faShield} className="text-xl mt-3 text-[#55031A]" /> 
                        </div> 
                        <div className="flex flex-col font-semibold">
                            <p className="text-[#8F0628]">Secure Payments</p>    
                            <p className="text-[#8F0628]/80 text-sm">100% secure checkout  </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#C9A227]/40 rounded-full px-2">
                            <FontAwesomeIcon icon={faRotateLeft} className="text-xl mt-3 text-[#55031A]" /> 
                        </div> 
                        <div className="flex flex-col font-semibold">
                            <p className="text-[#8F0628]">Easy Returns</p>    
                            <p className="text-[#8F0628]/80 text-sm">30-day return policy </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#C9A227]/40 rounded-full px-2">
                            <FontAwesomeIcon icon={faHeadphones} className="text-xl mt-3 text-[#55031A]" /> 
                        </div> 
                        <div className="flex flex-col font-semibold">
                            <p className="text-[#8F0628]">2/7 Support</p>    
                            <p className="text-[#8F0628]/80 text-sm">Always here to help </p>
                        </div>  
                    </div>   
            </div>   

            {/* text below the services */}
            <div className="flex flex-row gap-6 items-center justify-center bg-[#FFE3AD]/30 mt-10 md:mt-20 lg:mt-20 p-12 mb-10 md:mb-20 lg:mb-20">
                <p className="text-xl md:text-4xl lg:text-6xl text-[#8F0628] font-bold" style={{ fontFamily: "'Magnolia Script', serif", fontStyle: "italic" }}>Fashion, Tailored</p>
                <p className="text-xl md:text-3xl lg:text-5xl text-[#8F0628]" style={{ fontFamily: "'Allura', cursive" }}>for</p>
                <p className="text-xl md:text-4xl lg:text-6xl text-[#8F0628] font-bold" style={{ fontFamily: "'Magnolia Script', serif", fontStyle: "italic" }}>You...</p>
            </div>

        </>
    )
}
export default Home;