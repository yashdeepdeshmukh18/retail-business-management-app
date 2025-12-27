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

    <View style={styles.btnRow}> 
      <View style={styles.btn}>
        <Button
          title="Customer Pending"
          onPress={() => navigation.navigate("CustomerPending")}
          color="#8B1FAF"
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Dealer Payments"
          onPress={() => navigation.navigate("Dealer")}
          color="#8B1FAF"
        />
      </View>

      <View style={styles.btn}>
        <Button
            title="Create Quotation"
            onPress={() => navigation.navigate("Quotation")}
            color="#8B1FAF"
        />
        </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,         
    backgroundColor: "#FFF",
    borderRadius: 10, 
  },
  btn: {
    flex: 1,                    
    paddingVertical: 12,  
    marginHorizontal: 4,         
    backgroundColor: "#8B1FAF", 
    borderRadius: 6,     
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  btnRow: {
    flexDirection: "row",        
    justifyContent: "space-between", 
    marginVertical: 8,
  },
});



