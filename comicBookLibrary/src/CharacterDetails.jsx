import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
 
const CharacterDetails = () => {
    const publicKey = "cd1f3cea10689ef6a9cdb6be5d474701";
    const md5Hash = "b4e9b90e7891248759965be01c080bf8";
    const [characterDetails, setCharacterDetails] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=${md5Hash}`;

    useEffect(() => {
        if(id) {
            fetchCharacterDetails();
        }
    }, [id]);

    const fetchCharacterDetails = async () => {
        try {
            const response = await axios.get(url);
            setCharacterDetails(response.data.data.results[0]);
        } catch (error) {
            console.log("Error fetching character details:", error)
            setError(error.toString());
        }
    }


    return (
        <div class="page-body">
            <h3>{characterDetails.name}'s Details</h3>
            <p className="element">{characterDetails.description || "No description available."}</p>
            <h4 className="element">Associated Comics:</h4>
            <ul>
                {characterDetails.comics ? characterDetails.comics.items.map((comic, index) => (
                    <li className="element" key={index}>{comic.name}</li>)) : "Oops, no comics"}
            </ul>
        </div>
    )
}

export default CharacterDetails;