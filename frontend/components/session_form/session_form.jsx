import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Zanby</h1>
                <p>Reptile Husbandy Application</p>

                <p>Login to start using Zanby</p>
                <a href="/auth/google_oauth2">Sign in with Google</a>
            </div>
        )
    }
}