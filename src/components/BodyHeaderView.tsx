import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import Images from '../assets/images/Images'

export default function BodyHeaderView() {
    const styles = StyleSheet.create({
        bodyHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-around',
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
        profileDataView: {
            paddingTop: '1%',
            paddingLeft: '3%',
        },
    })

    return (
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
    )
}