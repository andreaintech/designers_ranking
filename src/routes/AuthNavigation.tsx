import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigation from './MainNavigation'

import WelcomeScreen from '../screens/WelcomeScreen'
import LogInSignUpScreen from '../screens/LogInSignUpScreen'
import LogInScreen from '../screens/LogInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import PruebaScreen from '../screens/PruebaScreen'

export default function AuthNavigation() {
    const Stack = createStackNavigator()

    // const HomeStack = StackNavigator({
    //     Home: {
    //         screen: HomeScreen,
    //     },
    //     Item: {
    //         screen: ItemScreen,
    //         navigationOptions: ({ navigation }) => ({
    //             title: `${navigation.state.params.title}`,
    //         }),
    //     },
    // },
    //     {
    //         headerMode: 'screen',
    //         cardStyle: { backgroundColor: '#FFFFFF' },
    //     })

    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{
                // headerTintColor: COLORS.DEFAULT.HEADER_TINT_COLOR,
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    // backgroundColor: COLORS.DEFAULT.HEADER_NAVIGATION_BACKGROUND,
                },
                headerTitleStyle: {
                    color: 'black',
                    fontSize: 18,
                    // color: COLORS.DEFAULT.PRIMARY,
                    // fontSize: TYPOGRAPHY.TI,
                },
                headerBackTitleVisible: false,
                // headerMode: 'screen',
                // cardStyle: { backgroundColor: 'yellow' },
            }}
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PruebaScreen"
                component={PruebaScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="LogInSignUpScreen"
                component={LogInSignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="LogInScreen"
                component={LogInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name="MainStack"
                component={MainStack}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

const MainStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="MainNavigation"
                component={MainNavigation}
            />
        </Stack.Navigator>
    )
}