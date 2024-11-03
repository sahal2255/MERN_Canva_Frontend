// src/pages/HomePage.js
import React, { useState } from "react";
import Login from "./Login";

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <div className="grid place-items-center p-11 h-full text-center bg-black">
                <div>
                    <h1 className="text-white text-4xl font-bold mb-6">
                        Are You Here to Edit the Page?
                    </h1>
                    <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
                        Join us and start designing beautiful graphics effortlessly. No design skills required!
                    </p>
                    <button
                        className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 shadow-lg transform transition-all duration-300 hover:scale-105"
                        onClick={() => setShowLogin(true)}
                    >
                        Sign Up for Free
                    </button>
                </div>
            </div>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default HomePage;
