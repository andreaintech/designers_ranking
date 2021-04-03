import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient'

export default function WavyHeader({ customStyles }) {

    const styles = StyleSheet.create({
        backgroundHeaderView: {
            height: '30%',
            paddingTop: '1%',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        linearGradient: {
            // backgroundColor: '#aa4cf1', 
            backgroundColor: 'transparent',
            height: 160
        }
    })

    return (
        <View style={customStyles}>
            <LinearGradient
                colors={['#d667f4', '#c75ef3', '#aa4cf1']}
                style={styles.linearGradient}
            >

                <Svg
                    height="90%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', top: 130 }}
                >
                    <Path
                        fill="#aa4cf1"
                        // fill="transparent"
                        d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,245.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    />
                </Svg>
                {/* </View> */}
            </LinearGradient>
        </View>
    );
}

{/* <View style={customStyles}>
    <View style={{
        // backgroundColor: '#aa4cf1', 
        backgroundColor: 'transparent',
        height: 160
    }}>
        <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: 130 }}
        >
            <Path
                fill="#aa4cf1"
                // fill="transparent"
                d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,245.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
        </Svg>
    </View>
</View> */}