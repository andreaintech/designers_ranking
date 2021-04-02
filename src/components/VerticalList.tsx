import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default function VerticalList({
  data
}) {
  const styles = StyleSheet.create({
    item: {
      margin: 10,
      borderWidth: 1,
      width: 150,
      height: 100,
    },
    itemText: {
      marginTop: 5,
      color: 'white',
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: '20%'
    },
    containerView: {
      alignItems: 'center'
    },
    itemView: {
      margin: 10,
      borderRadius: 15,
      width: 150,
      height: 100,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 9,
    }
  });

  const ListItem = ({ item }) => {
    return (
      <View style={[
        styles.itemView, {
          backgroundColor: item.backgroundColor,
          shadowColor: item.shadowColor,
        }]}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.containerView}>
      <FlatList
        scrollEnabled
        snapToAlignment='center'
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}