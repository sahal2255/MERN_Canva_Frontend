import React from "react";
import SideBar from "../components/SideBar";

const HomeSecond = () => {
    return (
        <div className="flex h-screen">
           
            
            {/* Main Content Area */}
            <div className="flex-1 bg-slate-400 p-6">
                <h1 className="text-white text-2xl font-bold">Main Content Area</h1>
                <p className="text-white mt-4">
                    This is where the main content will go. Add additional components or sections as needed.
                </p>
            </div>
        </div>
    );
};

export default HomeSecond;
