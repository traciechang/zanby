import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>Search</div>
        )
    }
}

export default SearchForm;