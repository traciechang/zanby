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
            <select class="browser-default custom-select col-lg-1">
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
            <select class="browser-default custom-select col-lg-2">
                <option value="" selected>Species (All)</option>
                {species}
            </select>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div class="search-form row justify-content-between">
            {/* <div class="search-form-top row justify-content-between"> */}
                <div class="col-lg-1.5 text-light search-form-title">Manager</div>
                
                <form class="form-inline md-form form-sm mt-0 col-lg-2">
                    <i class="fas fa-search text-light" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-1 w-75" type="text" placeholder="ID" aria-label="Search"/>
                </form>

                <form class="form-inline md-form form-sm mt-0 col-lg-2">
                    <i class="fas fa-search text-light" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-1 w-75" type="text" placeholder="Name" aria-label="Search"/>
                </form>

                <form class="form-inline md-form form-sm mt-0 col-lg-1.5">
                    <i class="fas fa-search text-light" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-1 w-50" type="text" placeholder="Year" aria-label="Search"/>
                </form>

                {this.displaySpecies()}

                {this.displaySex()}

                <div class="search-and-reset col-lg-1">
                    <button>Search</button>
                    <a class="text-light">Reset</a>
                </div>
            {/* </div> */}
            </div>
        )
    }
}

export default SearchForm;