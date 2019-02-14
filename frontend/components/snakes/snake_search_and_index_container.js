import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions/user_actions";
import { fetchSnakes } from "../../actions/snake_actions";
import SnakeSearchAndIndex from "./snake_search_and_index";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    fetchSnakes: () => dispatch(fetchSnakes())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SnakeSearchAndIndex);