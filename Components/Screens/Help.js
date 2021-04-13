import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Help() {
  const navigation = useNavigation();
  const [email, setemail] = useState('');

  
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: Dimensions.get('window').height * 0.2 }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          We'd Love to Help You {'\n'} Drop your Mail or Phone Number
        </Text>
      </View>
      <TouchableOpacity onPress={()=>{
       alert('Should call to our number')
      }}>
        <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={require('../../Assets/dial.png')}
        />
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
        <TextInput
          style={{
            backgroundColor: '#ededed',
            color: 'black',
            height: 60,
            padding: 15,
            width: Dimensions.get('window').width,
          }}
          value={email}
          placeholder="Email/Phone"
          onChangeText={(email) => setemail({ email })}
        />
      </View>
      <Button
        style={{ padding: 15 }}
        onPress={() => {
          this.onLogin();
        }}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 180,
    height: 180,
    
    margin: 50,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
