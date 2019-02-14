import { RECEIVE_SNAKES } from "../actions/snake_actions";

const snakesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SNAKES:
            return action.snakes;
        default:
            return state;
    }
}

export default snakesReducer;