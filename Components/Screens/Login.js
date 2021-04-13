import React, { Component } from 'react'
import {View, Text, Button, TextInput,StyleSheet,Image,TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { useNavigation } from "@react-navigation/native"
import Loading from '../blocks/Loading';


export class Login extends Component {


   
    constructor(props)
    {
        super(props);
        this.state={
            email : '',
            password:'',
            Loading:false,
            message:'',

        }
        if(firebase.auth().currentUser){
          
        this.props.navigation.navigate('Home')
      }
        
        this.onLogin = this.onLogin.bind(this)
    }

    async onLogin(){

        this.setState({Loading: true})
        const{email,password} = this.state;
        try{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result)=>{
            
            this.props.navigation.navigate('Home')
            
        })
        .catch((error)=>{
            alert(error)
            console.log(error);
        })
        }
        catch(err){
            alert("Check your connectivity and reload the app")
        }

    }
    
    render() {
        return (
            this.state.Loading ? <Loading /> :
            <View style={{paddingTop:100,padding:17,flex:1,backgroundColor:'white'}}
            >   
               
                <TextInput
                style={{ backgroundColor: '#ededed',color:'black', height: 60,padding:5 }}
                value= {this.state.email}
                    placeholder="Email"
                    onChangeText={(email)=> this.setState({email})}
                />
                  <TextInput
                  style={{ backgroundColor: '#ededed',color:'black', height: 60,padding:5,marginTop:10 }}
                    placeholder="PWD"
                    onChangeText={(password)=> this.setState({password})}
                />
             
              
                <Button
                style={{padding:15}}
                onPress={()=>{this.onLogin()}}
                title='Login'
                />

                <View style={styles.help_con}>
                    <Text > Don't have an Account </Text>
                    <Text
                    onPress={()=>{
                        this.props.navigation.navigate('Register')
                    }}

                    style={{textDecorationLine:'underline'}}>Register Here</Text>
               
                    
                </View>
                <View style={styles.help_con1}>
                    <Text style={styles.text}> Need Assistance ? </Text>
                    <Text
                    onPress={()=>{
                        this.props.navigation.navigate('Register')
                    }}

                    style={{textDecorationLine:'underline'}}>Reset password</Text>
               
                    
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

export default Login

const styles = StyleSheet.create({
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