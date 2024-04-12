import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    // pega o valor da query (q) passado na url 
    const query = searchParams.get("q"); 


    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {        
        //chama os filmes de search conforme a api e a query passada na url
        const searchWhithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        console.log(searchWhithQueryURL);
        getSearchMovies(searchWhithQueryURL);
    }, [query])

    return(
        <div className="container">
            <h2 className="title">Resultados para: <span className='query-text'>{query}</span>
            </h2>
                <div className="movies-container">
                    {movies.length === 0 && <p>Carregando...</p>}
                    {movies.length > 0 && movies.map((movie) =>        
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
        </div>
    );
};

export default Search;