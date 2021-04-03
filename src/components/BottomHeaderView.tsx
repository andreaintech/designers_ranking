import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native'

export default function BottomHeaderView() {
    const styles = StyleSheet.create({
        bottomHeaderView: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingLeft: '30%',
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
    })

    return (
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
    )
}