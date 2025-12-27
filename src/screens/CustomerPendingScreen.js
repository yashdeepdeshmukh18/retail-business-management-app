import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import { Button } from "react-native";

export default function CustomerPendingScreen() {
  return (
    <View style={styles.container}>
      <Header title="Customer Pending" />
      <Button title="Go Back" onPress={() => navigation.navigate("Dashboard")} color="#cda5e7ff" />

      <InfoBox label="Customer" value="Ramesh" />
      <InfoBox label="Pending Amount" value="₹1800" />
      <InfoBox label="Due Date" value="25 Aug" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,         
    backgroundColor: "#FFF",
  },
});

