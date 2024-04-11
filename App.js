import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./assets/screens/Login/Login";
import CreateAccount from "./assets/screens/Login/CreateAcccount";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "CreateAccount" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
