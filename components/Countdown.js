import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function Countdown({running}) {
  return (
    <View style={styles.container}>
      <CountDown
        until={60 * 2 + 10}
        digitStyle={styles.digitStyle}
        timeToShow={['H', 'M', 'S']}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={18}
        running={running}
      />
      <View style={styles.switch}>
        <Image
          source={require('../assets/alarm-clock.png')}
          style={styles.clock}
        />
        <Image source={require('../assets/switch1.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 8,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#D8D8D8',
  },
  digitStyle: {
    backgroundColor: 'red',
  },
  switch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  clock: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    margin: 10,
  },
  image2: {
    height: 70,
    width: 80,
  },
});
