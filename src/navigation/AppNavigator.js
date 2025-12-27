import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "../BottomTabNavigator";
import QuotationScreen from "../screens/QuotationScreen";
import CustomerPendingScreen from "../screens/CustomerPendingScreen";
import DealerScreen from "../screens/DealerScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

        <Stack.Screen name="Quotation" component={QuotationScreen} />
        <Stack.Screen name="CustomerPending" component={CustomerPendingScreen} />
        <Stack.Screen name="Dealer" component={DealerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
