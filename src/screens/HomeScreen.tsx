import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'

import { SHOTS_LIST, BUCKETS_LIST } from '../exports/exports'
import HorizontalList from '../components/HorizontalList';

export default function HomeScreen() {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
    headerView: {
      height: '20%',
      paddingTop: '1%',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    bodyView: {
      backgroundColor: 'white',
      height: '80%'
    },
    bodyHeaderView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    bottomHeaderView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingLeft: '30%'
    },
    topBodyView: {
      flexDirection: 'column',
      paddingLeft: '5%'
    },
    bottomBodyView: {
      flexDirection: 'column',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%'
    },
    topBottomBodyView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    titleText: {
      fontSize: 30,
      paddingLeft: '2%',
      color: '#66696b',
      fontWeight: 'bold'
    },


    item: {
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  })

  const MyCustomLeftComponent = () => {
    return (
      <View>
        <Text>go back</Text>
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        flex: 1,
        margin: '1%',
        // width: 100,
        height: 120,
        maxHeight: 120,
        backgroundColor: item.backgroundColor,
        borderRadius: 20
      }} />
    )
  }

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.containerView}>

      <LinearGradient start={{ x: 0.3, y: 0.1 }} end={{ x: 1, y: 0 }} colors={['#d667f4', '#c75ef3', '#aa4cf1']}
        // style={styles.linearGradient}
        style={styles.headerView}
      >
        <Header
          leftComponent={<MyCustomLeftComponent />}
          rightComponent={{ icon: 'home', style: { color: '#fff' } }}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            justifyContent: 'space-around',
          }}
        // statusBarProps={{ barStyle: 'light-content' }}
        // barStyle="light-content" // or directly
        // rightComponent={<MyCustomRightComponent />}
        // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <View
          style={styles.bodyHeaderView}
        >
          <Text>HOLA</Text>
          <Text>HOLA</Text>
          <Text>HOLA</Text>
        </View>

        <View
          style={styles.bottomHeaderView}
        >
          <Text>HOLA</Text>
          <Text>HOLA</Text>
          <Text>HOLA</Text>
        </View>
        {/* </View> */}
      </LinearGradient>











      <View
        style={styles.bodyView}
      >
        <View
          style={styles.topBodyView}
        >
          <Text style={styles.titleText}>Buckets</Text>
          <HorizontalList
            data={BUCKETS_LIST}
          />
        </View>

        <View
          style={styles.bottomBodyView}
        >
          <View
            style={styles.topBottomBodyView}
          >
            <Text style={styles.titleText}>Shots</Text>
            <Text>Shots</Text>
          </View>
          <FlatList
            data={SHOTS_LIST}
            scrollEnabled
            snapToAlignment='center'
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={2}
            renderItem={(item: any) => renderItem(item)}
          />
        </View>
      </View>
    </View>
  )
}