import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Maps from '../actions/Maps'
import firebase from '../Db/db'

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      note:'',
      loc:'',
      phone:'',
      showadd: true,
      type:this.props.route.params.Item,
      quantity:0
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

  On_select_address(){
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

  onSubmit() {
    if(firebase.auth().currentUser){

   

  this.setState({
      showadd: !this.state.showadd
    })
    if(!this.state.type || !this.state.quantity){
      alert('Please provide all Mandatory details')
    }
    else{
      try{

              firebase
              .firestore()
              .collection('Orders')
              .add(
                { userid: firebase.auth().currentUser.uid , confirmed : false, Rewards : 0, rating:0,quantity: this.state.quantity,
                  type: this.state.type,
                  note : this.state.note ? this.state.note : null,
                  address : this.props.route.params.data,
                  date : firebase.firestore.FieldValue.serverTimestamp()
                }
              ).then(()=>{
                alert('Pickup placed Succesfully')
                this.props.navigation.navigate('Your Pickups')
              }).catch((e)=>{
                        console.log(e)
              })
      
      }
      catch(e){
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
        <View>
          
          </View>
       
        
        <View style={styles.showadd}>
        <Card style={{padding:5}} >
         

           <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="Type"
            value={this.props.route.params.Item}
            onChangeText={(type) => this.setState({ type })}
          />
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
            }}
            placeholder="Note"
            onChangeText={(note) => this.setState({ note })}
          />
        
          <TextInput
            style={{
              backgroundColor: '#ededed',
              color: 'black',
              height: 60,
              padding: 5,
              marginTop: 5,
              
            }}
            placeholder="Estimated Quantity in Kgs"
            onChangeText={(quantity) =>{
              if(isNaN(quantity))
              {
                alert('Quantity must be in Numeric')
              }
              else{
                this.setState({quantity})
              }

            } }
          />
          <View style={{padding:10,marginLeft:'auto',marginRight:'auto'}}>
          <Text style={{}}>Estimated Rewards <Text style={{fontSize:17}}>{this.state.quantity * 10}</Text></Text>
          
          </View>

          <View style={{padding:10,marginLeft:'auto',marginRight:'auto'}}>
          <Text style={{}}>Estimated Pickup Date <Text style={{fontSize:17}}>Tomorrow 9PM</Text></Text>
          
          </View>
          <View
          style={{ marginTop: 10 }}
          >

          <Button
            
            onPress={() => {
              this.onSubmit();
            }}
            title="Next"
          />
          </View>
          
        
        </Card>
      </View>
      </View>
   
    );
  }
}

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'space-between',
   
  },
  paragraph: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',
  },
  showadd: {
    flex:1,
  paddingBottom:10
  },
 
});
