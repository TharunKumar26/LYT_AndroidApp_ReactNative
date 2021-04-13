import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import Loading from '../blocks/Loading';

import { Rating, AirbnbRating } from 'react-native-elements';
import { ScrollView } from 'react-native';
export class MyPickups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      Loading: true,
      type:'',
      quantity:'',
      rating:'',
      status:'',
      rewards:'',
      data: [],
      Loading: true
    };
    if (!firebase.auth().currentUser) {
      alert('Please login to continue');
      this.props.navigation.navigate('Home');
    }

    this.onLogin = this.onLogin.bind(this);
  }
  componentDidMount() {
    
    let orders = [];
    try{
        firebase
        .firestore()
        .collection("Orders").where('userid','==',firebase.auth().currentUser.uid)
        .get()
        .then((querysnapshot) => {
          querysnapshot.forEach(doc=>{
            let d = {...doc.data(),id:doc.id}
            orders.push(d)
           
            
          },)
        })
        .then((res)=>{
          this.setState({data : orders })
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
    this.setState({ Loading: false });
    const { email, password } = this.state;
    console.log('test')
    try{
    await firebase
      .firestore()
      .collection("orders")
      .doc(firebase.auth().currentUser.uid)
      .then((result) => {
        console.log("aa",result)
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

  ratingCompleted(e, id){
    console.log(e,id)

    firebase.firestore().collection('Orders')
    .doc(id)
    .update({
      rating:e
    })
  
  }
 

  render() {
    var {data,Loading} = this.state;

    if(Loading){
      <Loading />
    }
    return (
      <ScrollView style={{ margin: 10 }}>
       
       
       
       
       
       {(!this.state.Loading ? 
    
    <View style={{ margin: 5 }}>
       
       {(data.length==0) &&  <Text style={{textAlign:'center'}}> You haven't placed any orders</Text>    }
          {
            
      Object.keys(data).map(key =>(
        
        <View style={styles.con}>
          
        <View class="Top_bar"></View>
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}> Pickup {data[key].type} </Text>
          <Text fontSize={20} style={{ marginLeft: 'auto', fontSize: 18 }}>
            {' '}
            {data[key].quantity} {' '}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.greendot}></View>
          <Text> {(data[key].confirmed)? 'Confirmed' : 'Pending'} </Text>
          <Text style={{ marginLeft: 'auto' }}>Waiting for Pickup</Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 15, marginLeft: 'auto', marginRight: 'auto' }}>
            Please Give feedback
          </Text>
          <Rating
            backgroundColor={'None'}
            onFinishRating={(e)=>{this.ratingCompleted(e, data[key].id)}}
            style={{ paddingVertical: 10 }}
            startingValue={data[key].rating}
            ratingCount={5}
          />
        </View>
      </View>
      ))
    }
    </View>
    :
      <Text>Still Loading</Text>
       )}
       
       
       
       
       
       
       
       
       
       
       
      </ScrollView>
    );
  }
}

export default MyPickups;

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
});
