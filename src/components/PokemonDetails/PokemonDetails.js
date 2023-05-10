import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokemonDetails } from "../../redux/actions/pokemonActions";
import {
    Card, CardContent, CardMedia,
    CircularProgress,
    Typography,
} from "@mui/material";
import {useStyles} from "./style";


export function PokemonDetails(props) {
    const dispatch = useDispatch();
    const { pokemonDetails = undefined, loading, error } = useSelector(
        (state) => state.pokemon
    );


    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonDetails(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

        return (

            <Card className={classes.container}>
                <CardMedia
                    className={classes.image}
                    image={pokemonDetails?.sprites?.other?.dream_world?.front_default || ''}
                    title={pokemonDetails?.name}
                />

                <CardContent>
                    <Typography variant="h5" component="div">
                        {pokemonDetails.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Height: {pokemonDetails.height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Weight: {pokemonDetails.weight}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Abilities:
                        {pokemonDetails.abilities.map((ability) => (
                            <div className={classes.abilityCard}>
                                {ability.ability.name}
                            </div>
                        ))}
                    </Typography>
                </CardContent>
            </Card>

        );

}
