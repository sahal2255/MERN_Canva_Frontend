import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

export default function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [showsignUp,setShowSignUp]=useState(false);

  return (
    <div className="bg-black h-[950px] relative">
      {/* Navigation Bar */}
      <div className="bg-gray-900 flex justify-between items-center p-6">
        <div className="flex-shrink-0">
          <img src="https://freelogopng.com/images/all_img/1656732927canva-logo-png.png" alt="logo" className="h-12 w-28 cursor-pointer"/>
        </div>
        <div className="flex space-x-4">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow-lg transition-all duration-300"
            onClick={() => setShowLogin(true)}
          >Sign In</button>
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow-lg transition-all duration-300"
          onClick={()=>setShowSignUp(true)}
          >Sign Up</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid place-items-center h-full text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-6 ">Are You Here to Edit the Page?</h1>
          <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
            Join us and start designing beautiful graphics effortlessly. No
            design skills required!
          </p>
          <button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 shadow-lg transform transition-all duration-300 hover:scale-105"
          onClick={()=>setShowSignUp(true)}
          >Sign Up for Free</button>
        </div>
      </div>

     
      
    </div>
  );
}
