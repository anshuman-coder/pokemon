import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  HomeScreen,
  LoginScreen,
  SignUpScreen
} from '@/screens'

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='sign_up' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation