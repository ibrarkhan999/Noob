
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNav from './src/navigations/AppNav';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.main}>
        <AppNav />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
