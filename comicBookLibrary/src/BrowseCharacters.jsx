import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const BrowseCharacters = () => {
    const publicKey = "cd1f3cea10689ef6a9cdb6be5d474701";
    const md5Hash = "b4e9b90e7891248759965be01c080bf8";
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${md5Hash}`;
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await axios.get(url);
            setCharacters(response.data.data.results);
        } catch (error) {
            console.log("Error fetching characters:", error)
        }
    }
    return (
        <div>
            <h2>Browse Characters</h2>
        <div class="character-list">
            {characters.map((character) => (
            <div className="character-display" key={character.id} onClick={() => navigate(`/character-details/${character.id}`)}>
                    <h4 className="header">{character.name}</h4>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="character-image"/>
            </div>
            ))}
        </div>
        </div>
    )
}

export default BrowseCharacters;