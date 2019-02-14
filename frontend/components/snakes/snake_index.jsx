import React from "react";

class SnakeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // displayAllSnakes = () => {

    // }

    render() {
        return (
            <div>
                <ul>
                    <li>Id</li>
                    <li>Name</li>
                    <li>Species</li>
                    <li>Common Name</li>
                </ul>
                <ul>
                    <li>1</li>
                    <li>Valak</li>
                    <li>Boa Constrictor Constrictor</li>
                    <li>Red-Tailed Boa Constrictor</li>
                </ul>
            </div>
        )
    }
}

export default SnakeIndex;