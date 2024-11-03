import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login"; // Import the Login component
import SingUp from "../pages/SignUp";

const Header = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false); // State to control Login modal
    const [showsignUp,setShowSignUp]=useState(false)
    return (
        <div>
            <div className="bg-gray-900 flex justify-between items-center p-6">
                <div className="flex-shrink-0">
                    <img
                        src="https://freelogopng.com/images/all_img/1656732927canva-logo-png.png"
                        alt="logo"
                        className="h-12 w-28 cursor-pointer"
                    />
                </div>
                <div className="flex space-x-4">
                    <button
                        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow-lg transition-all duration-300"
                        onClick={() => setShowLogin(true)} // Open Login modal
                    >
                        Sign In
                    </button>
                    <button
                        className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow-lg transition-all duration-300"
                        onClick={() => setShowSignUp(true)}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
            {showsignUp && <SingUp onClose={() => setShowSignUp(false)} />}
        </div>
    );
};

export default Header;
