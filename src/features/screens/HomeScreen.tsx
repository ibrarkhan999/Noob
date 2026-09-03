import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import New from '../components/New'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.main}>
      <New name='ibrar khan' age={24} education='Graduated'/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'blue',
    },
    main:{
        flex:1,
        backgroundColor:'grey'
    }
})