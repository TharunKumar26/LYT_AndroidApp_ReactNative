import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import Loading from '../blocks/Loading';

import { Rating, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
export class Select_address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      Loading: false,
      add1:'',
      add2:'',
      landmark:'',
      pincode:'',
      phone:'',
      Loading: true,
      data:{}
    };
    console.log("hey", this.props.route.params)
    if (!firebase.auth().currentUser) {
      alert('Please login to continue');

      this.props.navigation.navigate('Home');
    }

    this.onLogin = this.onLogin.bind(this);
  }
  componentDidMount() {
    let addresses = [];
    try{
      console.log(firebase.auth().currentUser.uid)
      firebase
      .firestore()
      .collection("address")
      .where('uid','==',firebase.auth().currentUser.uid)
      .get()
      .then((querysnapshot) => {
        querysnapshot.forEach(doc=>{
          let d = {...doc.data(),id:doc.id}
          addresses.push(d)
         
          
        },)
      })
      .then((res)=>{
        this.setState({data : addresses })
        this.setState({Loading: false})
      
      })
      .catch((error) => { 
        console.log(error);
      });
    }
    catch(e){
      console.log(e)
      alert("please login")
    }


  }

  async onLogin() {
   
  }
   Add_address(params) {

     try {
    firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .update(
      address
    ).then(()=>{
      alert('Address added')
    }).catch((e)=>{
              console.log(e)
    })
     }
     catch(e){
       alert("An error occured, Please check connectivity or restart the App")
     }
      
  }

  render() {
    var {data} = this.state
    return (
      <View style={{ margin: 15 }}>




<View style={styles.Button}>
        <Text 
        onPress={()=>{
          this.props.navigation.navigate('add_addr')
        }}
        >Add adress</Text>
        </View>

{(!this.state.Loading ? 
    
    <View >
       
    
       {(data.length==0) &&  <Text style={{textAlign:'center'}}> You haven't added any address</Text>    }
       
          {
      Object.keys(data).map(key =>(
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Order', {data: data[key], Item : this.props.route.params.Item})}}>
       
        <View style={styles.con}>
          <View key={key.id}>
          <Text>{data[key].name }</Text>
            <Text>{data[key].add1 }</Text>
            <Text>{ data[key].add2  }</Text>
            <Text>{data[key].city }{'  '} {data[key].pincode}</Text>
            <Text>{data[key].phone}</Text>
            {console.log(data)}
           
          </View>
          </View>
          </TouchableOpacity>
      ))
    }</View>
    
    
    :
      <Loading />
       )}
       
       





















        

      

       

      </View>
    );
  }
}

export default Select_address;

const styles = StyleSheet.create({
  con: {
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    marginBottom: 10,
  },
  greendot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',

    alignContent: 'center',
  },
  container: {
    fontSize: 30,
    padding: 5,

    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'green',
  },
  paragraph: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',
  },
  showadd: {
    paddingBottom: 10,
  },
  Button:{
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: 'lightgreen',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    marginBottom: 10,

  }
});
