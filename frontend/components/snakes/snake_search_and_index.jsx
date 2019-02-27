import React from "react";
import SearchFormContainer from "../search/search_form_container";
import SnakeIndex from "./snake_index"


class SnakeSearchAndIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCurrentUser();
        this.props.fetchSnakes();
    }

    render() {
        return (
            <div class="snake-search-and-index">
                <SearchFormContainer/>
                <SnakeIndex snakes={this.props.snakes}/>
            </div>
              
        )
    }
}


export default SnakeSearchAndIndex;