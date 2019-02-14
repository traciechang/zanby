import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
// import SnakeIndex from "./snakes/snake_index";
// import SnakeSearchAndIndex from "./snakes/snake_search_and_index"
import SnakeSearchAndIndexContainer from "./snakes/snake_search_and_index_container";

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                {/* <SnakeSearchAndIndex/> */}
                <SnakeSearchAndIndexContainer/>
            </Switch>
        </HashRouter>
    </Provider>
)

// class Root extends React.Component {
//     constructor(store) {
//         super(store)
//     }

//     render() {
//         return (
//             <Provider store={this.store}>
//                 <HashRouter>
//                     <Switch>
//                         <SnakeIndex />
//                     </Switch>
//                 </HashRouter>
//             </Provider>
//         )
//     }
// }

export default Root;