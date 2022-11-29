import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  incrementFn,
  decrementFn,
  incrementByValueFn,
  resetHandler
} from "./store/actions";

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementFn()),
    decrement: () => dispatch(decrementFn()),
    incrementByValue: () => dispatch(incrementByValueFn()),
    resetCounter: () => dispatch(resetHandler())
  };
};

const Counter = (props) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.text}>COUNTER</Text>
      <View style={styles.container}>
        <Button title="+" onPress={props.increment} />
        <Text style={styles.text}>{props.count}</Text>
        <Button title="-" onPress={props.decrement} />
      </View>
      <View style={styles.buttonSet}>
        <Button
          title="Increment by Prev Num"
          onPress={props.incrementByValue}
        />
        <Button title="Reset Counter" onPress={props.resetCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: 150,
    alignItems: "center"
  },
  text: {
    fontSize: 20
  },
  container: {
    flexDirection: "row",
    margin: 50,
    gap: 20,
    alignItems: "center"
  },
  buttonSet: {
    flexDirection: "column",
    gap: 30
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
