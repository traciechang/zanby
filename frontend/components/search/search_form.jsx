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
            id: undefined,
            name: undefined,
            year: undefined,
            sex: undefined,
            species: undefined
        }
    }

    // componentDidUpdate = () => {
    //     console.log("in componentDidUpdate")
    //     console.log(this.state)
    // }

    clearSearch = (e) => {
        e.preventDefault();
        this.props.fetchSnakes().then(this.setState({
            id: undefined,
            name: undefined,
            year: undefined,
            sex: undefined,
            species: undefined
        }));
    }

    displaySex = () => {
        const sex = Object.keys(SEX).map(key => (
            <option value={SEX[key]} key={key}>{SEX[key]}</option>
        ))

        return (
            <select onChange={this.update("sex")} value={this.state.sex || ""} class="browser-default custom-select col-lg-1">
                <option value="" selected>Sex (All)</option>
                {sex}
            </select>
        )
    }

    displaySpecies = () => {
        const species = Object.keys(SPECIES).map(key => (
            <option value={SPECIES[key]} key={key}>{SPECIES[key]}</option>
        ))

        return (
            <select onChange={this.update("species")} value={this.state.species} class="browser-default custom-select col-lg-2">
                <option value="" selected>Species (All)</option>
                {species}
            </select>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("in handleSubmit")
        console.log(this.state)
        this.props.fetchSnakes(this.state);
    }

    render() {
        return (
            <div class="">
                <form class="search-form row justify-content-between" onSubmit={this.handleSubmit}>
                    <div class="col-lg-1.5 text-light search-form-title">Manager</div>
                    
                    <form class="form-inline md-form form-sm mt-0 col-lg-2">
                        <i class="fas fa-search text-light" aria-hidden="true"></i>
                        <input onChange={this.update("id")} value={this.state.id || ""} class="form-control form-control-sm ml-1 w-75" type="text" placeholder="ID" aria-label="Search"/>
                    </form>

                    <form class="form-inline md-form form-sm mt-0 col-lg-2">
                        <i class="fas fa-search text-light" aria-hidden="true"></i>
                        <input onChange={this.update("name")} value={this.state.name || ""} class="form-control form-control-sm ml-1 w-75" type="text" placeholder="Name" aria-label="Search"/>
                    </form>

                    <form class="form-inline md-form form-sm mt-0 col-lg-1.5">
                        <i class="fas fa-search text-light" aria-hidden="true"></i>
                        <input onChange={this.update("year")} value={this.state.year || ""} type="number" maxLength="4" class="form-control form-control-sm ml-1 w-50" placeholder="Year" aria-label="Search"/>
                    </form>

                    {this.displaySpecies()}

                    {this.displaySex()}

                    <div class="search-and-reset col-lg-1">
                        <button onClick={this.handleSubmit}>Search</button>
                        <a class="text-light" onClick={this.clearSearch}>Reset</a>
                    </div>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: e.target.value})
    };
}

export default SearchForm;