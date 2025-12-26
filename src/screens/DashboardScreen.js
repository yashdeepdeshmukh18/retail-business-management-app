import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {

  const totalSalesToday = 12450;
  const pendingCustomers = 5;
  const lowStockItems = 3;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Retail Business Dashboard</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Today's Sales</Text>
        <Text style={styles.boxValue}>₹ {totalSalesToday}</Text>
      </View>


      <View style={styles.box}>
        <Text style={styles.boxTitle}>Pending Customers</Text>
        <Text style={styles.boxValue}>{pendingCustomers}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Low Stock Items</Text>
        <Text style={styles.boxValue}>{lowStockItems}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    padding: 15
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },

  box: {
    backgroundColor: '#d1d1d1',
    padding: 12,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 6
  },
  boxTitle: {
    fontSize: 14,
    color: '#555'
  },
  boxValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 5
  }
});
