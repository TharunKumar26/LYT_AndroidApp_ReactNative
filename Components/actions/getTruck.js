
import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';

import firebase from '../Db/db'

const styles = StyleSheet.create({
  
  tinyLogo: {
    width: 80,
    height: 80,
    
},
  
});
import { useNavigation } from "@react-navigation/native"


export default function Truck() {

const navigation = useNavigation();

  const handleclick=()=>{
    
    if(firebase.auth().currentUser){

    navigation.navigate('Trade')
    
  }
  else{
    alert("Please Login To Continue")
  }
  }

  
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleclick}>
      <Image
        resizeMode='contain'
        style={styles.tinyLogo}
        source={require('../../Assets/truck.png')}
      />
      </TouchableOpacity>
      <Text style={styles.logo_text} >
          
          </Text>
    </View>
  );
}
