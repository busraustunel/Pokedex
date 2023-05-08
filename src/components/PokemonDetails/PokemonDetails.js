import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../../redux/actions/pokemonActions";
import { CircularProgress, Typography } from "@mui/material";
import { useStyles } from "./style";

export function PokemonDetails(props) {
    const { pokemonId } = props.match.params;
    const dispatch = useDispatch();
    const { pokemonDetails, loading, error } = useSelector((state) => state.pokemon);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchPokemonDetails(pokemonId));
    }, [dispatch, pokemonId]);

    return (
        <div style={{ padding: "20px" }}>
            {loading && (
                <div className={classes.loaderContainer}>
                    <CircularProgress />
                </div>
            )}
            {error && <p>{error}</p>}
            {pokemonDetails && (
                <Typography gutterBottom variant="h5" component="h2">
                    {pokemonDetails.name}
                </Typography>
            )}
        </div>
    );
}
