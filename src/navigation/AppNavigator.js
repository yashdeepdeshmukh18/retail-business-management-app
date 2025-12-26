import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
// import BillingScreen from '../screens/BillingScreen';
// import StockScreen from '../screens/StockScreen';
// import CustomersScreen from '../screens/CustomersScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        {/* <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="Customers" component={CustomersScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
