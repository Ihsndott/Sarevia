import hero from "../assets/heroshop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClock, faLocation, faLocationDot, faMessage, faPhone} from "@fortawesome/free-solid-svg-icons"
import line from "../assets/underline.png"
import { useState } from "react"

function Contact(){

    const [formData , setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    
    const [loading,setLoading] = useState(false);

    const [status , setStatus] = useState("")

//function to hanlde message
    const handleMessage = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    };

//function to submit the message    

    const submit = async (event) =>{
        event.preventDefault();
        setStatus("");
        setLoading(true)
    try{
        const response = await fetch ("http://localhost:5000/api/email", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)

     });
        const data = await response.json();
        if(!response.ok){
           throw new Error (data.message || "Failed to send message")
        }

        setStatus("Message sent successfully..!")
        setFormData({
            name:"",
            email:"",
            subject:"",
            message:""
        });

    } catch(error){
        console.log(error);
        setStatus("Failed to send message. Please,Try again.")

    }finally {
        setLoading(false)
    }
} 
    return(
        <>
        <div>
                 {/* hero image */}
                <div>
                    <img src={hero} alt="hero image" className="z-50"/>
                </div>
        
                {/* hero content above the image */}
                    <div className="absolute z-50 top-20 left-5 md:top-30 md:left-10 lg:top-45 lg:left-45 md:mt-6 lg:mt-0">
                                <p className="text-[#55031A] font-semibold  inline-block  rounded-xl text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTACT US</p>
                                <p className="text-[#8F0628] text-lg md:text-3xl lg:text-5xl font-semibold lg:mt-4" style={{ fontFamily: "'Playfair Display', serif" }} >We’re Here to Help</p>
                                <p className=" [word-spacing:5px] md:[word-spacing:10px] lg:[word-spacing:15px] text-[#C9A227]  md:mt-2 lg:mt-6 text-xl md:text-3xl lg:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Get in Touch </p>
                                <p className="text-[#55031A] text-[9px] md:text-base md:mt-3 lg:mt-6" style={{ fontFamily: "'Lato', sans-serif" }}>Have a question, suggestion or need assistance?.</p>
                                <p className="text-[#55031A] text-[9px] md:text-base md:mt-1 lg:mt-0  " style={{ fontFamily: "'Lato', sans-serif" }}>Our team is always here for you.</p>
                                 
                                
              </div>
              </div>
<div className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="mb-10  lg:ml-30">
        {/* Details of Sarevia */}

        {/* address */}
            <div className="flex mt-15  md:ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faLocationDot} className=" text-[#8F0628] mt-2"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Our Address</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">Sarevia <br/>No. 12, Main Street,<br/>Colombo 07, Sri Lanka</p>
                </div>
            </div>
        {/* phone */}
            <div className="flex mt-15  md:ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faPhone} className="mt-1 text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Phone</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">+94 11 234 5678 <br/> +94 76 123 4567</p>
                </div>
            </div>
        {/* Email */}
            <div className="flex mt-15  md:ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faMessage} className=" text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Email</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">support@sarevia.lk <br/> sales@sarevia.lk</p>
                </div>
            </div>
        {/* Business Hours */}
            <div className="flex mt-15  md:ml-10">
                 
                <div className="bg-transparent w-12 h-12 rounded-full border border-[#C9A227]  text-center ml-2 pt-2 mt-5">
                    <FontAwesomeIcon icon={faClock} className=" text-[#8F0628]"/>
                </div>

                <div className="ml-4">
                    <p className="text-[#8F0628] text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Business Hours</p>
                    <p className="text-[#55031A]/80 text-sm font-semibold">Monday – Saturday<br/> 9.00 a.m. – 6.00 p.m.</p>
                </div>
            </div>  
        </div>

           <span className="hidden md:block lg:block h-120 w-px bg-[#C9A227]/60 mt-6 md:ml-4 lg:ml-[200px]"></span>
    
    {/* send message */}
           <div className=" md:ml-[30px] lg:ml-[60px]">
            <h1 className="text-xl font-bold text-[#8F0628]" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h1>
            <img src={line} alt="decorative line" className="w-[200px]"/>
            <form onSubmit={submit}>
            <div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-10 lg:gap-10">
                    <input type="text" name="name" id="name" placeholder="Name*" value={formData.name} onChange={handleMessage} className="w-[200px] border border-[#D9B45A]/60 rounded py-2 text-xs pl-2 text-[#8F0628]"/>
                    <input type="email" name="email" id="email" placeholder="Email*" value={formData.email} onChange={handleMessage} className="w-[200px] border border-[#D9B45A]/60 rounded py-2 text-xs pl-2 text-[#8F0628]"/>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <input type="text" name="subject" id="subject" placeholder="Subject*" value={formData.subject} onChange={handleMessage}  className="w-[310px] md:w-[440px] lg:w-[440px] border border-[#D9B45A]/60 rounded py-2 text-xs pl-2 text-[#8F0628]"/>
                    <textarea type="text" name="message" id="message" placeholder="Message*" value={formData.message} onChange={handleMessage} className="resize-none w-[310px] md:w-[440px] lg:w-[440px] h-[140px] border border-[#D9B45A]/60 rounded  text-xs pl-2 text-[#8F0628]"/>
                </div>
            </div>
            <button type="submit" disabled={loading} className="bg-[#8F0628] text-white font-semibold px-2 md:pl-4 md:pr-4  md:py-2 mb-4 lg:py-2 rounded md:rounded  text-xs md:text-xs mt-4 active:scale-95 " style={{ fontFamily: "'Montserrat', sans-serif" }}>{loading ? "sending message....!" : "Send Message"}</button>
            
    {/* //message for customers using status */}
            {status && (
                <p className="text-sm mb-4 text-[#8F0628]" role="status">{status}</p>
            )}
            </form>
            </div>
    </div>
        </>
    )
}
export default Contact;