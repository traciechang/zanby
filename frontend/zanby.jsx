import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";
import SnakeIndex from "./components/snakes/snake_index";

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();

    
    ReactDOM.render(<SnakeIndex/>, document.getElementById('root'));
    // ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});