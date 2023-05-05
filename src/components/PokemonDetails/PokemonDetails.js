import { useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonDetails = ({ name }) => {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(response.data);
            } catch (error) {
                setError(error.message);
            }
            };
        fetchData();
    }, [name]);

    if (error) return <p>{error}</p>;
    if (!pokemon) return <p>Loading...</p>;

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
};


