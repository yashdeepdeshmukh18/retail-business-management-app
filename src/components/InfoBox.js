import { View, Text, StyleSheet } from "react-native";

export default function InfoBox({ label, value }) {
  return (
    <View style={styles.box}>
      <Text>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#eeeeee",
  },
  value: {
    fontWeight: "bold",
    marginTop: 4,
  },
});
