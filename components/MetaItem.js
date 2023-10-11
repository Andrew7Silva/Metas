import { StyleSheet, View, Text, Pressable } from "react-native";

function MetaItem(props) {
  return (
    <View style={styles.metaItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.metaText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default MetaItem;

const styles = StyleSheet.create({
  metaItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  metaText: {
    color: "white",
    padding: 8,
  },
});
