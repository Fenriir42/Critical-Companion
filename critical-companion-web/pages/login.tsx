// pages/login.tsx
import type { NextPage } from "next";
import { useState } from "react";
import { APIReq } from "../api/APIReq";
import Link from 'next/link';

const LoginPage: NextPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        APIReq.json("/login", "POST", { mail, password })
            .then((response) => {
                APIReq.setAccessToken(response.data.accessToken);
                window.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] relative">
            <Link href="/" className="absolute top-4 right-4">
                <img src="/svg-1.svg" alt="Home" className="cursor-pointer" />
            </Link>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
                <Link href="/register">
                    <div className="mt-4 inline-flex items-center cursor-pointer">
                        Create an account
                    </div>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
