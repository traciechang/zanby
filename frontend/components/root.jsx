import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import { SnakeIndex } from "./snakes/snake_index";

const Root = ({ store }) => (
    <Provider store={store}>
        <SnakeIndex />
        {/* <HashRouter>
            <Switch>
                <Route path="/" c/>
            </Switch>
        </HashRouter> */}
    </Provider>
);

export default Root;