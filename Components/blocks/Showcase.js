import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ShowCase = () => {
    return (
      
      <View style={styles.container}>

        <Text
        style={{
          fontFamily:'Arial',
          fontSize:22,
          marginTop:15,
          color:'black',
          textShadowRadius:3,



        }}
        >
        We've Got You Covered
        </Text>
        <View style={styles.search}>
          <Text>
          
          </Text>
        </View>
        
      </View>
    );
};
const styles = StyleSheet.create({
  container:{
  flex:1,
  borderBottomColor:'black',
  borderBottomWidth:1,
  alignContent:'center',
  alignItems:'center',
 
  
   },
  search:{


  }
})

export default ShowCase