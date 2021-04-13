import * as React from 'react';
import { useState, useRef,useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Animated
  } from 'react-native';

//importing Component Blocks
import  Pickup  from "../blocks/Pickup";
import Menu from "../blocks/Menu";
import ShowCase from '../blocks/Showcase'
import Slider from '../blocks/slider'
import Stats from '../actions/stats';

import  Icon from 'react-native-vector-icons/Ionicons';
import Profile_data_1 from '../actions/GetProfiledata';
import Nav_menu from '../blocks/Menubar';

import { Container,Left, Header, Content,Button, Spinner } from 'native-base';


export default function Home({navigation}) {
    const [welcometext, setwelcometext] = useState('Welcome User');
    const [menupressed, setmenupressed] = useState(false);
    const menutoggle = () => {
      setmenupressed(!menupressed);
    };
  
    return (

      <View style={{ flex: 1 }}>
     
        <View style={styles.container}>
        
        <View style={menupressed ? styles.menuclose : styles.menubutton}>
          {!menupressed ? (
            <Icon onPress={menutoggle} name="menu" size={35} />
          ) : (
            <Icon onPress={menutoggle} name="close" size={35} />
            )}
        </View>
        <View style={menupressed ? styles.menushow : styles.menuhide}>
          <Menu />
        </View>
          <View style={styles.logo_con}>
            
           
              <Text
                style={styles.logo_text}
                onPress={() => navigation.navigate('Home')}>
                Make your life Trash less {'\n'}With the LYT
              </Text>
          
          </View>
          <View style={styles.main_con2}>
            <View>
          
             <Pickup />
             
             <Stats nav={navigation} />

            </View>
            <View>
             
             
             
            </View>
          </View>
  
          <View style={styles.loc_con}>
         
            <Slider nav={navigation} />
          </View>
        </View>
     
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      flex: 1,
    },
  
    logo_text: {
      marginLeft: 15,
      marginTop: 60,
      color: 'black',
      fontSize: 20,
    },
    loc_con: {
      shadowColor:'black',
      shadowRadius:10,
      shadowOffset:{
        height:1,
        width:100
      },
      height:200
  
     
    },
  
    logo_con: {
      height: 150,
      backgroundColor: '#77d169',
    },
    main_con2: {
      backgroundColor: 'white',
    },
    menubutton: {
      width: 400,
      height:50,
      justifyContent:'center',
      position: 'absolute',
      zIndex: 5,
      backgroundColor:'#77d169',
      shadowRadius: 0,
      borderWidth:0.1,
      
      backgroundColor:'green'
      
    },
    menuclose: {
      width: 400,
      backgroundColor:'green',
      position: 'absolute',
      justifyContent:'center',
      zIndex: 11,
      borderWidth:0.1,
      height:50,
      fontSize: 15,
     
      
    },
    menuhide: {
      width: 0,
      height: 100,
      backgroundColor: 'black',
      position: 'absolute',
      justifyContent: 'center',
    },
    menushow: {
      width: 300,
     
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 10,
      
    },
  });