import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View,Image, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Nav_menu from '../blocks/Menubar';


const Materials = [
    {id:1,
      name:'Steel',
      pic: require('../../Assets/steel.jpg')
    },
    
    {
      name:'Plastic',
      pic: require('../../Assets/plastic.jpg')
    },
    {
      name:'Iron',
      pic: require('../../Assets/iron.jpg')
    },
    {
      name: 'Medical Waste',
      pic: require('../../Assets/medical.jpg')
    },
    {
      name:'Paper',
      pic: require('../../Assets/paper.jpg')
    },
  
  ]


export default function Trade() {
  const navigation = useNavigation();
  const [items, setItems] = React.useState([
    { name: 'Paper', code: '#1abc9c',pic: require('../../Assets/paper.jpg')},
    { name: 'Iron', code: '#2ecc71' ,pic: require('../../Assets/iron.jpg')},
    { name: 'Medical waste', code: '#3498db', pic: require('../../Assets/medical.jpg') },
    { name: 'Plastic', code: '#9b59b6' ,pic: require('../../Assets/plastic.jpg')},
    { name: 'Steel', code: '#34495e' ,pic: require('../../Assets/steel.jpg')},
   
  ]);

  return (

    <View style={{flex:1}}>

    <FlatGrid
      
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>{navigation.navigate('Select_address',{Item : item.name})}} >
        <View 
        
        style={styles.itemContainer}>
         
            <Image
            resizeMode='cover'
            style={styles.tinyLogo}
            source={item.pic}
            
        />
         <Text style={styles.itemName}>{item.name}</Text>
         
        </View>
        </TouchableOpacity>
        
      )}
    /></View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  tinyLogo:{
      width:130,
      height:130
  },
  itemContainer: {
    justifyContent: 'center',
    alignContent:'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    textAlign:'center',
    justifyContent:'center'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});