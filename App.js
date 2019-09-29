import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomMenu from './navigation/bottomMenu'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>test1</Text>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
