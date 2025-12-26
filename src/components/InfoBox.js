import { View, Text, StyleSheet } from "react-native";

export default function InfoBox({ label, value }) {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#eeeeee",
    borderWidth: 1,
    borderColor: "#999",
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
