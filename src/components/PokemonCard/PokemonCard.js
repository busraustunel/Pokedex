import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/pokemonActions";
import {
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Typography,
    Grid,
    Button,
    TextField,
} from "@mui/material";
import { useStyles } from "./style";
import { addFavorite, catchPokemon, releasePokemon, removeFavorite } from "../../redux/actions/caughtActions";
import { Link } from "react-router-dom";

export function PokemonCard() {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state) => state.pokemon);
    const classes = useStyles();
    const [visibleCards, setVisibleCards] = useState(12);
    const [caughtList, setCaughtList] = useState(useSelector((state) => state.caught.caughtList));
    const [favoriteList, setFavoriteList] = useState(useSelector((state) => state.caught.favoriteList));
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleCatch = (pokemon) => {
        const updatedCaughtList = [...caughtList, pokemon];
        setCaughtList(updatedCaughtList);
        dispatch(catchPokemon(pokemon));
        console.log(pokemon.name + " caught");
    };

    const handleRelease = (pokemon) => {
        const updatedCaughtList = caughtList.filter((poke) => poke.name !== pokemon.name);
        setCaughtList(updatedCaughtList);
        dispatch(releasePokemon(pokemon));
        console.log(pokemon.name + " released");
    };

    const isPokemonCaught = (pokemon) => {
        return caughtList.some((poke) => poke.name === pokemon.name);
    };

    const isPokemonFavorite = (pokemon) => {
        return favoriteList.some((poke) => poke.name === pokemon.name);
    };

    const handleAddFavorite = (pokemon) => {
        const updatedFavoriteList = [...favoriteList, pokemon];
        setFavoriteList(updatedFavoriteList);
        dispatch(addFavorite(pokemon));
        console.log(pokemon.name + " added to favorites");
    };

    const handleDeleteFavorite = (pokemon) => {
        const updatedFavoriteList = favoriteList.filter((poke) => poke.name !== pokemon.name);
        setFavoriteList(updatedFavoriteList);
        dispatch(removeFavorite(pokemon));
        console.log(pokemon.name + " removed from favorites");
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemonList = updatedPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            {loading && (
                <div className={classes.loaderContainer}>
                    <CircularProgress />
                </div>
            )}
            {error && <p>{error}</p>}

            <div className={classes.searchContainer}>
                <TextField
                    className={classes.textField}
                    label="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>

            <Grid container justifyContent="center">
                {filteredPokemonList.slice(0, visibleCards).map((pokemon) => (
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
                                        onClick={() => (isPokemonCaught(pokemon) ? handleRelease(pokemon) : handleCatch(pokemon))}
                                    >
                                        {isPokemonCaught(pokemon) ? 'Release' : 'Catch'}
                                    </Button>
                                    <Button
                                        className={classes.favoriteButton}
                                        onClick={() => (isPokemonFavorite(pokemon) ? handleDeleteFavorite(pokemon) : handleAddFavorite(pokemon))}
                                    >
                                        {isPokemonFavorite(pokemon) ? 'Delete Favorite' : 'Add Favorite'}
                                    </Button>
                                    <Button
                                        classes={classes.detailsButton}
                                        variant="contained"
                                        component={Link}
                                        to={`/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]}`}
                                    >
                                        Go to details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {visibleCards < filteredPokemonList.length && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="inherit" onClick={handleLoadMore}>
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
