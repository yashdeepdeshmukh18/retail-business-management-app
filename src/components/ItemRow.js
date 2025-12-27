import { View, Text, StyleSheet } from "react-native";

export default function ItemRow({ name, qty, rate }) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text>Qty: {qty}</Text>
      <Text>₹{rate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 8,
  },
  name: {
    fontWeight: "bold",
  },
});
