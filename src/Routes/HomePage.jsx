import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppExplanation from "../Pages/AppExplanation";
import HabitPage from "../Pages/HabitPage";
import Home from "../Pages/Home";

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
        <Stack.Screen name="Regras" component={AppExplanation} />
        <Stack.Screen name="Hábitos" component={HabitPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
