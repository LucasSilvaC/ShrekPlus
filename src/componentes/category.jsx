import React from 'react';

export default function Category() {
    const categorias = [
        'Arthur', 'Burro', 'Biscoito', 'Encantado', 'Farquaad',
        'Fiona', 'Gato de botas', 'Pinoquio', 'Shrek'
    ];

    return (
        <section className="w-full border-b border-gray-800 bg-black">
            <ul className="flex justify-between text-white px-20 py-4 text-lg">
                {categorias.map((cat, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:text-[#84A600] ${
                            cat === 'Shrek' ? 'font-bold text-[#84A600]' : ''
                        }`}
                        style={cat === 'Shrek' ? { fontFamily: "'ShrekFont', sans-serif" } : {}}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </section>
    );
}