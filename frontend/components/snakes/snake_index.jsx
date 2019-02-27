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
            <div class="snake-index">
                <ul class="row snake-index-headers justify-content-between">
                    <li class="col-lg-2">Id</li>
                    <li class="col-lg-2">Name</li>
                    <li class="col-lg-2">Species</li>
                    <li class="col-lg-2">Sex</li>
                    <li class="col-lg-2">DOB</li>
                </ul>
                <ul class="snake-index-list">{this.displayAllSnakes()}</ul>
            </div>
        )
    }
}

export default SnakeIndex;