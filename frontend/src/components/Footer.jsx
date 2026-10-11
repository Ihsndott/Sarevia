import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram, faFacebook,faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <>
        <div  className="bg-[#8F0628] flex flex-row gap-2 justify-between itmes-center">
            {/* logo and social media icons */}
            <div className="pt-4 pl-2">
                <img src={logo} alt="logo" className="w-[100px] md:w-[150px] lg:w-[250px] bg-[#FFE3AD] rounded-full"/>
                 <FontAwesomeIcon icon={faWhatsapp} className="text-md md:text-xl  lg:mt-4 mr-3 text-white lg:ml-14 "/>
                 <FontAwesomeIcon icon={faInstagram} className="text-md md:text-xl mt-4 md:mt-4 mr-3 text-white "/>
                 <FontAwesomeIcon icon={faFacebook} className="text-md md:text-xl mt-4 md:mt-4 mr-3 text-white "/>
                 <FontAwesomeIcon icon={faTiktok} className="text-md md:text-xl mt-4 lg:mt-4 mr-3 text-white "/>
            </div>
            {/* quick links */}
            <div>
                <h1 className="text-white text-md  md:text-2xl lg:text-2xl font-semibold pt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Quick Links</h1>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Home</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shop</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>About Us</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Contact</p>
            </div>
            {/* services */}
            <div>
                <h1 className="text-white pt-4 text-md  md:text-2xl lg:text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Customer Services</h1>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shipping Policy</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Exchange and Return Policy</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Privacy Policy</p>
                <p className="text-white/80 text-sm md:text-xl  lg:text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Terms and Condition</p>
            </div>
            {/* news letter for tablet and laptop */}
            <div className="hidden md:block lg:block flex flex-col pt-4 pr-6 lg:pr-12">
                <h1 className="text-white text-md  md:text-2xl lg:text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Newsletter</h1>
                <p className="text-white/80 text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Subscribe to our newsletter</p>
                <input  name="email" id="email" type="email" placeholder="Your email.." className="text-white/60 border-2 rounded-2xl pl-6 mt-2  focus:ring-2  focus:ring-yellow-500"/><br/>
                <button className="text-white text-xl px-4  mt-4 py-1 bg-red-500 rounded-2xl">Subscribe</button>
            </div>

            {/* News letter mobile phone */}
            </div>
            <div className="md:hidden lg:hidden flex flex-col pt-4 pr-4 pl-4 bg-[#8F0628]">
                    <h1 className="text-white text-md  md:text-2xl lg:text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Newsletter</h1>
                    <p className="text-white/80 text-xl font-semibold pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Subscribe to our newsletter</p>
                    <input  name="email" id="email" type="email" placeholder="Your email.." className="text-white/60 border-2 rounded-2xl pl-4 mt-2  focus:ring-2  focus:ring-yellow-500"/>
                    <button className="text-white text-xl  mt-4 py-1 bg-red-500 rounded-2xl mb-12">Subscribe</button>
                </div>
        </>
    )
}
export default Footer;