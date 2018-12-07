const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    return state;
}