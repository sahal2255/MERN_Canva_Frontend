import React from "react";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { UserRegister } from "../Services/SignupServices";

const SignUp = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
        const response=await UserRegister(data)
        onClose(); 
    };

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 focus:outline-none"
                    >
                        <IoMdClose size={24} />
                    </button>
                    <h2 className="text-white text-2xl font-bold mb-6">Sign Up for an Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-white text-left mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: 'Enter Your Name' })}
                                className={`w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-left mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid",
                                    },
                                })}
                                className={`w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-left mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: 'Password is required' })}
                                className={`w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
                                placeholder="Your Password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-md bg-blue-600 text-white font-bold shadow-lg transition-all duration-300 hover:bg-blue-700"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="flex justify-center items-center pt-4">
                        <div className="flex-1 border-t border-gray-600"></div>
                        <div className="mx-4 text-white">OR</div>
                        <div className="flex-1 border-t border-gray-600"></div>
                    </div>
                    <div className="mt-6">
                        <button
                            className="flex items-center justify-center w-full px-6 py-3 rounded-md bg-white text-gray-700 font-bold shadow-lg transition-all duration-300 hover:bg-gray-200"
                        >
                            <FcGoogle size={24} className="mr-2" />Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
