import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import { registerReducer } from "./RegisterReducer";
import { usersReducers } from "./usersReducer";

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer,
    login: loginReducer,
    register: registerReducer,
    user: usersReducers
});

export default RootReducer;