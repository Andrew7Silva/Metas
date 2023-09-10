import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredTextMeta, setEnteredTextMeta] = useState("");
  const [metasList, setMetasList] = useState([]);
  function metaEntradaHandler(enteredText) {
    setEnteredTextMeta(enteredText);
  }

  function metaAddHandler() {
    setMetasList((atualMetasList) => [
      ...atualMetasList,
      { text: enteredTextMeta, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Metas do seu curso!"
          onChangeText={metaEntradaHandler}
        />
        <Button title="Add Meta" onPress={metaAddHandler} />
      </View>
      <View style={styles.metasContainer}>
        <FlatList
          data={metasList}
          renderItem={(itemData) => {
            return (
              <View style={styles.metaItem}>
                <Text style={styles.metaText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceHorizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  metasContainer: {
    flex: 5,
  },
  metaItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  metaText: {
    color: "white",
  },
});
