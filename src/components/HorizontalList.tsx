import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList
} from 'react-native';

export default function HorizontalList({
  data
}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 18,
      color: '#f4f4f4',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
      borderWidth: 1,
      width: 150,
      height: 100,
      // borderRadius: 10
    },
    itemPhoto: {
      width: 200,
      height: 200,
      borderRadius: 20
    },
    itemText: {
      marginTop: 5,
      color: 'white',
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: '20%'
    },
  });

  const ListItem = ({ item }) => {
    return (
      <View style={{
        margin: 10,
        borderRadius: 15,
        width: 150,
        height: 100,
        backgroundColor: item.backgroundColor,
        shadowColor: item.shadowColor,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 9,
      }}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
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