import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import { Icon } from "native-base";
const { Navigator, Screen } = createStackNavigator();

export default function Root() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(20,90,100)" },
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        options={({ navigation }) => ({
          title: "Coffee List",
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
        })}
      />
      <Screen
        name="CoffeeDetail"
        component={CoffeeDetail}
        options={({ navigation }) => ({
          title: "Coffee Detail",
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
        })}
      />
      <Screen name="CoffeeCart" component={CoffeeCart} />
    </Navigator>
  );
}
