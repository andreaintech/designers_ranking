import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  })

  return (
    <View style={styles.containerView}>
      <Text>WelcomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('LogInSignUpScreen')}
        title="Go to Login"
      />
      <Button
        onPress={() => navigation.navigate('PruebaScreen')}
        title="Go to Prueba"
      />
    </View>
  )
}