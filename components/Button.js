import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <View style={styles.mainButton}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7267D3',
    borderWidth: 1,
    borderRadius: 100,
    width: '30%',
    margin: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
