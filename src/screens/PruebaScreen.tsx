import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList
} from 'react-native';

export default function PruebaScreen() {
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
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  });

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
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

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  }
];
