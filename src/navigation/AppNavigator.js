import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import BillingScreen from "./screens/BillingScreen";
import CustomerPendingScreen from "./screens/CustomerPendingScreen";
import DealerScreen from "./screens/DealerScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen
          name="CustomerPending"
          component={CustomerPendingScreen}
        />
        <Stack.Screen name="Dealer" component={DealerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
