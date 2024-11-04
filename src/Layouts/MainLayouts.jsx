// src/layouts/MainLayout.js
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <Header />

            {/* Main content area with Sidebar and Outlet */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <SideBar />

                {/* Main Content */}
                <main className="flex-1 bg-slate-400 p-6 overflow-y-auto">
                    <Outlet /> {/* Nested route components, such as HomeSecond */}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
