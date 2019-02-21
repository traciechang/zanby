import React from "react";

class SnakeIndexDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { snake } = this.props;

        return (
            <div>
                <ul>
                    <li>{snake.custom_id}</li>
                    <li>{snake.name}</li>
                    <li>{snake.species}</li>
                    <li>{snake.sex}</li>
                    <li>{snake.date_of_birth}</li>
                </ul>
            </div>
        )
    }
}

export default SnakeIndexDetail;