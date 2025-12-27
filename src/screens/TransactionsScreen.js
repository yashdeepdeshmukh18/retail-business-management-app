import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import ItemRow from "../components/ItemRow";

export default function TransactionsScreen() {
  const cashTransactions = [
    {name:"Cash Sale - Invoice 101", qty:1, rate:1200},
    {name:"Cash Sale - Invoice 102", qty:1, rate:800},
  ];

  const onlineTransactions = [
    {name:"UPI - Invoice 103", qty: 1, rate: 1500},
  ];

  return (
    <View style={styles.container}>
      <Header title="Transactions"/>

      <Text style={styles.section}>Cash Transactions</Text>
      {cashTransactions.map((item, index) => (
        <ItemRow
          key={index}
          name={item.name}
          qty={item.qty}
          rate={item.rate}
        />
      ))}

      <Text style={styles.section}>Online Transactions</Text>
      {onlineTransactions.map((item, index) => (
        <ItemRow
          key={index}
          name={item.name}
          qty={item.qty}
          rate={item.rate}
        />
      ))}

      <Text style={styles.note}>* Export reports feature is conceptual.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginTop: 12,
    fontWeight: "bold",
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: "#555",
  },
});
