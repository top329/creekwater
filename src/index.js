import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
