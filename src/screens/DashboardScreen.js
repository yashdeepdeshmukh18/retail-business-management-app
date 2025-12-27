import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Header title="Dashboard" />

      <InfoBox label="Total Customers" value="15" />
      <InfoBox label="Pending Amount" value="₹6200" />
      <InfoBox label="Low Stock Items" value="4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
