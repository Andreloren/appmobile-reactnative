import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import AppExplanation from "../Pages/AppExplanation";
import Home from "../Pages/Home";

const Stack = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShow: false,
        }}
      >
        <Stack.Screen name="Inicio" component={Start} />
        <Stack.Screen name="Regras" component={AppExplanation} />
        <Stack.Screen name="Página Principal" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
