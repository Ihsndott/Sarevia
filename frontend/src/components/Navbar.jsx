import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart,faUser,faHouse, faBagShopping, faCircleInfo,faPhone } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"


const NavlinkStyle = ({isActive}) => `text-md md:text-md lg:text-2xl   font-semibold transition active:scale-95  hover:text-[#8F0628] ${ isActive? " text-white/80  md:text-[#8F0628] lg:text-[#8F0628] underline decoration-2 underline-offset-8 " : "text-white/60 md:text-[#55031A] lg:text-[#55031A]" }`


function Navbar(){

    

    return(
        <>
        <div className="flex items-center justify-between">
                {/* logo */}
                <div>
                   <img src={logo} alt="logo" className="w-[150px] md:w-[250px]"/>
                </div>
               

                {/* menu */}
                <div className="hidden md:block md:flex flex-row gap-8  cursor-pointer ">
                    <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                    <NavLink to="/Shop" className={NavlinkStyle} >Shop</NavLink>
                    <NavLink to="/About" className={NavlinkStyle} >About Us</NavLink>
                    <NavLink to="/Contact" className={NavlinkStyle} >Contact</NavLink>
                </div>

                {/*icon*/}
                <div className=" cursor-pointer flex">
                    {/* User icon */}
                    <div>
                       <FontAwesomeIcon icon={faUser} className="text-xl md:text-2xl text-[#8F0628] mr-2 mt-4 md:mt-2 lg:mt-3 "/> 
                    </div>

                    {/* Add to cart icon */}
                    <NavLink to="/Addtocart" >
                    <div className="flex flex-row " >
                        <FontAwesomeIcon icon={faShoppingCart} className="transition active:scale-95 text-lg md:text-2xl text-[#8F0628] mt-5 md:mt-2 lg:mt-3 mr-4 lg:mr-12"/>
                        {/* <p className="text-sm md:text-md font-bold absolute ml-13 md:ml-8  md:mt-0 text-white ">{cartcount.length}</p> */}
                    </div>
                    </NavLink>
            </div>

                   
</div> 

{/* <hr className="text-[#26352D]/40 "/> */}
                {/* <!--Mobile-menu--> */}
                <div  className="md:hidden fixed bottom-4 left-0 right-0 z-50 ">
                        <div className="flex flex-row gap-6 justify-center items-center  backdrop-blur-lg  bg-[#55031A] border-2 border-white/90 py-2 rounded-full shadow-lg">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col ">
                                    <FontAwesomeIcon icon={faHouse} className="text-md ml-4 mt-1 text-white/80 "/>
                                    <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                                </div>

                                 <div className="flex flex-col ">
                                     <FontAwesomeIcon icon={faBagShopping} className="text-md ml-3 mt-1 text-white/80 "/>
                                    <NavLink to="/Shop" className={NavlinkStyle} >Shop</NavLink>
                                </div>    

                                 <div className="flex flex-col ">  
                                     <FontAwesomeIcon icon={faCircleInfo} className="text-md ml-5 mt-1 text-white/80 "/>  
                                    <NavLink to="/About" className={NavlinkStyle} >About Us</NavLink>
                                </div>

                                 <div className="flex flex-col ">  
                                     <FontAwesomeIcon icon={faPhone} className="text-md ml-4 mt-1 text-white/80 "/>
                                    <NavLink to="/Contact" className={NavlinkStyle} >Contact</NavLink>
                                </div>  
                                
                            </div>

                        </div>
                </div>  
                               

                         
                               

              
        
        </>
    )
}
export default Navbar;