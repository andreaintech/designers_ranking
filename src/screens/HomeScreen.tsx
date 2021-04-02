import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderView from '../components/HeaderView'
import BodyView from '../components/BodyView'

export default function HomeScreen() {
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
  })

  return (
    <View style={styles.containerView}>
      <HeaderView />
      <BodyView />
    </View>
  )
}