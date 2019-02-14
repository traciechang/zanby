import * as SnakeAPIUtil from "../util/snake_api_util";

export const RECEIVE_SNAKES = "RECEIVE_SNAKES";

export const receiveSnakes = snakes => ({
    type: "RECEIVE_SNAKES",
    snakes
})

export const fetchSnakes = snakes => dispatch => (
    SnakeAPIUtil.fetchSnakes(snakes).then(response => (
        dispatch(receiveSnakes(response))
    ))
);