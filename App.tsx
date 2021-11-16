import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { FontAwesome } from "@expo/vector-icons";

// screens
import { Home, Login, Cart } from "./screens/";

import { images, icons, COLORS, FONTS, SIZES } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "CarmenSans-Regular": require("./assets/fonts/CarmenSans-Regular.otf"),
    "CarmenSans-SemiBold": require("./assets/fonts/CarmenSans-SemiBold.otf"),
    "CarmenSans-Thin": require("./assets/fonts/CarmenSans-Thin.otf"),
    "CocoGothic-Bold": require("./assets/fonts/CocoGothic-Bold.ttf"),
    CocoGothic: require("./assets/fonts/CocoGothic.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              style={{ marginLeft: SIZES.padding }}
              onPress={onPress}
            >
              <FontAwesome name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "SHOE SELECTOR",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => navigation.navigate("Cart")}
              >
                <FontAwesome name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'CART',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
