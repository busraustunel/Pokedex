import {PokemonCard} from "../../components/PokemonCard/PokemonCard";
import {SearchBox} from "../../components/SearchBox/SearchBox";
import {useStyles} from "./style";


export function HomeScreen () {
    const classes = useStyles();
    return (
        <div class={classes.root} >
            <SearchBox />
            <PokemonCard />
        </div>
    );
}
