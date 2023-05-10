import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {useStyles} from "./style";



export function Navbar() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" component="div" className={classes.title}>
                        POKEDEX
                    </Typography>
                    <Button color="inherit" component={Link} to="/" className={classes.navButton}>
                        POKEMON LIST
                    </Button>
                    <Button color="inherit" component={Link} to="/caught-pokemon" className={classes.navButton}>
                        CAUGHT POKEMON
                    </Button>
                    <Button color="inherit" component={Link} to="/favorite-pokemons" className={classes.navButton}>
                        FAVORITE POKEMONS
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
