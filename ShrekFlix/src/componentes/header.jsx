import React, { useState } from 'react';
import icon_1 from './img/icon_1.jpg';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    let navigate = useNavigate();

    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-black z-50 border-b border-gray-800">

            <h1 className="text-4xl text-[#84A600]" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                Shrek<span style={{ fontFamily: "Poppins" }}>+</span>
            </h1>

            <div className="flex items-center flex-grow justify-center mr-30" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                <div
                    className="flex items-center px-2 transition-all duration-300"
                    style={{ transform: isExpanded ? 'translateX(-50px)' : 'translateX(0)' }}
                >
                    <IoSearchOutline
                        className="text-[#FBFBF8] text-3xl cursor-pointer hover:text-[#84A600]"
                        onClick={() => setIsExpanded(!isExpanded)}
                    />
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className={`bg-transparent outline-none focus:outline-none focus:ring-0 text-[#84A600] px-2 placeholder-[#84A600] text-xl transition-all duration-300 ${isExpanded ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
                    />
                </div>

                <nav>
                    <ul className="flex gap-10 text-[#FBFBF8] text-2xl">
                        <li className="cursor-pointer hover:text-[#84A600]" onClick={() => {
                            navigate("/");
                        }}>Home</li>
                        <li className="cursor-pointer hover:text-[#84A600]" onClick={() => {
                            navigate("/series");
                        }}>Series</li>
                        <li className="cursor-pointer hover:text-[#84A600]" onClick={() => {
                            navigate("/filmes");
                        }}>Filmes</li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-2">
                <img src={icon_1} className="w-12 h-12 rounded-md border border-[#84A600]" alt="Seu perfil" />
                <IoMdArrowDropdown className="text-white text-2xl cursor-pointer hover:text-[#84A600]" />
            </div>
        </header>
    );
}