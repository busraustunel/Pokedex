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
        const updatedCaughtList = [...caughtList];
        updatedCaughtList.splice(index, 1);
        setCaughtList(updatedCaughtList);
        dispatch(releasePokemon(pokemon));
        console.log(pokemon.name + " released");
    };

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={3} justifyContent="center">
                {caughtList.map((pokemon, index) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={pokemon.sprites?.other.dream_world.front_default || ""} title={pokemon.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pokemon.name}
                                </Typography>
                                <Button variant="contained" onClick={() => handleRelease(pokemon, index)}>
                                    Release
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
