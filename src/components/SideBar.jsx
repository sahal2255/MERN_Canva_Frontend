import React from "react";
import { GoHome, GoProjectSymlink } from "react-icons/go";
import { LuLayoutTemplate } from "react-icons/lu";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="bg-white w-64 h-screen p-4 shadow-lg flex flex-col items-start space-y-6">
            <h1 className="text-xl font-bold text-gray-800 mb-8">Dashboard</h1>
            <div className="space-y-4 w-full">
                <Link to="/home" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <GoHome className="text-gray-600" size={24} />
                    <span className="text-gray-700 font-medium">Home</span>
                </Link>
                <Link to="/projects" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <GoProjectSymlink className="text-gray-600" size={24} />
                    <span className="text-gray-700 font-medium">Projects</span>
                </Link>
                <Link to="/templates" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <LuLayoutTemplate className="text-gray-600" size={24} />
                    <span className="text-gray-700 font-medium">Templates</span>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
