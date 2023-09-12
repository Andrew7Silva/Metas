import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MetaItem from "./components/MetaItem";
import MetaEntrada from "./components/MetaEntrada";

export default function App() {
  const [metasList, setMetasList] = useState([]);

  function metaAddHandler(enteredTextMeta) {
    setMetasList((atualMetasList) => [
      ...atualMetasList,
      { text: enteredTextMeta, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <MetaEntrada onMetaAdd={metaAddHandler} />
      <View style={styles.metasContainer}>
        <FlatList
          data={metasList}
          renderItem={(itemData) => {
            return <MetaItem text={itemData.item.text} />;
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
  metasContainer: {
    flex: 5,
  },
});
