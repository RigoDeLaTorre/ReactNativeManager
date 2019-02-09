import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import firebase from "@firebase/app";
import "@firebase/auth";
import Router from "./Router";

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
        <Router />
      </Provider>
    );
  }
}

export default App;
