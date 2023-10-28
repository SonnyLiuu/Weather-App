import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

const counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log("Count changed.");
    return () => {
      console.log("useEffect cleanup");
    };
  }, [count]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Button
        color={"green"}
        title={"Increase the count"}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        color={"red"}
        title={"Decrease the count"}
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Button
        color={"green"}
        title={"Increase the new count"}
        onPress={() => {
          setNewCount(newCount + 1);
        }}
      />
      <Button
        color={"red"}
        title={"Decrease the new count"}
        onPress={() => {
          setNewCount(newCount - 1);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {},
});
export default counter;
