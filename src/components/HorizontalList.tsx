import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function HorizontalList({
  data
}) {
  const styles = StyleSheet.create({
    containerView: {
      paddingLeft: '3%',
    },
    item: {
      margin: 10,
      borderWidth: 1,
      width: 150,
      height: 100,
    },
    itemText: {
      marginTop: 2,
      color: 'white',
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: '20%'
    },
    itemView: {
      margin: 7,
      borderRadius: 15,
      width: 125,
      height: 80,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 9,
    },
    titleText: {
      fontSize: 30,
      color: '#545454',
      fontWeight: 'bold'
    },
  });

  const ListItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.itemView, {
          backgroundColor: item.backgroundColor,
          shadowColor: item.shadowColor,
        }]}
        activeOpacity={0.5}
        onPress={() => console.log('asa')}
      >
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.containerView}>
      <Text style={styles.titleText}>Buckets</Text>
      <SectionList
        // contentContainerStyle={}
        stickySectionHeadersEnabled={false}
        sections={data}
        renderSectionHeader={({ section }) => (

          <FlatList
            horizontal
            data={section.data}
            renderItem={({ item }) => <ListItem item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        )}
        renderItem={() => {
          return null;
        }}
      />
    </View>
  )
}