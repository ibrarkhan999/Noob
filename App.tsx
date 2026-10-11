import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AppNav from './src/navigations/AppNav'


export default function App() {
  return (
  <SafeAreaView style={styles.safeArea}>

    <View style={styles.container}>
      <NavigationContainer>
        <AppNav/>
      </NavigationContainer>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'green'
  },
  container:{
    flex:1,
    backgroundColor:'yellow'
  }

})