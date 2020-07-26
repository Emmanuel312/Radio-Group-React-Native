import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioGroup, { RadioButton } from "./src/components/RadioGroup";

export default function App() {
  function handleSelect(id: number) {
    console.log(id);
  }

  return (
    <View style={styles.container}>
      <RadioGroup onChangeSelect={handleSelect}>
        <RadioButton id={0} text="opcao1"></RadioButton>
        <RadioButton id={1} text="opcao2"></RadioButton>
        <RadioButton id={2} text="opcao3"></RadioButton>
      </RadioGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
