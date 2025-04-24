import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  logo from '../../assets/Cacr-icon.png';
import Header from "../../components/Cacr-components/Header";
import eyeoff from '../../Cacrassets/fi_eye-off.png'


const Home = () => {
  const navigate = useNavigate();
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
     const [showPassword,  setShowPasword] = useState(false)  
     
     
    const handleSubmit=()=>{
      if (!Email || !Password){
        alert("pls fill out all Details")
         return;
      }
          navigate("/dashboard")

    }


  return (
    <div className =" bg-blue-700 w-full lg:min-h-[700px] md:min-h-screen min-h-[700px] fixed ">
       <Header/>
      <div className="justify-self-center  bg-white lg:w-[400px]  md:w-[400px] w-[300px] lg:h-[530px] md:h-[600px] h-[540px] rounded-md  lg:m-5 md:m-20 m-5  p-8 ">
      
    
      
       <div className=" justify-self-center">
        <img src={logo} alt="logo" className="my-3 w-[40px] h-[40px]" /> 
       </div>
       <div className="text-center py-3"> 
        <h3 className="text-3xl pt-2 font-semibold">Welcome back</h3>
        <h3 clasName ="text-[grey]"> Login to your account</h3>
       </div>

      <form className=" my-5 ">
   
     
      <div className="relative lg:w-[350px] md:w-[350px] w-[250px]  bg-[#f8f7f7] rounded-md  h-[50px]  ">
        <input 
          type="email" 
          value={Email}  // ✅ Now controlled by state
          className="  h-[45px] bg-[#f8f7f7] px-12 md: w-[200px] lg:w-[200px] sm:w-[150px]  outline-none"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)} 
         />   
        <h3 className="absolute top-1/2 left-4 transform -translate-y-1/2 ">
        <ion-icon name="mail-outline"></ion-icon>
        </h3>
      </div>



      <div className="relative lg:w-[350px] md:w-[350px] w-[250px] bg-[#f8f7f7] rounded-md  h-[50px]  my-5">
            <input
              type={showPassword ? "text" : "Password"}
              value={Password}
              className=" h-[45px] bg-[#f8f7f7] px-12 md: w-[200px] lg:w-[200px] sm:w-[150px]  outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </h3>
            {/* Eye Icon for Toggle */}
            <img
              src={eyeoff}
              alt="Toggle Password"
              className="w-[18px] h-[18px] absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() =>setShowPasword(!showPassword)}
            />

        </div>


        <div className="flex justify-end mr-5">
        <Link to="#" className="text-blue-600">Forgot Password</Link>
       </div>
      </form>

      <div className="text-center my-8">
        <h3>Dont Have An account? <Link to="#" className= "text-blue-600" >Sign Up</Link></h3>
      </div>


      <div className="justify-self-center">
       <button 
       className="bg-blue-600 text-white w-[150px] h-[50px] rounded-md "
       onClick={handleSubmit} >Login</button>
      </div>
       

      </div>
      
    </div>
  );
};

export default Home;
