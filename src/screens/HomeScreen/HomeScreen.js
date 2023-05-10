import {PokemonCard} from "../../components/PokemonCard/PokemonCard";
import {useStyles} from "./style";


export function HomeScreen () {
    const classes = useStyles();
    return (
        <div class={classes.root} >
            <PokemonCard />
        </div>
    );
}
