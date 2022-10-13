import React, { Component, Fragment } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import './sass/style.css';
import 'alertifyjs/build/css/alertify.min.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRouter />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
