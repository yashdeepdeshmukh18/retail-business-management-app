import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import BillingScreen from "./screens/BillingScreen";
import TransactionsScreen from "./screens/TransactionsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Stock" component={StockScreen} />
      <Tab.Screen name="Billing" component={BillingScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}
