import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function SignUpScreen() {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  })

  return (
    <View style={styles.containerView}>
      <Text>SignUp Screen</Text>
      {/* <Button
        onPress={() => navigation.navigate('LogInScreen')}
        title="Log In"
      /> */}

    </View>
  )
}