import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScanQRScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan QR Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScanQRScreen;
