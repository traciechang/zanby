import React from "react";
import SnakeIndexDetail from "./snake_index_detail";

class SnakeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    displayAllSnakes = () => {
        const { snakes } = this.props;

        return Object.keys(snakes).map(key => {
            return (
                <li key={key}><SnakeIndexDetail snake={snakes[key]}/></li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Id</li>
                    <li>Name</li>
                    <li>Species</li>
                    <li>Sex</li>
                    <li>DOB</li>
                </ul>
                <ul>{this.displayAllSnakes()}</ul>
            </div>
        )
    }
}

export default SnakeIndex;