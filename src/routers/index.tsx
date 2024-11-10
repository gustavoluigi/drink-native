import { createStackNavigator } from "@react-navigation/stack";
import { Home, Details } from "../screens";

export type AppRoutesParamList = {
  Home: undefined;
  Details: {
    idDrink: string;
  };
};

const AppRoutes = createStackNavigator();

export const Routes = () => {
  return (
    <AppRoutes.Navigator>
      <AppRoutes.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppRoutes.Screen name="Details" component={Details} />
    </AppRoutes.Navigator>
  );
};
