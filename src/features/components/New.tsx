import { StyleSheet, Text ,View} from 'react-native';
import React from 'react';


interface Bio {
  name:string
  age:number 
  education:string
}

export default function New(bio:Bio) {
  return (

<View style={styles.main}>
  <Text style={styles.txt}>i am {bio.name}</Text>
  <Text style={styles.txt}>i am {bio.age}yrs Old</Text>
  <Text style={styles.txt}>{bio.education}</Text>

</View>

  );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'aqua',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:30,
        color:'black',
        fontWeight:'500',
        
    }
});
