import {connect} from "react-redux";
import App from "./App";
import {setTheme} from "./actions";


function mapStateToProps(state) {
  return {
    theme: state.theme,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTheme: (theme) => {
      dispatch(setTheme(theme));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);