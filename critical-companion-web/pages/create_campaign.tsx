import type { NextPage } from "next";
import { useState } from "react";
import { APIReq } from "../api/APIReq";
import Link from 'next/link';

const CreateCampaign: NextPage = () => {
    const [name, setName] = useState("");

    const handleCampaign = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        APIReq.json("/create_capaign", "POST", { name })
            .then()
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] relative">
            <Link href="/" className="absolute top-4 right-4">
                <img src="/svg-1.svg" alt="Home" className="cursor-pointer" />
            </Link>
            <form className="flex flex-col gap-4" onSubmit={handleCampaign}>
                <h1>Campaign name</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCampaign;