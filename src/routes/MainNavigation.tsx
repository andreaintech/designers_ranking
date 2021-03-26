import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'

export default function MainNavigation() {
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
            initialRouteName="HomeScreen"
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
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}