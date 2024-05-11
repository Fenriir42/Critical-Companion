// pages/register.tsx
import type { NextPage } from "next";
import { useState } from "react";
import APIReq from "../api/APIReq";
import Link from 'next/link';

const RegisterPage: NextPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
        const response = await APIReq("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        APIReq.setAccessToken(data.accessToken);
        // Redirect to home page or wherever you want after successful registration
        } catch (error) {
        console.error(error);
        // Handle registration error here
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] relative">
        <Link href="/" className="absolute top-4 right-4">
            <img src="/svg-1.svg" alt="Home" className="cursor-pointer" />
        </Link>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <h1>Register</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Register</button>
            <Link href="/login">
            <div className="mt-4 inline-flex items-center cursor-pointer">
                Already have an account?
            </div>
            </Link>
        </form>
        </div>
    );
};

export default RegisterPage;
