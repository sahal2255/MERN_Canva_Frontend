// src/routes/UserRoute.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import MainLayout from "../Layouts/MainLayouts";
import HomeSecond from "../pages/HomeSecond";

const UserRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomeSecond />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default UserRoute;
