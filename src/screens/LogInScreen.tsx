import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LogInScreen() {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: '10%',
      marginRight: '10%',
    },
  })

  return (
    <View style={styles.containerView}>
      <Text>LogIn Screen</Text>
      <Input
        placeholder='username'
      // leftIcon={
      //   <Icon
      //     name='user'
      //     size={24}
      //     color='black'
      //   />
      // }
      />
      <Input
        placeholder='password'
      // leftIcon={
      //   <Icon
      //     name='user'
      //     size={24}
      //     color='black'
      //   />
      // }
      />
      <Button
        onPress={() => navigation.navigate('MainStack')}
        title="Log In"
      />

    </View>
  )
}