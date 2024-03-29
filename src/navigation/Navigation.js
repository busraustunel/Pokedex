import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { CaughtPokemonScreen } from '../screens/CaughtPokemonScreen/CaughtPokemonScreen';
import {Navbar} from "../components/Navbar/Navbar";
import {FavoriteScreen} from "../screens/FavoriteScreen/FavoriteScreen";
import {PokemonDetails} from "../components/PokemonDetails/PokemonDetails";

export function Navigation() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/caught-pokemon" element={<CaughtPokemonScreen />} />
                <Route path="/favorite-pokemons" element={<FavoriteScreen /> } />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
}
