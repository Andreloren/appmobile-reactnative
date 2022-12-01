import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import AppExplanation from "../Pages/AppExplanation";
import HabitPage from "../Pages/HabitPage";

const Stack = createNativeStackNavigator();

export default function HomePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShow: false,
        }}
      >
        <Stack.Screen name="Regras" component={AppExplanation} />
        <Stack.Screen name="Página Principal" component={Home} />
        <Stack.Screen name="Hábitos" component={HabitPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
