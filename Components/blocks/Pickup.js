import * as React from 'react';
import { Text,Button,TouchableOpacity, View,StyleSheet, Image } from 'react-native';
import Truck from '../actions/getTruck'
export default function Pickup (){
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
      
        <View style={styles.border}>
        <Truck />
        <Text style={styles.text}>
        {'Below 5 Kgs'}
        </Text>
        </View>


        <View style={styles.border}>
        
        <Truck />
        <Text style={styles.text}>
        {'5 - 10 Kgs'}
        </Text>
        </View>
        
        <View style={styles.border}>
        <Truck />
        <Text style={styles.text}>
        {'Above 10 Kgs'}
        </Text>
        </View>
       
        
      </View>
    );
};
const styles = StyleSheet.create({
  container:{ flexDirection: 'row',justifyContent:'space-around',
              paddingVertical:5
              
            
            },

  text:{
    textAlign:'center',
    textDecorationLine:'underline'
  },
  border:{
        
     
        

  }
})
