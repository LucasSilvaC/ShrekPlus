import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const perfil = JSON.parse(localStorage.getItem("perfilSelecionado"));
    const imagemPerfil = perfil?.imagem || 'https://i.pinimg.com/564x/a4/70/94/a4709409b20fb316551a020aa7379402.jpg';

    return (
        <header className="relative w-full flex items-center justify-between px-6 py-4 bg-black z-50 border-b border-gray-800">
            <h1 className="text-4xl text-[#84A600]" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                Shrek<span style={{ fontFamily: "Poppins" }}>+</span>
            </h1>

            <div className="flex items-center flex-grow justify-center mr-30" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                <div className="flex items-center px-2 transition-all duration-300" style={{ transform: isExpanded ? 'translateX(-50px)' : 'translateX(0)' }}>
                    <IoSearchOutline
                        className="text-white text-3xl cursor-pointer hover:text-[#84A600]"
                        onClick={() => setIsExpanded(!isExpanded)}
                    />
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className={`bg-transparent outline-none text-[#84A600] px-2 text-xl transition-all duration-300 ${isExpanded ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
                    />
                </div>

                <nav>
                    <ul className="flex gap-10 text-white text-2xl">
                        <li className="cursor-pointer hover:text-[#84A600]" onClick={() => navigate("/home")}>Home</li>
                        <li className="cursor-pointer hover:text-[#84A600]" onClick={() => navigate("/series")}>Series</li>
                        <li className="cursor-pointer hover:text-[#84A600]">Filmes</li>
                    </ul>
                </nav>
            </div>

            <div className="relative flex items-center gap-2">
                <img src={imagemPerfil} className="w-12 h-12 rounded-md border border-[#84A600]" alt="Seu perfil" />
                <IoMdArrowDropdown
                    className="text-white text-2xl cursor-pointer hover:text-[#84A600]"
                    onClick={toggleDropdown}
                />

                {showDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-black text-white border border-[#84A600] rounded-md shadow-lg z-50">
                        <ul className="flex flex-col">
                            <li className="px-4 py-2 hover:bg-[#84A600] hover:text-black cursor-pointer" onClick={() => navigate("/profile")}>Perfil</li>
                            <li className="px-4 py-2 hover:bg-[#84A600] hover:text-black cursor-pointer">Configurações</li>
                            <li className="px-4 py-2 hover:bg-[#84A600] hover:text-black cursor-pointer">Sair</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
