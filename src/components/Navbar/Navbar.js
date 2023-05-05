import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {SearchBox} from "../SearchBox/SearchBox";

export function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        POKEDEX
                    </Typography>
                    <Button color="inherit">POKEMON LIST</Button>
                    <Button color="inherit">CAUGHT POKEMON</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
