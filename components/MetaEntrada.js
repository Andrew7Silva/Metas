import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function MetaEntrada(props) {
  const [enteredTextMeta, setEnteredTextMeta] = useState("");

  function metaEntradaHandler(enteredText) {
    setEnteredTextMeta(enteredText);
  }

  function metaAddHandler() {
    props.onMetaAdd(enteredTextMeta);
    setEnteredTextMeta("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Metas do seu curso!"
        onChangeText={metaEntradaHandler}
        value={enteredTextMeta}
      />
      <Button title="Add Meta" onPress={metaAddHandler} />
    </View>
  );
}

export default MetaEntrada;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
