import { useState } from "react";

function Login(){

    const [fname,setFname] = useState("");
  const[lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [dob,setDob] = useState("");
  const [ num,setNum] = useState("");
  const [add,setAdd] = useState("");
  const [password,setPassword] = useState("");
  const [cpass,setCpass] = useState("")



          function finalSubmit(event){
            event.preventDefault();
             
            if (fname.trim() === ""){
                alert("First Name is required");
                return;
            }

            if (fname.length<3){
              alert("Charecter must be at least 3 characters")
            }

            const fnameformat = /^[A-Za-z]+$/;
            if(!fnameformat.test(fname)){
              alert("Invalid first name");
              return;
            }


             if (lname.trim() === ""){
                alert("Last Name is required");
                return;
            }
            if (lname.length<3){
              alert("Charecter must be at least 3 characters")
            }

            const lnameformat = /^[A-Za-z]+$/;
            if(!lnameformat.test(lname)){
              alert("Invalid last name");
              return;
            }



            if(email.trim() ===""){
              alert("email is required")
              return;

            }
            const  emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

          if(!emailformat.test(email)){
             alert("Invalid email address");
             return;
          }

          
            if (dob === ""){
                alert("DOB is required");
                return;
            }


            
            if (num.trim() === ""){
                alert("Contact Number is required");
                return;
            }
            const numformat = /^0\d{9}$/;

            if(!numformat.test(num)){
              alert("Invalid Phone Number");
              return;
            }


             if (add.trim() === ""){
                alert("Address is required");
                return;
            }

            if (password.trim() === ""){
                alert("Password is required");
                return;
            }
            
            if (password.length<8){
              alert("Password must be at least 8 characters");
              return;
            }
           
            
            if (cpass.trim() === ""){
                alert("Confirm your password");
                return;
            }

            if (cpass !== password){
              alert("Incorrect password");
              return;
            }



            alert("Registered Successfully..!");
          }


    return(
        <>
         <div className="mb-10">
        <p
          className="text-3xl font-bold text-[#8F0628] mt-20 ml-4 md:ml-0 flex justify-center items-center "
          style={{ fontFamily: "Playfair Display" }}
        >
         Create Your Sarevia Account
        </p>
        <p className="text-center  text-gray-600 mt-3 "> Join Sarevia and discover timeless elegance</p>

        <form
        onSubmit={finalSubmit} 
         className="bg-[#FFE3AD]/20 border border-[#D9B45A]/40 shadow-lg rounded-2xl p-5 mt-6 md:mx-[400px]">

          <p
            className="text-2xl font-semibold text-[#8F0628] ml-4 mb-6"
            style={{ fontFamily: "League Spartan" }}
          >
            Your Details
          </p>

          

          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            
            <div>
              <label
                className="text-lg text-[#8F0628] font-semibold ml-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                First Name :
              </label>

              <input
                id="fname"
                type="text"
                name="fname"
                value={fname}
                onChange={(event)=> setFname(event.target.value)}
                // placeholder="Your First Name..."
                className="ml-4 text-gray-600 mt-2 w-[300px] h-[50px] bg-transparent text-center p-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mt-4 md:mt-0">
              
              <label
                className="text-lg text-[#8F0628] font-semibold ml-4 md:ml-0"
                style={{ fontFamily: "Playfair Display" }}
              >
                Last Name :
              </label>

              <input
                id="lname"
                type="text"
                name="lname"
                value={lname}
                onChange={(event)=>setLname(event.target.value)}
                // placeholder="Your Last Name..."
                className="ml-4 md:ml-0 text-gray-600 mt-2 w-[300px] h-[50px] bg-transparent text-center p-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 md:mt-4">

            <div className="mt-4">
              <label
                className="text-lg text-[#8F0628] font-semibold ml-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                E-mail :
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                // placeholder="Type your e-mail here..."
                className="ml-4 text-gray-600 bg-transparent w-[300px] h-[50px] text-center mt-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mt-4">
              <label
                className="text-lg text-[#8F0628]  font-semibold ml-4 md:ml-2"
                style={{ fontFamily: "Playfair Display" }}
              >
                Date of Birth :
              </label>

              <input
                id="dob"
                type="date"
                name="dob"
                value={dob}
                onChange={(event)=> setDob(event.target.value)}
                className="text-gray-600/40 bg-transparent w-[300px] h-[50px]  text-center pl-3 pr-3 ml-4 md:ml-2 mt-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>

          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">

          <div className="mt-4 md:mt-6">
            <label
              className="text-lg text-[#8F0628] font-semibold ml-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Phone Number :
            </label>
            <br />

            <input
              id="num"
              type="text"
              name="number"
              value={num}
              onChange={(event)=>setNum (event.target.value)}
            //   placeholder="0777456127"
              className="mt-2 ml-4 text-gray-600 w-[300px]  h-[50px] text-center bg-transparent border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mt-4 md:mt-6">
            <label
              className="text-lg text-[#8F0628] font-semibold "
              style={{ fontFamily: "Playfair Display" }}
            >
              Address :
            </label>
            <br />

            <input
              id="address"
              type="text"
              name="address"
              value={add}
              onChange={(event)=> setAdd(event.target.value)}
            //   placeholder="No:12, weligama mawatha, colombo-11"
              className="mt-2 mr-6 text-gray-600 w-[300px]  h-[50px] text-center bg-transparent border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
            />
          </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div>
              <label
                className="text-lg text-[#8F0628] font-semibold ml-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Password :
              </label>

              <input
                id="pword"
                type="password"
                name="password"
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                placeholder="**********"
                className="ml-4 text-gray-600 mt-2 w-[300px] h-[50px] bg-transparent  p-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mt-4 md:mt-0">
              <label
                className="text-lg text-[#8F0628] font-semibold ml-12"
                style={{ fontFamily: "Playfair Display" }}
              >
                Confirm Password :
              </label>

              <input
                id="cpassword"
                type="password"
                name="password"
                value={cpass}
                onChange={(event)=> setCpass(event.target.value)}
                placeholder="**********"
                className="ml-12 text-gray-600 mt-2 w-[300px] h-[50px] bg-transparent  p-2 border-2 border-[#FFE3AD] rounded-2xl focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>



          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#de032b] rounded-2xl px-6 py-2 text-white text-xl font-semibold active:scale-95"
              style={{ fontFamily: "Nunito" }}
            >
              Submit
            </button>
          </div>

        </form>
      </div>

        </>
    )
}
export default Login;