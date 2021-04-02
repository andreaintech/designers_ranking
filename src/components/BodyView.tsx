import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { SHOTS_LIST, BUCKETS_LIST } from '../exports/exports'
import HorizontalList from '../components/HorizontalList'
import VerticalList from '../components/VerticalList'

export default function BodyView() {
    const styles = StyleSheet.create({
        containerView: {
            flex: 1,
            flexWrap: 'nowrap',
            flexDirection: 'column',
        },
        bodyView: {
            backgroundColor: 'white',
            height: '80%'
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
        gridsIcon: {
            color: '#c45cf3',
            fontSize: 25,
            paddingTop: '0.5%'
        },
        squareIcon: {
            color: '#d8d8d8',
            fontSize: 27,
        },
    })





    return (
        <View
            style={styles.bodyView}
        >
            <View
                style={styles.topBodyView}
            >
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
    )
}