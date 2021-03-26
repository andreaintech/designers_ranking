import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function LogInSignUpScreen() {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      // justifyContent: 'space-around',
      // justifyContent: 'space-between',
      justifyContent: 'space-evenly',

    },
  })

  return (
    <View style={styles.containerView}>
      <Text>LogIn / SignUp Screen</Text>
      <Button
        onPress={() => navigation.navigate('LogInScreen')}
        title="Log In"
      />
      <Button
        onPress={() => navigation.navigate('SignUpScreen')}
        title="Sign Up"
      />
    </View>
  )
}