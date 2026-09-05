import { StyleSheet, TouchableOpacity, View,Text, Alert } from 'react-native'
import React from 'react'


export default function Btn() {
    const handleMagic = () => {
        Alert.alert('Fuck You')
    }
  return (


    <View style={styles.main}>
        <TouchableOpacity style={styles.magic} onPress={handleMagic}>
            <Text style={styles.magicTxt}>Magic</Text>
        </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    magic:{
        backgroundColor:'yellow',
        width:250,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    magicTxt:{
        color:'red',
        fontSize:20,
        fontWeight:500
    },
    main:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#100057',
        flex:1
    },
})