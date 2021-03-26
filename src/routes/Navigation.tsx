import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'

const Navigation = () => {
  const Stack = createStackNavigator()
  const navTheme = DefaultTheme
  // navTheme.colors.background = COLORS.DEFAULT.WHITE
  navTheme.colors.background = 'white'

  return (
    <NavigationContainer
      theme={navTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: true,
        }}
      >
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ title: 'Auth Navigation Title' }}
        />
        {/* <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={{ title: 'Main Navigation Title' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Navigation