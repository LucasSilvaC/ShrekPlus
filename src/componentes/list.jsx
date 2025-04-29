import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

export default function List({ IsPage }) {
    const [movies, setMovies] = useState([]);
    const API_URL = 'https://api.themoviedb.org/3';
    const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

    useEffect(() => {
        if(IsPage==true){
        axios
            .get(`${API_URL}/movie/now_playing?api_key=${API_key}&language=pt-BR&region=BR`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log("Erro:", error);
            });
            console.log("Ai pretu")
        }else{
            axios
            .get(`${API_URL}/search/movie?api_key=${API_key}&query=shrek&language=pt-BR`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log("Erro:", error);
            });
            console.log("Que delicia")
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20 text-white text-left mb-20">
                <h1 className="text-white text-4xl font-bold self-start ml-10">Em cartaz...</h1>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {movies
                        .slice(0, 5) 
                        .map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>


            <div className="flex flex-col items-center justify-center mt-20 text-white text-left mb-20">
                <h1 className="text-white text-4xl font-bold self-start ml-10">Assista agora</h1>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {movies.slice(5, 15).map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
}
