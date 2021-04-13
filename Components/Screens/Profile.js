import React, { Component } from 'react';
import { StyleSheet, Text, Button, View,TextInput } from 'react-native';
import Profile_data_1 from '../actions/GetProfiledata';


import firebase from '../Db/db';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      edit: false,
    };
    if(!firebase.auth().currentUser){
        
        this.props.navigation.navigate('Landing')
      }
   

  }




    
  render() {
    return (
      <View>
        <View style={styles.dp}>
        
        </View>
        <View>
          <Text>
            <Profile_data_1 />
          </Text>
        </View>

        <View style={{ zIndex: 1 }}>
          <Button
            onPress={() => {
              this.onLogin();
            }}
            title="Edit Profile"></Button>
        </View>

        <View style={this.state.edit ? styles.showEdit : styles.closeEdit}>
          <View style={{justifyContent:'flex-end',flexDirection:'column'}}>
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
             
              marginTop: 10,
            }}
            placeholder="User Name"
            onChangeText={(password) => this.setState({ password })}
          />
           <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              
              marginTop: 10,
            }}
            placeholder="Email Id"
            onChangeText={(password) => this.setState({ password })}
          />
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
            
              marginTop: 10,
            }}
            placeholder="Phone Number"
            onChangeText={(password) => this.setState({ password })}
          />
         
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              
              marginTop: 10,
            }}
            placeholder="PassWord"
            onChangeText={(password) => this.setState({ password })}
          />
            <Button
            
              onPress={() => {
                this.onLogin();
              }}
              title="SAVE"></Button>
          </View>
        </View>
        
        
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  showEdit: {
    width: 400,
    borderWidth:1,
  
    top: 150,
    padding:5,
    backgroundColor: 'white',
    position: 'absolute',

    alignSelf: 'center',

    zIndex: 20,
  },
  closeEdit: {
    width: 0,
  },
  dp: {
    margin: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'white',
  },
});
