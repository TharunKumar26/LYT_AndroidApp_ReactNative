import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
var width = Dimensions.get('window').width;
import firebase from '../Db/db';
import { useNavigation } from '@react-navigation/native';

var DATA_1 = [];
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Name',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Gender',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Email Id',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Password',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Phone Number',
  },
];



const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);


class Profile_data_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      loaded: true,
    };

  }
  componentDidMount() {
    
    
    firebase
      .database()
      .ref('Orders')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};

        let todoItems = { ...data };
        
        this.setState({
          details: todoItems,
          loaded: false,
        });
      })
  }

  render() {
    var { details } = this.state;



    return (

    <View>
        {!this.state.loaded ?
        <View>
    
      <List_data data={this.state.details} />
      </View>
      : <Text> Loading </Text>
        }
       
  </View>
    );
  }
}

const List_data= (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.add2 === selectedId ? "#6e3b6e" : "#f9c2ff";
    {console.log("item")}
    {console.log(item)}
    return (
      
      <Item
        item={item}
        onPress={() => setSelectedId(item.add1)}
        style={{ backgroundColor }}
        
      />
     
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.landmark}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
 
  item: {
    padding: 12,
    color:'red'
  
  },
  title: {
    color:'red',
    fontSize: 15,
  },
});

export default Profile_data_1;
