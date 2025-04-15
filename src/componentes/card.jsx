import React, { useState } from 'react';
import Modal from './modal.jsx'; 

export default function Card({ movie }) {
    const [showModal, setShowModal] = useState(false);

    if (!movie || !movie.poster_path) return null;

    return (
        <>
            <section
                className="relative w-80 h-[30rem] transition-all duration-500 rounded-sm shadow-xl overflow-hidden text-amber-50"
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setShowModal(true)}
                />
            </section>

            {showModal && (
                <Modal movie={movie} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}