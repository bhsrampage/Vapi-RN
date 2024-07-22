import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "app/screens/Home/HomeScreen"
import React from "react"

const MainNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
