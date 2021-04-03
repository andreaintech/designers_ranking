import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WavyHeader from '../components/WavyHeader'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

export default function TopHeaderView() {
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
        <>
            <WavyHeader customStyles={styles.svgCurve} />
            <View style={styles.headerView}>
                <LeftArrow />
                <RightMenu />
            </View>
        </>
    )
}