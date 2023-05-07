import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { CaughtPokemonScreen } from '../screens/CaughtPokemonScreen/CaughtPokemonScreen';
import {Navbar} from "../components/Navbar/Navbar";

export function Navigation() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/caught-pokemon" element={<CaughtPokemonScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
