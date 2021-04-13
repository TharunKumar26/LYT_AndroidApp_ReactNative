import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Maps from '../actions/Maps'
import firebase from '../Db/db'

export class Add_address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add1: '',
      add2: '',
      landMark:'',
      name:'',
      pincode:'',
      phone:'',
      showadd: true,
      phoneauth: false,
      phone:'',
      city:''
    };
   

    this.onLogin = this.onLogin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getPos = this.getPos.bind(this);
  }
  getPos=(data)=>{
    this.setState({
      loc:data
    })
  }

  onSubmit() {
    if(firebase.auth().currentUser){

   

  this.setState({
      showadd: !this.state.showadd
    })
    if(!this.state.name || !this.state.add1 || !this.state.add2 || !this.state.landMark || !this.state.phone || !this.state.city || !this.state.pincode ){
      alert('Please provide all Mandatory details')
    }
    else{
      try{

              firebase
              .firestore()
              .collection('address')
              .add({
               
                    add1 : this.state.add1,
                    add2 : this.state.add2,
                    landMark : this.state.landMark,
                    phone : this.state.phone,
                    pincode : this.state.pincode,
                    city: this.state.city,
                    name : this.state.name,
                    uid : firebase.auth().currentUser.uid,
                    date: firebase.firestore.FieldValue.serverTimestamp()
                  
             
              }).then(()=>{
                alert('Address added')
                this.props.navigation.navigate('Address')
              }).catch((e)=>{
                        console.log(e)
              })
      
      }
      catch(e){
        console.log(e)
        alert('There was an error')
      }
      
  
      /*
      this.props.navigation.navigate('PhoneAuthScreen', {
    add1 : this.state.add1, add2 : this.state.add2, landMark : this.state.landMark, note : this.state.note,
    phone : this.state.phone
        
  })
  */
    }
  }
  else{
    alert("Please Login to Continue")
    this.props.navigation.navigate('Login')
  }
  }



  onLogin() {
    
  }
  render() {
    return (


      
      
      <View style={styles.container}>
        
        
        <View style={styles.showadd}>
        

        <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
          
            }}
            
            placeholder="Name*"
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
          
            }}
            
            placeholder="Address 1 *"
            onChangeText={(add1) => this.setState({ add1 })}
          />

          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="Address 2 "
            onChangeText={(add2) => this.setState({ add2 })}
          />
           <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="LandMark"
            onChangeText={(landMark) => this.setState({ landMark })}
          />
          
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="Phone Number *"
            onChangeText={(phone) => this.setState({ phone })}
          />
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="Pin Code*"
            onChangeText={(pincode) => this.setState({ pincode })}
          />
           <View
        style={{

          // The solution: Apply zIndex to any device except Android
          ...(Platform.OS !== 'android' && {
            zIndex: 999
          })
          
        }}
      >
        <DropDownPicker
          items={[
            { label: 'Hyderabad', value: 'Hyderabad' },
            { label: 'Kadapa', value: 'Kadapa' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Chennai', value: 'Chennai' },
           
            
          ]}
          placeholder="Select a City"
          containerStyle={{height: 40}}
          style={{ backgroundColor: '#ffffff' }}
          dropDownStyle={{ backgroundColor: 'white' }}
          onChangeItem = {item => this.setState({
              city : item.value
          })}
        />
      </View>
    
      

         
        
       
      </View>
      <View style={{marginTop:'auto',paddingBottom:50}}>
      <Button
            style={{ marginTop:100 }}
            onPress={() => {
              this.onSubmit();
            }}
            title="Next"
          />
          </View>
      </View>
   
    );
  }
}

export default Add_address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
  paragraph: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',
  },
  showadd: {
  paddingBottom:10
  },
 
});
