import React, { Component } from "react";
import { YellowBox } from "react-native";
import _ from "lodash";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import firebase from "@firebase/app";
import "@firebase/auth";
import Router from "./Router";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    const config = {
      apiKey: "AIzaSyBwJHQG6tGNiZGTRgFvkJ3QK-9OvxcJ5P8",
      authDomain: "manager-d255c.firebaseapp.com",
      databaseURL: "https://manager-d255c.firebaseio.com",
      projectId: "manager-d255c",
      storageBucket: "manager-d255c.appspot.com",
      messagingSenderId: "300377122073"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
