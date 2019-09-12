import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Godfather',
            id: 1
        },
        {
            name: 'Forest Gump',
            id: 2
        },
        {
            name: 'Inception',
            id: 3
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
} 