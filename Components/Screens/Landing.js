import * as React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase'

export default function Landing(props) {
  
  
  const navigation = useNavigation();

  if(firebase.auth().currentUser){
    
    
    navigation.navigate('Home')
  }

  return (
    <View style={styles.button_con}>
      <View >
      <Image
        
        style={styles.tinyLogo}
    
        source={require('../../Assets/lyt_logo.jpg')}
      />
      </View>
      <View style={styles.login}>
        <Button
          title="Register"
          color="black"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.login,{marginTop:30}}>
        <Button
          
          title="Login"
          color="red"
          onPress={() => navigation.navigate('Login')}
        />
        </View>
        <View style={styles.skip}>
        <Text style={{textDecorationLine: 'underline', fontSize:17}} onPress={() => navigation.navigate('Home')}>Skip</Text>
      </View>
      </View>
      <View style={styles.login}>
        
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  button_con: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },
  login: {
    paddingBottom: 10,
    padding: 20,
  },
  skip: {
    alignSelf: 'center',
  
    paddingTop:15,
    justifyContent:'flex-end',
    textDecorationLine: 'underline',
    textAlign: 'center',
    borderColor: 'grey',
  },
  tinyLogo: {
   
    alignSelf:'center',
    height: 200,
    resizeMode: 'contain'
   

  },
});

