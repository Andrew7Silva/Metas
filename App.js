import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import MetaItem from "./components/MetaItem";
import MetaEntrada from "./components/MetaEntrada";

export default function App() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [metasList, setMetasList] = useState([]);

  function startAddMetaHandler() {
    setModalVisivel(true);
  }

  function endAddMetaHandler() {
    setModalVisivel(false);
  }

  function metaAddHandler(enteredTextMeta) {
    setMetasList((atualMetasList) => [
      ...atualMetasList,
      { text: enteredTextMeta, id: Math.random().toString() },
    ]);
    endAddMetaHandler();
  }

  function metaDeleteHandler(id) {
    setMetasList((atualMetasList) => {
      return atualMetasList.filter((meta) => meta.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <View style={styles.buttonConf}>
          <Pressable
            onPress={startAddMetaHandler}
            style={({ pressed }) => pressed && styles.pressItem}
          >
            <Text style={styles.buttonText}>Adicionar nova meta</Text>
          </Pressable>
        </View>
        <MetaEntrada
          mostrarModal={modalVisivel}
          onMetaAdd={metaAddHandler}
          onCancel={endAddMetaHandler}
        />
        <View style={styles.metasContainer}>
          <FlatList
            data={metasList}
            renderItem={(itemData) => {
              return (
                <MetaItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={metaDeleteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  buttonConf: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    padding: 16,
  },
  metasContainer: {
    flex: 5,
  },
  pressItem: {
    opacity: 0.5,
  },
});
