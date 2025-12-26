import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BillingScreen() {

  // dummy stock data (normally comes from backend)
  const [stock, setStock] = useState([
    { name: 'Cement Bag', quantity: 20 },
    { name: 'Electric Wire', quantity: 30 },
    { name: 'Paint Bucket', quantity: 10 }
  ]);

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [items, setItems] = useState([]);

  const addItemToBill = () => {
    if (itemName === '' || quantity === '' || rate === '') {
      return;
    }

    const qty = Number(quantity);
    const price = Number(rate);

    // reduce stock (simple logic)
    const updatedStock = stock.map((stockItem) => {
      if (stockItem.name === itemName) {
        return {
          ...stockItem,
          quantity: stockItem.quantity - qty
        };
      }
      return stockItem;
    });

    setStock(updatedStock);

    const newItem = {
      name: itemName,
      quantity: qty,
      rate: price,
      total: qty * price
    };

    setItems([...items, newItem]);

    setItemName('');
    setQuantity('');
    setRate('');
  };

  const calculateGrandTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total = total + item.total;
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Invoice</Text>

      <Text>Item Name</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Use same name as stock"
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

      <Button title="Add Item & Reduce Stock" onPress={addItemToBill} />

      <View style={styles.box}>
        <Text style={styles.subTitle}>Bill Items</Text>
        {items.map((item, index) => (
          <Text key={index}>
            {item.name} - ₹{item.total}
          </Text>
        ))}
      </View>

      <View style={styles.box}>
        <Text style={styles.subTitle}>Remaining Stock</Text>
        {stock.map((s, index) => (
          <Text key={index}>
            {s.name} : {s.quantity}
          </Text>
        ))}
      </View>

      <Text style={styles.totalText}>
        Grand Total: ₹ {calculateGrandTotal()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#eeeeee'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTitle: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#fff'
  },
  box: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#dcdcdc'
  },
  totalText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
