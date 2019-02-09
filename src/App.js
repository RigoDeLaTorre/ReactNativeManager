import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

class App extends Component {
  componentWillMount() {
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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
