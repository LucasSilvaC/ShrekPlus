import React, { useState } from 'react';

export default function Card({ movie }) {
    const [showDetails, setShowDetails] = useState(false);

    if (!movie || !movie.poster_path) return null;

    const handleImageClick = () => {
        setShowDetails(true);
    };

    const handleTextClick = () => {
        setShowDetails(false);
    };

    return (
        <section
            className={`relative overflow-hidden transition-all duration-500 rounded-sm text-center ${showDetails ? 'w-[32rem]' : 'w-80'
                } h-[30rem]`}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="cursor-pointer transition-transform hover:scale-105 duration-300 w-full h-full object-cover"
                onClick={handleImageClick}
                alt={movie.title}
            />

            <div
                className={`absolute inset-0 bg-black/80 p-4 flex flex-col items-center justify-center text-sm text-gray-200 transition-opacity duration-500 ${showDetails ? 'opacity-60' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex justify-center items-center gap-2 mb-3 cursor-pointer"
                    onClick={handleTextClick}>
                    <span>{movie.title || 'Gênero'}</span>
                    <span>•</span>
                    <span>{(movie.release_date).slice(0, 4) || 'Ano'}</span> {/* Slice para exibir apenas os 4 últimos (só o ano) */}
                </div>
                <p className="text-center cursor-pointer" onClick={handleTextClick}>
                    {movie.overview}
                </p>
            </div>
        </section>
    );
}