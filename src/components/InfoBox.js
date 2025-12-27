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
    borderColor: "#DDD",       
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,           
  },
  value: {
    fontSize: 15,
    fontWeight: "600",         
    marginTop: 6,
    color: "#333",
  },
});

