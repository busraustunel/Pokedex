import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



export function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        POKEDEX
                    </Typography>
                    <Button color="inherit" component={Link} to="/">POKEMON LIST</Button>
                    <Button  color="inherit" component={Link} to="caught-pokemon">CAUGHT POKEMON</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
