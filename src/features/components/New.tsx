import { StyleSheet, Text ,View} from 'react-native';
import React from 'react';

export default function New() {
  return (

<View style={styles.main}>
  <Text style={styles.txt}>New</Text>
  <Text style={styles.txt}>New</Text>
  <Text style={styles.txt}>New</Text>
  <Text style={styles.txt}>New</Text>
</View>

  );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'yellow',
        flex:1
    },
    txt:{
        fontSize:30,
        color:'black'
    }
});
