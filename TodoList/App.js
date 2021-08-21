import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './screens/TodoList';
import ZipCodeFinder from './screens/ZipCodeFinder';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <ZipCodeFinder/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
  },
});
