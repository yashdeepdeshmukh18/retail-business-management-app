import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomersScreen() {


  const [customers] = useState([
    {
      id: 1,
      name: 'Rohit Hardware',
      phone: '9999999999',
      pendingAmount: 4500,
      dueDate: '25-12-2025',
      bills: [1200, 1800, 1500]
    },
    {
      id: 2,
      name: 'Sharma Electricals',
      phone: '9878999999',
      pendingAmount: 2200,
      dueDate: '28-12-2025',
      bills: [1000, 1200]
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Pending Payments</Text>

      {customers.map((customer) => (
        <View key={customer.id} style={styles.customerBox}>

          <Text style={styles.name}>{customer.name}</Text>
          <Text>Phone: {customer.phone}</Text>
          <Text>Pending: ₹ {customer.pendingAmount}</Text>
          <Text>Due Date: {customer.dueDate}</Text>

          <View style={styles.billBox}>
            <Text style={styles.subTitle}>Billing History</Text>
            {customer.bills.map((amount, index) => (
              <Text key={index}>Bill {index + 1}: ₹ {amount}</Text>
            ))}
          </View>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  customerBox: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 5
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subTitle: {
    marginTop: 5,
    fontWeight: 'bold'
  },
  billBox: {
    marginTop: 5,
    backgroundColor: '#cfcfcf',
    padding: 5
  }
});
