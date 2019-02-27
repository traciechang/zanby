import React from "react";

class SnakeIndexDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    displayBirthYear() {
        let year = this.props.snake.date_of_birth
        return year.substr(0,4)
    }

    render() {
        const { snake } = this.props;

        return (
            <div class="snake-index-detail">
                <ul class="row justify-content-between">
                    <li class="col-lg-2">{snake.custom_id}</li>
                    <li class="col-lg-2">{snake.name}</li>
                    <li class="col-lg-2">{snake.species}</li>
                    <li class="col-lg-2">{snake.sex}</li>
                    <li class="col-lg-2">{this.displayBirthYear()}</li>
                </ul>
            </div>
        )
    }
}

export default SnakeIndexDetail;