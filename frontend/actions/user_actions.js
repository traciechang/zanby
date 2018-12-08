import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
    type: "RECEIVE_CURRENT_USER",
    currentUser
});

export const fetchCurrentUser = () => dispatch => (
    UserAPIUtil.fetchCurrentUser().then(response => {
        dispatch(receiveCurrentUser(response))
    })
);