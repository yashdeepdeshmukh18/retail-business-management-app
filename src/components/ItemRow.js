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
    borderBottomColor: "#E0E0E0", 
    paddingVertical: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",       
    color: "#333",
  },
});

