import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StockScreen() {

  const [stockItems, setStockItems] = useState([
    {id: 1, name:'Cement Bag', quantity:8, minLimit:10},{id: 2, name: 'Electric Wire', quantity: 25, minLimit: 15 },
    {id: 3, name:'Paint Bucket', quantity:4, minLimit:6}
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Management</Text>
      {stockItems.map((item) => (
        <View key={item.id} style={styles.itemBox}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>

          {item.quantity < item.minLimit && (
            <Text style={styles.lowText}>LOW STOCK</Text>
          )}
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemBox: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  lowText:{
    color: 'red',
    marginTop: 5
  }
});
