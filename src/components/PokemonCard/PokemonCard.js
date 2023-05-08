import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/pokemonActions";
import { Card, CardContent, CardMedia, CircularProgress, Typography, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import {addFavorite, catchPokemon, releasePokemon} from "../../redux/actions/caughtActions";

export function PokemonCard() {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state) => state.pokemon);
    const classes = useStyles();
    const [visibleCards, setVisibleCards] = useState(12);
    const [caughtList, setCaughtList] = useState(Array(pokemonList.length).fill(false));

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    const updatedPokemonList = pokemonList.map((pokemon) => ({
        ...pokemon,
        favorite: false
    }));

    const handleCatch = (pokemon, index) => {
        const updatedCaughtList = [...caughtList];
        updatedCaughtList[index] = true;
        setCaughtList(updatedCaughtList);
        dispatch(catchPokemon(pokemon));
        console.log(pokemon.name + " caught");
    };

    const handleLoadMore = () => {
        setVisibleCards(visibleCards + 12);
    };

    const handleRelease = (pokemon, index) => {
        const updatedCaughtList = [...caughtList];
        updatedCaughtList[index] = false;
        setCaughtList(updatedCaughtList);
        dispatch(releasePokemon(pokemon));
        console.log(pokemon.name + " released");
    };

    const handleAddFavorite = (pokemon) => {
        dispatch(addFavorite(pokemon));
        console.log(pokemon.name);
    };

    return (
        <div style={{ padding: "20px" }}>
            {loading && (
                <div className={classes.loaderContainer}>
                    <CircularProgress />
                </div>
            )}
            {error && <p>{error}</p>}
            <Grid container spacing={3} justifyContent="center">
                {updatedPokemonList.slice(0, visibleCards).map((pokemon, index) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={pokemon.sprites?.other.dream_world.front_default || ""} title={pokemon.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pokemon.name}
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => caughtList[index] ? handleRelease(pokemon, index) : handleCatch(pokemon, index)}
                                >
                                    {caughtList[index] ? "Release" : "Catch"}
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {visibleCards < pokemonList.length && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <Button variant="contained" color="inherit" onClick={handleLoadMore}>
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );

}
