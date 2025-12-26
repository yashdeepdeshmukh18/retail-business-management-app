import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BillingScreen() {

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [items, setItems] = useState([]);

  const addItemToBill = () => {
    if (itemName === '' || quantity === '' || rate === '') {
      return;
    }

    const itemTotal = Number(quantity) * Number(rate);

    const newItem = {
      name: itemName,
      quantity: quantity,
      rate: rate,
      total: itemTotal
    };

    setItems([...items, newItem]);

    // clear inputs
    setItemName('');
    setQuantity('');
    setRate('');
  };

  const calculateGrandTotal = () => {
    let sum = 0;
    items.forEach((item) => {
      sum = sum + item.total;
    });
    return sum;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Invoice</Text>

      <Text>Item Name</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Item name"
      />

      <Text>Quantity</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="number-pad"
        placeholder="Quantity"
      />

      <Text>Rate</Text>
      <TextInput
        style={styles.input}
        value={rate}
        onChangeText={setRate}
        keyboardType="number-pad"
        placeholder="Rate"
      />

      <Button title="Add Item" onPress={addItemToBill} />

      <View style={styles.billBox}>
        <Text style={styles.subTitle}>Bill Items</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text>{item.name}</Text>
            <Text>₹ {item.total}</Text>
          </View>
        ))}
      </View>

      <View style={styles.totalBox}>
        <Text>Grand Total</Text>
        <Text style={styles.totalText}>₹ {calculateGrandTotal()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 15,
    backgroundColor: '#efefef'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#fff'
  },

  billBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#dcdcdc',

    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 4
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4
  },

  totalBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#cfcfcf'
  },

  totalText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
