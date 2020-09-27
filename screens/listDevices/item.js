import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import Countdown from '../../components/Countdown';

export default function Item({item}) {
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(60);

  const onStartPress = useCallback(() => {
    setRunning(true);
    // Đây là thầy fake 1 action để thay đổi thời gian, khi em có picker rồi thì chỉ cần dùng setStartTime thôi
    setTimeout(() => {
      setStartTime(20);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image1} style={styles.image1} />
      </View>
      <Countdown running={running} startingTime={startTime} />
      <Button onPress={onStartPress} title="Bắt đầu" />
      <TouchableOpacity onPress={() => setRunning(false)} style={styles.image}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 8,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'red',
  },
  titleContent: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image1: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
});
