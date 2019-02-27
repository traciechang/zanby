import React from "react";

const SPECIES = {
    0: "Boa constrictor constrictor",
    1: "Python brongersmai",
    2: "Python curtus"
};

const SEX = {
    0: "Male",
    1: "Female"
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    displaySex = () => {
        const sex = Object.keys(SEX).map(key => (
            <option value={SEX[key]} key={key}>{SEX[key]}</option>
        ))

        return (
            <select>
                <option value="" selected>All</option>
                {sex}
            </select>
        )
    }

    displaySpecies = () => {
        const species = Object.keys(SPECIES).map(key => (
            <option value={SPECIES[key]} key={key}>{SPECIES[key]}</option>
        ))

        return (
            <select>
                <option value="" selected>All</option>
                {species}
            </select>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div class="search-form">
                <form class="text-light">
                    <label>ID</label>
                    <input />

                    <label>Name</label>
                    <input />

                    <label>Species</label>
                    {this.displaySpecies()}

                    <label>Sex</label>
                    {this.displaySex()}

                    <label>Year</label>
                </form>
            </div>
        )
    }
}

export default SearchForm;