import { StyleSheet, View, Text } from 'react-native';

function MetaItem(props) {
  return (
    <View style={styles.metaItem}>
      <Text style={styles.metaText}>{props.text}</Text>
    </View>
  );
}

export default MetaItem;

const styles = StyleSheet.create({
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