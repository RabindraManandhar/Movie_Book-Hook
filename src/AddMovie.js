import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState('');



    const changeNameHandler = (e) => {
        setName(e.target.value);
    };



    const addNameHandler = (e) => {
        e.preventDefault();
        if (name === '') return
        setMovies([...movies, { name: name, id: Date.now() }])
        setName('');
    };

    return (
        <form onSubmit={addNameHandler}>
            <input type="text" name="name" value={name} onChange={changeNameHandler} placeholder="Add Movie Name" />

            <button>Submit</button>
        </form>
    )
}

export default AddMovie;