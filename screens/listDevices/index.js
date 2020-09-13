import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';

import Item from './item';
import DATA from '../../data/data';

export default function ListDeviceScreens() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vsmart On/Off Devices</Text>
      <View style={styles.divider} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <Item item={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  divider: {
    width: '100%',
    backgroundColor: 'gray',
    height: 1,
  },
});
