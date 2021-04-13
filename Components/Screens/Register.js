import React, { Component } from 'react'
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import firebase from '../Db/db'



export class Register extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            email : '',
            password:'',
            fullName:''

        }
        
        this.onsignup = this.onsignup.bind(this)
    }

   async onsignup(){
        
      
        const{email,password,fullName} = this.state;
        
     try{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result)=>{

          
              
        
            const uid = result.user.uid
            const data = {
                    id: uid,
                    email : email,
                    fullName : fullName,
                    date : firebase.firestore.FieldValue.serverTimestamp()
                };
                
            firebase
              .firestore()
              .collection('users')
              .doc(uid)
              .set(
                data
              ).then(()=>{
                this.props.navigation.navigate('Login')
              }).catch((e)=>{
                        console.log(e)
              })
      
            
        })
        .catch((error)=>{
            alert(error)
        })
     }
     catch(err){
         alert(error)
     }

    }
    render() {
        return (
            <View style={{paddingTop:100,padding:17, backgroundColor:'white',flex:1}}
            >   
               <TextInput
                style={{ backgroundColor: '#ededed',color:'black', height: 60,padding:5 }}
                value= {this.state.fullName}
                    placeholder="Full Name"
                    onChangeText={(fullName)=> this.setState({fullName})}
                />
                <TextInput
                style={{ backgroundColor: '#ededed',color:'black', height: 60,padding:5,marginTop:10 }}
                value= {this.state.email}
                    placeholder="Email"
                    onChangeText={(email)=> this.setState({email})}
                />
                  <TextInput
                  style={{ backgroundColor: '#ededed',color:'black', height: 60,padding:5,marginTop:10 }}
                    placeholder="Password"
                    onChangeText={(password)=> this.setState({password})}
                />
             
              
                <Button
                style={{padding:15}}
                onPress={()=>{this.onsignup()}}
                title='SignUp'
                />
            

            <View style={styles.help_con}>
                    
                    <Text
                    onPress={()=>{
                        this.props.navigation.navigate('Register')
                    }}

                    style={{textDecorationLine:'underline'}}>Login Here</Text>
               
                    
                </View>
               

                <TouchableOpacity 
            onPress={()=>{
                this.props.navigation.navigate('Help')
                console.log('clicked')
            }}
            style={styles.contact}> 
            <Image
                resizeMode='contain'
                style={styles.tinyLogo}
                source={require('../../Assets/help.jpg')}
            />
            </TouchableOpacity>

            </View>
        )
    }
}

export default Register

var styles = StyleSheet.create({
    help_con:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 1,
        padding: 10,
        marginTop:20,
        shadowColor: 'black',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        backgroundColor: 'white',
        shadowRadius: 15,
        shadowOpacity: 1.0,
        elevation: 2,
        marginBottom: 10,
    },
    help_con1:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 1,
        padding: 10,
        marginTop:10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        backgroundColor: 'white',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 2,
        marginBottom: 10,
    },
    contact:{
        marginLeft:'auto',
        marginTop:'auto',
        padding:20
    },
    tinyLogo: {
        width: 80,
        height: 80,
    }
})