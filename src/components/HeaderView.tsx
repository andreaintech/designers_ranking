import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Images from '../assets/images/Images'

export default function HeaderView() {
    const navigation = useNavigation()
    const styles = StyleSheet.create({
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
        bodyHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        bottomHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingLeft: '30%'
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
            paddingTop: '3%',
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
                <View style={styles.profileDataView}>
                    <TouchableOpacity
                        style={{ paddingBottom: '10%' }}
                        activeOpacity={0.5}
                        onPress={() => console.log('asa')}
                    >
                        <Text style={styles.nameText}>Marry</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        activeOpacity={0.5}
                        onPress={() => console.log('asa')}
                    >
                        <IoniconsIcon
                            name={"location-sharp"}
                            style={styles.locationIcon}
                            onPress={() => console.log('entrega')}
                        />
                        <Text style={styles.locationText}>China Beijing</Text>
                    </TouchableOpacity>
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
    )
}