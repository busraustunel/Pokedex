import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/pokemonActions";
import { Card, CardContent, CardMedia, CircularProgress, Typography, Grid, Button } from "@mui/material";
import { useStyles } from "./style";

// TO DO: stiller ayrılacak.
export function PokemonCard() {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state) => state.pokemon);
    const classes = useStyles();
    const [visibleCards, setVisibleCards] = useState(12);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    const handleLoadMore = () => {
        setVisibleCards(visibleCards + 12);
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
                {pokemonList.slice(0, visibleCards).map((pokemon) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={pokemon.sprites?.other.dream_world.front_default || ""} title={pokemon.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pokemon.name}
                                </Typography>
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
