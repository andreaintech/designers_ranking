import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import WavyHeader from '../components/WavyHeader'
import BodyHeaderView from '../components/BodyHeaderView'
import BottomHeaderView from '../components/BottomHeaderView'

export default function HeaderView() {
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        headerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '1%',
        },
        menuIcon: {
            color: 'white',
            fontSize: 30
        },
        arrowIcon: {
            color: 'white',
            fontSize: 25,
        },
        followButtonText: {
            color: '#ac63f3',
            fontSize: 18
        },
        itemTextTitle: {
            color: 'white',
            fontSize: 14,
            alignSelf: 'center',
            fontWeight: 'bold',
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
        },
        profileDataView: {
            paddingTop: '1%',
            paddingLeft: '3%',
        },
        container: {
            flex: 1,
            height: '30%',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        svgCurve: {
            position: 'absolute',
            width: Dimensions.get('window').width
        },
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
        <View style={styles.container}>
            <WavyHeader customStyles={styles.svgCurve} />
            <View style={styles.headerView}>
                <LeftArrow />
                <RightMenu />
            </View>

            <BodyHeaderView />
            <BottomHeaderView />

        </View>
    )
}