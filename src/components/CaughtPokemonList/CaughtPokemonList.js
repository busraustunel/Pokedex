import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { releasePokemon } from "../../redux/actions/caughtActions";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { useStyles } from "./style";

export function CaughtPokemonList() {
    const dispatch = useDispatch();

    const [caughtList, setCaughtList] = useState(useSelector((state) => state.caught.caughtList));
    const classes = useStyles();

    const handleRelease = (pokemon, index) => {
        const updatedCaughtList = caughtList.filter((poke) => poke.name !== pokemon.name);
        setCaughtList(updatedCaughtList);
        dispatch(releasePokemon(pokemon));
    };

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={3} justifyContent="center">
                {caughtList.map((pokemon, index) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <div className={classes.mediaContainer}>
                                <CardMedia
                                    className={classes.media}
                                    image={pokemon.sprites?.other.dream_world.front_default || ''}
                                    title={pokemon.name}
                                />
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    {pokemon.name}
                                </Typography>
                                <div className={classes.buttonContainer}>
                                    <Button
                                        className={classes.catchButton}
                                        onClick={() => handleRelease(pokemon)}
                                    >
                                        Release
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

