import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import HorizontalList from '../components/HorizontalList'
import VerticalList from '../components/VerticalList'
import Images from '../assets/images/Images'
import { SHOTS_LIST, BUCKETS_LIST } from '../exports/exports'
import { Button } from 'react-native-elements'

export default function HomeScreen() {
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
    backgroundHeaderView: {
      height: '30%',
      paddingTop: '1%',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    headerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: '2%',
      paddingBottom: '2%',
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
      paddingLeft: '3%',
      paddingRight: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleText: {
      fontSize: 30,
      color: '#66696b',
      fontWeight: 'bold'
    },
    item: {
      margin: 10,
    },
    buttonsView: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: '3%',
      justifyContent: 'flex-end',
    },
    menuIcon: {
      color: 'white',
      fontSize: 30
    },
    arrowIcon: {
      color: 'white',
      fontSize: 25,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 50
    },
    nameText: {
      fontSize: 24,
      color: 'white'
    },
    locationText: {
      fontSize: 12,
      color: 'white'
    },
    locationIcon: {
      color: 'white',
      fontSize: 20
    },
    followButton: {
      backgroundColor: 'white',
      borderRadius: 13,
      width: '60%',
      height: '40%',
      paddingTop: '3%',
    },
    followButtonText: {
      color: '#ac63f3',
      fontSize: 18
    },
    gridsIcon: {
      color: '#c45cf3',
      fontSize: 25,
      paddingTop: '0.5%'
    },
    squareIcon: {
      color: '#d8d8d8',
      fontSize: 27,
    },
    itemTextTitle: {
      color: 'white',
      fontSize: 14,
      alignSelf: 'center',
      fontWeight: 'bold',
      // borderWidth: 1
    },
    itemText: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: 'bold',
      paddingBottom: '3%'
    },
    middleItemView: {
      paddingLeft: '10%',
      paddingRight: '10%'
    }
  })

  const LeftArrow = () => {
    return (
      <AntDesignIcon
        name={"arrowleft"}
        style={styles.arrowIcon}
        onPress={() => navigation.goBack()}
      />
    )
  }

  const RightMenu = () => {
    return (
      <EntypoIcon
        name={"menu"}
        style={styles.menuIcon}
        onPress={() => console.log('entrega')}
      />
    )
  }

  return (
    <View style={styles.containerView}>

      <LinearGradient start={{ x: 0.3, y: 0.1 }} end={{ x: 1, y: 0 }} colors={['#d667f4', '#c75ef3', '#aa4cf1']}
        // style={styles.linearGradient}
        style={styles.backgroundHeaderView}
      >
        <View style={styles.headerView}>
          <LeftArrow />
          <RightMenu />
        </View>

        <View
          style={styles.bodyHeaderView}
        >
          <Image
            style={styles.image}
            source={Images['profile6']}
          />
          <View>
            <Text style={styles.nameText}>Marry</Text>
            <View style={{ flexDirection: 'row' }}>
              <IoniconsIcon
                name={"location-sharp"}
                style={styles.locationIcon}
                onPress={() => console.log('entrega')}
              />
              <Text style={styles.locationText}>China Beijing</Text>
            </View>
          </View>
          <Button
            buttonStyle={styles.followButton}
            titleStyle={styles.followButtonText}
            title="Follow"
          />
        </View>

        <View
          style={styles.bottomHeaderView}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('asa')}
          >
            <Text style={styles.itemText}>{648}</Text>
            <Text style={styles.itemTextTitle}>{'Follow'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.middleItemView}
            activeOpacity={0.5}
            onPress={() => console.log('asa')}
          >
            <Text style={styles.itemText}>{7}</Text>
            <Text style={styles.itemTextTitle}>{'Bucket'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('asa')}
          >
            <Text style={styles.itemText}>{1046}</Text>
            <Text style={styles.itemTextTitle}>{'Followers'}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>


      <View
        style={styles.bodyView}
      >
        <View
          style={styles.topBodyView}
        >
          {/* <Text style={styles.titleText}>Buckets</Text> */}
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
            <View
              style={styles.buttonsView}
            >
              <IoniconsIcon
                name={"grid"}
                style={styles.gridsIcon}
                onPress={() => console.log('grids')}
              />
              <IoniconsIcon
                name={"square"}
                style={styles.squareIcon}
                onPress={() => console.log('grids')}
              />
            </View>
          </View>

          <VerticalList
            data={SHOTS_LIST}
          />

          {/* <FlatList
            data={SHOTS_LIST}
            scrollEnabled
            snapToAlignment='center'
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={2}
            renderItem={(item: any) => renderItem(item)}
          /> */}
        </View>
      </View>
    </View>
  )
}