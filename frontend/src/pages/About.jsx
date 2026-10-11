import hero from "../assets/contacthero.png"
import abouthero from "../assets/abouthero.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCrown, faGem, faHeart, faStamp} from "@fortawesome/free-solid-svg-icons"

function About(){
    return(
        <>
        <div>
         {/* hero image */}
        <div>
            <img src={hero} alt="hero image" className="z-50"/>
        </div>

        {/* hero content above the image */}
            <div className="absolute z-50 top-24 sm:top-25 md:top-30 lg:top-33 xl:top-50 left-4 md:left-20 lg:left-45 ">
                        <p className="text-[#55031A] font-semibold  inline-block lg:px-2 rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>ABOUT US</p>
                        <p className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-2" style={{ fontFamily: "'Playfair Display', serif" }} >Our Story</p>
                        <p className=" [word-spacing:5px] md:[word-spacing:10px] lg:[word-spacing:15px] text-[#C9A227]  md:mt-2 lg:mt-4 text-xl md:text-3xl lg:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Weaving Tradition Into Every Drape </p>
                        <p className="text-[#55031A] text-[9px] md:text-base  lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>At Sarevia, every saree tells a story of timeless elegance, rich heritage,<br/> and beautiful craftsmanship. We celebrate the beauty of traditional Indian <br/>textiles by bringing together exquisite designs, luxurious fabrics,<br/> and intricate detailing.</p>
                        <p className="text-[#55031A] text-[9px] md:text-base  lg:mt-4" style={{ fontFamily: "'Lato', sans-serif" }}>Our collection is thoughtfully curated for women who appreciate the charm <br/> of tradition and the elegance of modern style. From everyday grace to unforgettable<br/> celebrations, Sarevia helps you find the perfect saree for every occasion.</p>
                         
                        
      </div>
      </div>
            <div className="flex items-center mt-15">
                 {/* hero small image */}
                <div>
                    <img src={abouthero} alt="hero image" className="z-50 w-[250px] h-[250px] object-cover rounded-2xl ml-20 "/>
                </div>
                <div className="ml-20">
                        <p className="text-[#55031A] font-semibold  inline-block  rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Our Journey</p>
                        <p  className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>A Vision of Elegance</p>
                        <p className="text-[#55031A] text-[9px] md:text-base  lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>Sarevia was created with a passion for traditional sarees and a love for <br/>  authentic craftsmanship. Our vision is to make every woman feel confident, <br/>  graceful, and beautiful through carefully selected sarees that reflect culture,<br/>  artistry, and individuality.</p>
                        <p className="text-[#55031A] text-[9px] md:text-base   lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>We believe a saree is more than just an outfit. It is a symbol of heritage,<br/> a reflection of personal style, and a treasured part of life's most meaningful moments.</p>
                </div>   
            </div>
    
    {/* facilities of Sarevia */}
            <div className="flex items-center justify-between mt-20 mx-36">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2">
                    <FontAwesomeIcon icon={faStamp} className="text-2xl text-[#8F0628]"/>
                    </div>
                    <p className="text-xl text-[#8F0628] font-semibold"style={{ fontFamily: "'Playfair Display', serif" }}>Authentic</p>
                    <p  className="text-[#55031A] text-[9px] md:text-sm  text-center lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>Traditional designs<br/>
& pure fabrics</p>
                </div>

                <span className="h-28 w-px bg-[#C9A227]/60"></span>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2">
                    <FontAwesomeIcon icon={faGem} className="text-2xl text-[#8F0628]"/>
                    </div>
                    <p className="text-xl text-[#8F0628] font-semibold"style={{ fontFamily: "'Playfair Display', serif" }}>Premium Quality</p>
                    <p  className="text-[#55031A] text-[9px] md:text-sm  text-center lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>Handpicked for<br/>
lasting elegance</p>
                </div>

                <span className="h-28 w-px bg-[#C9A227]/60"></span>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2">
                    <FontAwesomeIcon icon={faHeart} className="text-2xl text-[#8F0628]"/>
                    </div>
                    <p className="text-xl text-[#8F0628] font-semibold"style={{ fontFamily: "'Playfair Display', serif" }}>Customer First</p>
                    <p  className="text-[#55031A] text-[9px] md:text-sm  text-center lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}> Your happiness<br/>
matters to us</p>
                </div>
                
                <span className="h-28 w-px bg-[#C9A227]/60"></span>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2">
                    <FontAwesomeIcon icon={faCrown} className="text-2xl text-[#8F0628]"/>
                    </div>
                    <p className="text-xl text-[#8F0628] font-semibold"style={{ fontFamily: "'Playfair Display', serif" }}>Timeless Style</p>
                    <p  className="text-[#55031A] text-[9px] md:text-sm  text-center lg:mt-3" style={{ fontFamily: "'Lato', sans-serif" }}>For every occasion <br/> and generation</p>
                </div>
            </div>

            <div className="flex items-center justify-center mt-20 mb-20 bg-[#FFE3AD]/30 py-10 mx-12 rounded-xl border border-[#C9A227]">
                <h1 className="text-3xl text-[#8F0628] italic font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>"Every saree is a piece of art, woven with love and tradition."</h1>
            </div>
        </>
    )
}
export default About;