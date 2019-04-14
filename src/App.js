import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      userDetails: null
    };
  }

  onLoginHandler = userDetails => {
    console.log("UD", userDetails);
    this.setState({ userDetails: userDetails, isLoggedIn: true });
  };

  onLogoutHandler = () => {
    this.setState({ isLoggedIn: false, userDetails: null });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header
            isLoggedIn={this.state.isLoggedIn}
            userDetails={this.state.userDetails}
            onLogout={this.onLogoutHandler}
          />
          <PageContent />
        </div>
      </Provider>
    );
  }
}

export default App;
