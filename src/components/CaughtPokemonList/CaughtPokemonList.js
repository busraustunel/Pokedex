import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { releasePokemon } from "../../redux/actions/caughtActions";
import { Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { useStyles } from "./style";
import Typography from "@mui/material/Typography";


export function CaughtPokemonList() {
    const dispatch = useDispatch();
    const { caughtList } = useSelector((state) => state.caught);
    const classes = useStyles();

    const handleRelease = (pokemon) => {
        dispatch(releasePokemon(pokemon));
    };

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={3} justifyContent="center">
                {caughtList.map((pokemon) => (
                    <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={pokemon.sprites?.other.dream_world.front_default || ""} title={pokemon.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pokemon.name}
                                </Typography>
                                <Button variant="contained" onClick={() => handleRelease(pokemon)}>
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



