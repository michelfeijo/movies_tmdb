import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaPlay } from "react-icons/fa";
import api from "../resource/api";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatched, setIsWatched] = useState(false);

    const toggleFavorite = () => {
        const updatedIsFavorite = !isFavorite        
        setIsFavorite(updatedIsFavorite);
        const data = {
            movieId: movie.id,
            movieName: movie.title,
            isFavorite: updatedIsFavorite
        };
        sendUpdate(data);       
    };

    const toggleWatched = () => {
        const updatedIsWatched = !isWatched        
        setIsWatched(updatedIsWatched);
        const data = {
            movieId: movie.id,
            movieName: movie.title,
            isWatched: updatedIsWatched
        };
        sendUpdate(data);        
    };

    const sendUpdate = (data) => {
        console.log(data);
        api.patch(`/movies/${data.movieId}`, data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error marking movie as favorite:', error);
            });
    }; 


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {/* Botao Favoritos Material UI */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox {...label} 
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                    checked={isFavorite} 
                    onChange={toggleFavorite} 
                    title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                />
                <Checkbox {...label} 
                    icon={<BookmarkBorderIcon />} 
                    checkedIcon={<BookmarkIcon />} 
                    checked={isWatched} 
                    onChange={toggleWatched} 
                    title={isWatched ? "Marcar como Não Assistido" : "Marcar como Assistido"}
                />
            </div>
{/* Fim do Botao Material UI */}

            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};

export default MovieCard;