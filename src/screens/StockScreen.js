import { View, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import ItemRow from "../components/ItemRow";

const stockData = [
  { id: "1", name: "Cement", qty: 20, rate: 320 },
  { id: "2", name: "Paint", qty: 5, rate: 450 },
];

export default function StockScreen() {
  return (
    <View style={styles.container}>
      <Header title="Stock" />

      <InfoBox label="Total Items" value={stockData.length} />

      <FlatList
        data={stockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemRow
            name={item.name}
            qty={item.qty}
            rate={item.rate}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
