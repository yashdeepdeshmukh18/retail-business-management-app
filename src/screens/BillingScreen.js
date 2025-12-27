import { View, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import ItemRow from "../components/ItemRow";

const billItems = [
  { id: "1", name: "Switch", qty: 2, rate: 120 },
  { id: "2", name: "Wire", qty: 5, rate: 60 },
];

export default function BillingScreen() {
  let total = 0;
  billItems.forEach((i) => {
    total += i.qty * i.rate;
  });

  return (
    <View style={styles.container}>
      <Header title="Billing" />

      <FlatList
        data={billItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemRow
            name={item.name}
            qty={item.qty}
            rate={item.rate}
          />
        )}
      />

      <InfoBox label="Total Amount" value={`₹${total}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
