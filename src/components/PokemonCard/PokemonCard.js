import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/pokemonActions";
import {Card, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "20px",
    },
    media: {
        height: 140,
    },
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
    },
});

export default function PokemonCard() {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const loading = useSelector((state) => state.pokemon.loading);
    const error = useSelector((state) => state.pokemon.error);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    return (
        <div>
            <h1>Pokemon List</h1>
            {loading && (
                <div className={classes.loaderContainer}>
                    <CircularProgress />
                </div>
            )}
            {error && <p>{error}</p>}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {pokemonList.map((pokemon) => (
                    <Card key={pokemon.id} className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={pokemon.sprites && pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : ""}
                            title={pokemon.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {pokemon.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
