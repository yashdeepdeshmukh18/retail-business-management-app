import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import ItemRow from "../components/ItemRow";
import InfoBox from "../components/InfoBox";
import { Button } from "react-native";

export default function QuotationScreen() {
  const quotationItems = [
    {name:"Paint", qty:2, rate: 300},
    {name:"Brush", qty:3, rate: 50},
  ];

  const total = quotationItems.reduce(
    (sum, item) => sum + item.qty * item.rate,
    0
  );

  return (
    <View style={styles.container}>
      <Header title="Quotation" />
      <Button title="Go Back" onPress={() => navigation.navigate("Dashboard")} color="#cda5e7ff" />

      <Text style={styles.note}>* This is an estimate. Tax not included.</Text>

      {quotationItems.map((item, index) => (
        <ItemRow
          key={index}
          name={item.name}
          qty={item.qty}
          rate={item.rate}
        />
      ))}

      <InfoBox label="Estimated Total" value={`₹${total}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,    
    backgroundColor: "#FFF",
  },
  note: {
    marginVertical: 10,
    fontSize: 13,        
    color: "#666",
    lineHeight: 18,    
  },
});

