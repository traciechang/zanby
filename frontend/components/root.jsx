import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import SnakeIndex from "./snakes/snake_index";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <Switch> */}
                {/* <Route path="/" c/> */}
                <SnakeIndex />
            {/* </Switch> */}
        </HashRouter>
    </Provider>
);

// class Root extends React.Component {
//     constructor(store) {
//         this.store = store
//     }
// }

export default Root;