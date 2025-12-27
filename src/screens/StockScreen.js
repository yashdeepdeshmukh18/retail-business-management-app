import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import ItemRow from "../components/ItemRow";

export default function StockScreen() {
  const stockItems = [
    { name: "Paint", qty: 5, rate: 200 },
    { name: "Bulb", qty: 2, rate: 50 }, // low stock
    { name: "Wire", qty: 1, rate: 100 }, // low stock
  ];

  const lowStockItems = stockItems.filter(item => item.qty < 3);

  return (
    <View style={styles.container}>
      <Header title="Stock" />

      <InfoBox label="Total Items" value={stockItems.length} />
      <InfoBox label="Low Stock Items" value={lowStockItems.length} />

      {stockItems.map((item, index) => (
        <View key={index}>
          <ItemRow name={item.name} qty={item.qty} rate={item.rate} />
          {item.qty < 3 && (
            <Text style={styles.warning}>Low stock – add to order list</Text>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  warning: {
    color: "red",
    fontSize: 12,
    marginBottom: 6,
  },
});
