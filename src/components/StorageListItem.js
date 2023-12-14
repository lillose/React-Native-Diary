import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, Alert } from "react-native";
import { format, formatDistanceToNow, isAfter } from 'date-fns';

function truncate(text) {
  const regexPattern = String.raw`[\r\n]+`;
  const regex = new RegExp(regexPattern, 'g');
  const replaced = text.replace(regex, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
};

function StorageListItem({ log }) {
  const { title, body, date, futuredate, emoji } = log;
  const navigation = useNavigation();
  const onPress = () => {
    const today = new Date();
    const isFutureDate = isAfter(new Date(futuredate), today);

    if (isFutureDate) {
      Alert.alert('오늘은 열 수 없습니다. 기다려주세요.');
    } else {
      navigation.navigate('Writing', { log });
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: '#ededed' }}
      onPress={onPress}>
      <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
      <Text style={styles.futuredate}>{new Date(futuredate).toLocaleDateString()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 14,
    color: '#101010',
    marginBottom: 8,
  },
  futuredate: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default StorageListItem;
