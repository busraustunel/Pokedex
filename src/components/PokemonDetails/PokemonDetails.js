import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../../redux/actions/pokemonActions";
import { CircularProgress, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function PokemonDetails() {
    const dispatch = useDispatch();
    const { pokemonDetails, loading, error } = useSelector(
        (state) => state.pokemon
    );
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPokemonDetails(id));
    }, [dispatch, id]);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!pokemonDetails) {
        return null;
    }

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                {pokemonDetails.name}
            </Typography>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={pokemonDetails.sprites?.other.dream_world.front_default || ""}
                    alt={pokemonDetails.name}
                />
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Abilities:
                    </Typography>
                    <ul>
                        {pokemonDetails.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <Typography variant="h4" gutterBottom>
                        Moves:
                    </Typography>
                    <ul>
                        {pokemonDetails.moves.map((move, index) => (
                            <li key={index}>{move.move.name}</li>
                        ))}
                    </ul>
                    <Button variant="contained" color="primary" onClick={handleGoBack}>
                        Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
