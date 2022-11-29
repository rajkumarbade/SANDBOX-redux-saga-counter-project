import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

export default App;
