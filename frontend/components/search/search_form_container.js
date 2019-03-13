import { connect } from "react-redux";
import SearchForm from "./search_form";
import { fetchSnakes } from "../../actions/snake_actions";

const mapDispatchToProps = dispatch => ({
    fetchSnakes: (snakes) => dispatch(fetchSnakes(snakes))
});

export default connect(
    null,
    mapDispatchToProps
)(SearchForm);