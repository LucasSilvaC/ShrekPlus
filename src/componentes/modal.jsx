import React from "react";
import { AiFillLike } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Modal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-10">
            <div className="bg-[#141414] text-white rounded-xl shadow-2xl w-full max-w-4xl relative overflow-hidden">
                <IoMdClose onClick={onClose}
                    className="absolute top-4 right-4 text-white text-2xl cursor-pointer z-10 hover:text-red-400 transition"
                />
                <img
                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-auto max-h-[450px] object-cover"
                />

                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-3">{movie.title}</h2>

                    <p className="text-gray-300 text-sm mb-6 max-h-40 overflow-y-auto">
                        {movie.overview || "Sem descrição disponível."}
                    </p>

                    <div className="border-t border-gray-700 pt-4 text-base text-gray-400">
                        <h3 className="text-white font-semibold mb-2 text-xl">Informações:</h3>
                        <p>
                            <span className="text-white text-lg">Classificação:</span>
                            {movie.adult ? " 18+" : " Livre"}
                        </p>
                        <p><span className="text-white text-lg">Data de lançamento:</span> {movie.release_date.slice(0, 4)}</p>
                        <p className="flex items-center gap-1">
                            <span className="text-white text-lg">Avaliação:</span>
                            <AiFillLike className="text-amber-50" />
                            {movie.vote_average?.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}