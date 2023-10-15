import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Pressable,
  Text,
  Image,
} from "react-native";
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
    <Modal visible={props.mostrarModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Metas do seu curso!"
          selectionColor={'#311b6b'}
          onChangeText={metaEntradaHandler}
          value={enteredTextMeta}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonConf} backgroundColor={"#f31282"}>
            <Pressable
              android_ripple={{ color: "#210644" }}
              onPress={props.onCancel}
              style={({ pressed }) => pressed && styles.pressItem}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
          <View style={styles.buttonConf} backgroundColor={"#5e0acc"}>
            <Pressable
              android_ripple={{ color: "#210644" }}
              onPress={metaAddHandler}
              style={({ pressed }) => pressed && styles.pressItem}
            >
              <Text style={styles.buttonText}>Add Meta</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default MetaEntrada;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonConf: {
    borderWidth: 1,
    borderColor: "#cccccc",
    margin: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});
