import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";

export default function DealerScreen() {
  return (
    <View style={styles.container}>
      <Header title="Dealer Payments" />

      <InfoBox label="Dealer Name" value="ABC Traders" />
      <InfoBox label="Total Billed" value="₹12000" />
      <InfoBox label="Amount Paid" value="₹7000" />
      <InfoBox label="Amount Due" value="₹5000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
