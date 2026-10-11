import hero from "../assets/heroshop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClock, faLocation, faLocationDot, faMessage, faPhone} from "@fortawesome/free-solid-svg-icons"

function Contact(){
    return(
        <>
        <div>
                 {/* hero image */}
                <div>
                    <img src={hero} alt="hero image" className="z-50"/>
                </div>
        
                {/* hero content above the image */}
                    <div className="absolute z-50 top-24 sm:top-25 md:top-30 lg:top-33 xl:top-50 left-4 md:left-20 lg:left-45 ">
                                <p className="text-[#55031A] font-semibold  inline-block  rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTACT US</p>
                                <p className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-4" style={{ fontFamily: "'Playfair Display', serif" }} >We’re Here to Help</p>
                                <p className=" [word-spacing:5px] md:[word-spacing:10px] lg:[word-spacing:15px] text-[#C9A227]  md:mt-2 lg:mt-6 text-xl md:text-3xl lg:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Get in Touch </p>
                                <p className="text-[#55031A] text-[9px] md:text-base  lg:mt-6" style={{ fontFamily: "'Lato', sans-serif" }}>Have a question, suggestion or need assistance?.</p>
                                <p className="text-[#55031A] text-[9px] md:text-base " style={{ fontFamily: "'Lato', sans-serif" }}>Our team is always here for you.</p>
                                 
                                
              </div>
              </div>
<div className="flex justify-between items-center">
        <div className="mb-10">
        {/* Details of Sarevia */}

        {/* address */}
            <div className="flex mt-15 ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faLocationDot} className=" text-[#8F0628] mt-2"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Our Address</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">Sarevia <br/>No. 12, Main Street,<br/>Colombo 07, Sri Lanka</p>
                </div>
            </div>
        {/* phone */}
            <div className="flex mt-15 ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faPhone} className="mt-1 text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Phone</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">+94 11 234 5678 <br/> +94 76 123 4567</p>
                </div>
            </div>
        {/* Email */}
            <div className="flex mt-15 ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faMessage} className=" text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Email</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">support@sarevia.lk <br/> sales@sarevia.lk</p>
                </div>
            </div>
        {/* Business Hours */}
            <div className="flex mt-15 ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faClock} className=" text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Business Hours</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">Monday – Saturday<br/> 9.00 a.m. – 6.00 p.m.</p>
                </div>
            </div>  
        </div>

           <span className="h-40 w-px bg-[#C9A227]/60"></span>

           <div>
            <h1>Send Us a Message</h1>
            

           </div>
</div>
        </>
    )
}
export default Contact;