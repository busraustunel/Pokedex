import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite} from "../../redux/actions/caughtActions";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { useStyles } from "./style";

export function FavoritePokemonList() {
    const dispatch = useDispatch();

    const [favoriteList, setFavoriteList] = useState(useSelector((state) => state.caught.favoriteList));
    const classes = useStyles();

    const handleDeleteFavorite = (pokemon, index) => {
        const updatedFavoriteList = favoriteList.filter((poke) => poke.name !== pokemon.name);
        setFavoriteList(updatedFavoriteList);
        dispatch(removeFavorite(pokemon));
    };

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={3} justifyContent="center">
                {favoriteList.map((pokemon, index) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={pokemon.sprites?.other.dream_world.front_default || ""} title={pokemon.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pokemon.name}
                                </Typography>
                                <Button variant="contained" onClick={() => handleDeleteFavorite(pokemon, index)}>
                                    DELETE FAVORİTE
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
