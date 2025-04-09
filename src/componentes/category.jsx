import React from 'react';

export default function Category() {
    return (
        <section className="h-9 w-auto border-b border-gray-800">
            <ul className="flex text-white justify-between pl-20 pr-20 mt-4">
                <li className="text-white cursor-pointer hover:text-[#84A600]">Arthur</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Burro</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Biscoito</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Encantado</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Farquaad</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Fiona</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Gato de botas</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]">Pinoquio</li>
                <li className="text-white cursor-pointer hover:text-[#84A600]" style={{ fontFamily: "'ShrekFont', sans-serif" }}>Shrek</li>
            </ul>
        </section>
    );
}
