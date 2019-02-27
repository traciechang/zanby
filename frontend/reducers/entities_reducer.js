import { combineReducers } from "redux";
import snakesReducer from "./snakes_reducer";

export const entitiesReducer = combineReducers({
    snakes: snakesReducer
})