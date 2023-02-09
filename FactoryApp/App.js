import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, LogBox, View} from 'react-native';
import ScanScreen from './src/screens/ScanScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ScanScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
