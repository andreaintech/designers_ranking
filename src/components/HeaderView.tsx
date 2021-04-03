import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopHeaderView from '../components/TopHeaderView'
import BodyHeaderView from '../components/BodyHeaderView'
import BottomHeaderView from '../components/BottomHeaderView'

export default function HeaderView() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: '30%',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    })

    return (
        <View style={styles.container}>
            <TopHeaderView />
            <BodyHeaderView />
            <BottomHeaderView />
        </View>
    )
}