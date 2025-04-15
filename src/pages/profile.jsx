import React from 'react';
import { useNavigate } from "react-router";
import { IoMdAddCircle } from "react-icons/io";

export default function Profile() {
    const perfis = [
        { nome: 'Encantado', imagem: 'https://i.pinimg.com/736x/d2/de/fd/d2defd0db6bf9eed6e76887cab2db49b.jpg' },
        { nome: 'Shrek', imagem: 'https://i.pinimg.com/564x/a4/70/94/a4709409b20fb316551a020aa7379402.jpg' },
        { nome: 'Gato de botas', imagem: 'https://i.pinimg.com/236x/ba/91/fa/ba91fab1821f2f87d6c66087e65a4d8a.jpg' },
        { nome: 'Pinóquio', imagem: 'https://pbs.twimg.com/media/E5DUK3jVIAQlE2e.jpg' },
    ];
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-amber-50 flex flex-col items-center justify-center">
            <h1 
                className="text-4xl text-[#84A600] absolute top-5 left-5 font-extrabold"
                style={{ fontFamily: "'ShrekFont', sans-serif" }}
            >
                Shrek<span style={{ fontFamily: "Poppins" }}>+</span>
            </h1>

            <h2 className="text-5xl font-bold mb-12">Quem está assistindo?</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-4">
                {perfis.map((perfil, index) => (
                    <div 
                        key={index}
                        onClick={() => navigate('/home')}
                        className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
                    >
                        <img
                            src={perfil.imagem}
                            alt={perfil.nome}
                            className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg border-4 border-transparent hover:border-[#84A600] shadow-lg object-cover"
                        />
                        <span className="mt-4 text-lg font-semibold">{perfil.nome}</span>
                    </div>
                ))}

                <div 
                    className="flex flex-col items-center text-[#666] hover:text-[#84A600] cursor-pointer transition-all"
                    onClick={() => navigate('/addprofile')}
                >
                    <IoMdAddCircle className="text-8xl mb-2" />
                    <span className="text-lg font-semibold">Adicionar</span>
                </div>
            </div>
        </div>
    );
}