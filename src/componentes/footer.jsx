import React from 'react';
import { MdOutlinePlace } from "react-icons/md";

export default function Footer() {
    return (
        <footer className=" bottom-0 left-0 w-full text-white text-center py-6 px-4 border-t border-gray-800">
            {/* Nome do serviço e localização */}
            <div className="mb-4">
                <h1 className="text-4xl text-[#84A600]" style={{ fontFamily: "'ShrekFont', sans-serif" }}>
                    Shrek<span style={{ fontFamily: "Poppins" }}>+</span>
                </h1>

                <p className="mt-3 flex items-center justify-center text-gray-400">
                    <MdOutlinePlace className="inline-block mr-2 text-[#84A600]" />
                    <span>Tão Tão Distante</span>
                </p>
            </div>

            {/* Seleção de localizações */}
            <div className="mb-6">
                <label htmlFor="locations" className="text-gray-400 block mb-2">Escolha seu reino:</label>
                <select id="locations" className="bg-black text-white border border-gray-400 rounded-md px-3 py-2 cursor-pointer">
                    <option value="tana_longa_distancia">Tão Tão Distante</option>
                    <option value="pantano">Pântano</option>
                    <option value="castelo_dragao">Castelo da Dragão</option>
                    <option value="floresta_encantada">Floresta Encantada</option>
                    <option value="casa_biscoito">Casa do Biscoito</option>
                    <option value="bar_da_maca">Bar da Maçã Envenenada</option>
                    <option value="esconderijo_gnimrach">Esconderijo do Gnimrach</option>
                </select>
            </div>

            {/* Links úteis */}
            <div className="mb-6">
                <a href="#" className="text-gray-400 hover:text-[#84A600] transition-colors duration-200 mx-2">Termos de Uso</a> |
                <a href="#" className="text-gray-400 hover:text-[#84A600] transition-colors duration-200 mx-2">Política de Privacidade</a> |
                <a href="#" className="text-gray-400 hover:text-[#84A600] transition-colors duration-200 mx-2">Ajuda</a>
            </div>

            {/* Direitos autorais */}
            <p className="text-gray-400">&copy; {new Date().getFullYear()} <span className="text-[#84A600]" style={{ fontFamily: "'ShrekFont', sans-serif" }}>Shrek</span>+ . Todos os pântanos reservados.</p>
        </footer>
    );
}
