import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import { Button } from "react-native";

export default function DealerScreen() {
  return (
    <View style={styles.container}>
      <Header title="Dealer Payments" />
      <Button title="Go Back" onPress={() => navigation.navigate("Dashboard")} color="#cda5e7ff" />

      <InfoBox label="Dealer Name" value="ABC Traders" />
      <InfoBox label="Total Billed" value="₹12000" />
      <InfoBox label="Amount Paid" value="₹7000" />
      <InfoBox label="Amount Due" value="₹5000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,            
    backgroundColor: "#FFF",
  },
});
