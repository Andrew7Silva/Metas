import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MetaItem from "./components/MetaItem";
import MetaEntrada from "./components/MetaEntrada";

export default function App() {
  const [metasList, setMetasList] = useState([]);

  function metaAddHandler(enteredTextMeta) {
    setMetasList((atualMetasList) => [
      ...atualMetasList,
      { text: enteredTextMeta, id: Math.random().toString() },
    ]);
  }

  function metaDeleteHandler(id) {
    setMetasList((atualMetasList) => {
      return atualMetasList.filter((meta) => meta.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <MetaEntrada onMetaAdd={metaAddHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  metasContainer: {
    flex: 5,
  },
});
