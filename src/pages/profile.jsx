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
    let navigate = useNavigate();

    return (
        <div>
            <h1 className="text-4xl text-[#84A600] mt-5 absolute ml-5" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                Shrek<span style={{ fontFamily: "Poppins" }}>+</span>
            </h1>
            <section className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-amber-50">
                <h1 className="text-6xl mb-15 font-bold">Quem está assistindo?</h1>

                <div className="flex gap-8 flex-wrap justify-center cursor-pointer ">
                    {perfis.map((perfil, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={perfil.imagem}
                                alt={perfil.nome}
                                className="w-40 h-35 rounded-md border-2 border-transparent hover:border-[#84A600] transition"
                                onClick={() => navigate('/home')}
                            />
                            <span className="mt-4 text-2xl">{perfil.nome}</span>
                        </div>
                    ))}
                <IoMdAddCircle 
                className="text-9xl mt-3 hover:text-[#84A600]"
                onClick={() => navigate('/addprofile')}
                />
                </div>
            </section>
        </div>
    );
}
