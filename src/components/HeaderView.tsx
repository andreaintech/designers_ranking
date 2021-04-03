import React from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import WavyHeader from '../components/WavyHeader'
import BodyHeaderView from '../components/BodyHeaderView'

export default function HeaderView() {
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        headerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '1%',
        },
        bodyHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        bottomHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingLeft: '30%',
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
            fontSize: 28,
            fontWeight: 'bold',
            color: 'white'
        },
        locationText: {
            paddingLeft: '1%',
            paddingTop: '1%',
            fontSize: 10,
            color: 'white'
        },
        locationIcon: {
            color: 'white',
            fontSize: 18
        },
        followButton: {
            backgroundColor: 'white',
            borderRadius: 13,
            width: '60%',
            height: '40%',
            marginTop: '10%',
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
        </View>
    )
}