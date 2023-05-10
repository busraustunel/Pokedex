import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, CardMedia, CircularProgress, Typography, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import {addFavorite, catchPokemon, releasePokemon, removeFavorite} from "../../redux/actions/caughtActions";
import {Link} from "react-router-dom";
import {fetchPokemon} from "../../redux/actions/pokemonActions";

export function PokemonCard() {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state) => state.pokemon);
    const classes = useStyles();
    const [visibleCards, setVisibleCards] = useState(12);
    const [caughtList, setCaughtList] = useState(Array(pokemonList.length).fill(false));
    const [favoriteList, setFavoriteList] = useState(Array(pokemonList.length).fill(false));




    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    const updatedPokemonList = pokemonList.map((pokemon) => ({
        ...pokemon,
        favorite: false
    }));

    const handleLoadMore = () => {
        setVisibleCards(visibleCards + 12);
    };

    const handleCatch = (pokemon, index) => {
        if (!caughtList[index]) {
            const updatedCaughtList = [...caughtList];
            updatedCaughtList[index] = true;
            setCaughtList(updatedCaughtList);
            dispatch(catchPokemon(pokemon));
            console.log(pokemon.name + " caught");
        }
    };

    const handleRelease = (pokemon, index) => {
        if (caughtList[index]) {
            const updatedCaughtList = [...caughtList];
            updatedCaughtList[index] = false;
            setCaughtList(updatedCaughtList);
            dispatch(releasePokemon(pokemon));
            dispatch(releasePokemon(caughtList));
            console.log(pokemon.name + " released");
        }
    };

    const handleAddFavorite = (pokemon, index) => {
        const updatedFavoriteList = [...favoriteList];
        updatedFavoriteList[index] = true;
        setFavoriteList(updatedFavoriteList);
        dispatch(addFavorite(pokemon));
        console.log(pokemon.name + " added to favorites");
    };

    const handleDeleteFavorite = (pokemon, index) => {
        const updatedFavoriteList = [...favoriteList];
        updatedFavoriteList[index] = false;
        setFavoriteList(updatedFavoriteList);
        dispatch(removeFavorite(pokemon.id));
        console.log(pokemon.name + " removed from favorites");
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
                                    <Button variant="contained" onClick={() => (caughtList[index] ? handleRelease(pokemon, index) : handleCatch(pokemon, index))}>
                                        {caughtList[index] ? "Release" : "Catch"

                                        }
                                    </Button>
                                    <Button variant="inherit" onClick={() => (favoriteList[index] ? handleDeleteFavorite(pokemon, index) : handleAddFavorite(pokemon, index))}>
                                        {favoriteList[index] ? "Delete Favorite" : "Add Favorite"}
                                    </Button>
                                    <Button variant="inherit" component={Link} to={`/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]}`}>
                                        Go to Details
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
