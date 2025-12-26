import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BillingScreen() {


  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const qty = Number(quantity);
    const price = Number(rate);

    if (qty > 0 && price > 0) {
      setTotal(qty * price);
    } else {
      setTotal(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Invoice</Text>

      <Text>Item Name</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />

      <Text>Quantity</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="number-pad"
        placeholder="Enter quantity"
      />

      <Text>Rate</Text>
      <TextInput
        style={styles.input}
        value={rate}
        onChangeText={setRate}
        keyboardType="number-pad"
        placeholder="Enter rate"
      />

      <Button title="Calculate Total" onPress={calculateTotal} />

      <View style={styles.totalBox}>
        <Text>Total Amount:</Text>
        <Text style={styles.totalText}>₹ {total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ededed'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  
  totalBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#dcdcdc',

    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 4
  },

  totalText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
