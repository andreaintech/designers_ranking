import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'
import WavyHeader from '../components/WavyHeader'

export default function PruebaScreen2() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    headerContainer: {
      marginTop: 50,
      marginHorizontal: 10
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginTop: 35
    },
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
  })



  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        {/* <Text style={styles.headerText}>Custom Header</Text> */}
      </View>
    </View>
  )
}

