import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    const removeNameHandler = (id) => {
        setMovies(movies.filter((name) => name.id !== id))
    }

    return (
        <div>
            <ul className="namelist">
                {movies.map((name) => (
                    <li key={name.id} className="name">
                        {name.name}
                        <a href="#" onClick={() => removeNameHandler(name.id)}>X</a>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default MovieList;

