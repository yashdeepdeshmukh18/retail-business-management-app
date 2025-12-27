import { View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Dashboard" />

      <InfoBox label="Total Customers" value="10" />
      <InfoBox label="Pending Amount" value="₹5200" />
      <InfoBox label="Low Stock Items" value="2" />

      <View style={styles.btn}>
        <Button title="Go to Stock" onPress={() => navigation.navigate("Stock")} />
      </View>

      <View style={styles.btn}>
        <Button title="Create Bill" onPress={() => navigation.navigate("Billing")} />
      </View>

      <View style={styles.btn}>
        <Button
          title="Customer Pending"
          onPress={() => navigation.navigate("CustomerPending")}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Dealer Payments"
          onPress={() => navigation.navigate("Dealer")}
        />
      </View>

      <View style={styles.btn}>
        <Button
            title="Create Quotation"
            onPress={() => navigation.navigate("Quotation")}
        />
        </View>

        <View style={styles.btn}>
            <Button
                title="Transactions"
                onPress={() => navigation.navigate("Transactions")}
            />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btn: {
    marginVertical: 5,
  },
});
