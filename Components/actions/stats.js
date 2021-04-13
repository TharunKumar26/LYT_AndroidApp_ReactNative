
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import firebase from 'firebase';


import React, { Component } from 'react'
import Loading from '../blocks/Loading'

export default class Stats extends Component {

  constructor(props){
    super(props);
    this.state = {
      cities: '',
      loading: true,
      users:''

    }
    console.log(props.nav)
  }

  componentDidMount(){
    firebase.firestore().collection('cities').get().then((querySnapshot)=>{
      firebase.firestore().collection('users').get().then((snapshot)=>{
        this.setState({
          loading: false,
          cities:querySnapshot.size,
          users:snapshot.size
        })
      })
      
    })
  }
  render() {
 

    if(this.state.loading){
      return <Loading />
    }
    return (
      <View  style={styles.container}>

       <TouchableOpacity
        onPress={()=>{this.props.nav.navigate('Citylist')}}
      
       > 
      <Text
        style={{
          fontFamily: 'sanserif',
          fontSize: 20,
          lineHeight: 40,
        }}>
        Lyt actively working in <Text 
         style={{ color: 'red',textDecorationLine:'underline' }}>{this.state.cities}</Text>{' '}
        cities
        {'\n'}
        <Text style={{ color: 'red',textDecorationLine:'underline' }}>{this.state.users}</Text> People are actively using LYT
      </Text>
      </TouchableOpacity>
      <View style={styles.search}></View>
    </View>
    )
  }
}



const Stats1 = () => {

  return (
    // Try setting `flexDirection` to `column`.
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'sanserif',
          fontSize: 20,
          lineHeight: 40,
        }}>
        Lyt actively working in <Text style={{ color: 'red',textDecorationLine:'underline' }}>1000</Text>{' '}
        cities
        {'\n'}
        <Text style={{ color: 'red',textDecorationLine:'underline' }}>1000</Text> People are actively using LYT
      </Text>
      <View style={styles.search}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#77d169',
    marginVertical: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: 'white',
    shadowRadius: 20,
    shadowOpacity: 2.0,
    elevation: 5,
  },
  search: {},
});
