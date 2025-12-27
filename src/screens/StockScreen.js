import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import ItemRow from "../components/ItemRow";
import { Button } from "react-native";

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
      <Button title="Go Back" onPress={() => navigation.navigate("Dashboard") } color="#cda5e7ff" />

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
    padding: 16,   
    backgroundColor: "#FFF",
  },
  warning: {
    color: "#D32F2F",  
    fontSize: 13,
    marginBottom: 8,
    fontWeight: "500",
  },
});

