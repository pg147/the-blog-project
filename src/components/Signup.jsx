// React imports
import { useState } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// React Router
import { Link, useNavigate } from "react-router-dom";

// React Redux 
import { useDispatch } from "react-redux";

// Auth Service from appwrite
import authService from "../appwrite/auth.js";

// Auth Slice method
import { login } from "../store/authSlice.js";

// Components
import { Input, Button, Logo } from "./index.js";

// Custom Icons
import { LockIcon, MailIcon, UserIcon } from "../constants/icons.js";

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signup = async (data) => {
        setError("");
        try {
            const user = await authService.createAccount(data);

            if (user) {
                const userData = authService.getUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="w-full md:max-w-xl shadow-intense rounded-xl">
            {/* Logo */}
            <div className="w-fit mx-auto"><Logo /></div>

            {/* Heading */}
            <h1 className="font-semibold text-center">Sign in to your <span className="text-primary">account</span></h1>

            {/* Error message */}
            {error.length > 0 && <p className="text-sm font-medium text-red-700">Oops ! {error}</p>}

            {/* Form */}
            <form onSubmit={handleSubmit(signup)} className="mt-6">
                {/* Name */}
                <Input
                    icon={<UserIcon />}
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                        required: true
                    })}
                />

                {/* Email */}
                <Input
                    icon={<MailIcon />}
                    type="email"
                    placeholder="Enter a valid email"
                    {...register("email", {
                        required: true,
                        pattern: /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/
                    })}
                />

                {/* Password */}
                <Input
                    icon={<LockIcon />}
                    type="password"
                    className="mt-3"
                    placeholder="Set password"
                    {...register("password", {
                        required: true,
                        min: 6,
                        max: 10
                    })}
                />

                {/* Button */}
                <Button type="submit" title="Create account" variant="primary" className="w-full" />
            </form>

            {/* Quicklink */}
            <p className="text-center text-sm font-medium">
                Already have an account ?
                <Link to={"/login"}>
                    <span className="text-primary lg:hover:underline">Sign in</span>
                </Link>
            </p>
        </div>
    )
}
