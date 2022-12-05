import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppExplanation from "../Pages/AppExplanation";
import Home from "../Pages/Home";
import HabitPage from "../Pages/HabitPage";
import Start from "../Pages/Start";

const Stack = createNativeStackNavigator();

export default function HomePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShow: false,
        }}
      >
        <Stack.Screen name="Página Principal" component={Home} />
        <Stack.Screen name="Hábitos" component={HabitPage} />
        <Stack.Screen name="Regras" component={AppExplanation} />
        <Stack.Screen name="Inicio" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
