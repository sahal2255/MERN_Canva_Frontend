// src/layouts/MainLayouts.js
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className="bg-black min-h-screen flex items-center justify-center">
                <main className="p-4 w-full max-w-3xl">
                    <Outlet /> {/* This will render nested route components */}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
