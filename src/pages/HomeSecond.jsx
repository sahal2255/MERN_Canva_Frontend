import React from "react";
import HomeBar from "../components/HomeBar";
import RecentDesigns from "../components/RecentDesigns";
const HomeSecond = () => {
    return (
        <div className="">
                <HomeBar />
           <div className=" m-4">
            <h1 className=" text-white text-3xl font-extrabold">Recent Designs</h1>
            <RecentDesigns />
           </div>
            
            {/* Main Content Area */}
            <div className="flex">
            <div className="flex-1 bg-slate-400 p-6">
                <h1 className="text-white text-2xl font-bold">Main Content Area</h1>
                
            </div>
            </div>
            
        </div>
    );
};

export default HomeSecond;
