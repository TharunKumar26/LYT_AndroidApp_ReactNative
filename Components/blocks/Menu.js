import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../Db/db'
import { ScrollView } from 'react-native';


var DATA = [
  {
    id: 'Home',
    title: 'Home',
  },
  {
    id: 'Trade',
    title: 'Trade Now',
  },
  {
    id: 'Your Pickups',
    title: 'My Pickups',
  },
  {
    id: 'Address',
    title: 'My Addresses',
  },
  {
    id: 'Profile',
    title: 'Profile',
  },
  {
    id: 'Faq',
    title: 'FAQ',
  },
  {
    id: 'Help',
    title: 'Contact Us',
  },
  {
    id: 'Logout',
    title: 'Logout',
  },
  
];



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Guest = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>
        Signed in as Guest {'   '}
        <Text
          onPress={(navigation) => {
            route.navigate('Login');
          }}>
          {' '}
          Login |
        </Text>
        <Text
          onPress={(navigation) => {
            route.navigate('Register');
          }}>
          {' '}
          Register
        </Text>
      </Text>
    </View>
  );
};

const Menu = () => {
  const navigation = useNavigation();
try{
  if(!firebase.auth().currentUser)
{
  
  DATA.splice(6,1)
}
else{
   DATA = [
  {
    id: 'Home',
    title: 'Home',
  },
  {
    id: 'Trade',
    title: 'Trade Now',
  },
  {
    id: 'Your Pickups',
    title: 'My Pickups',
  },
  {
    id: 'Address',
    title: 'My Addresses',
  },
  {
    id: 'Profile',
    title: 'Profile',
  },
  {
    id: 'Faq',
    title: 'FAQ',
  },
  {
    id: 'Help',
    title: 'Contact Us',
  },
  {
    id: 'Logout',
    title: 'Logout',
  },
];

}
}
catch{
  alert('Theres an error')

}
  const user_data = () => {
    firebase
      .database()
      .ref('Users/' + firebase.auth().currentuser)
      .on('value', async (querysnapshot) => {
        let dat = querysnapshot.val();
      
        this.setState({
          data: dat,
          load: false,
        });
      });
  };

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={async () => {
          if (item.id == 'Logout') {
            try {
              await firebase.auth().signOut();
            } catch (err) {
             
            }
            navigation.navigate('Landing');
          }
          else{
          navigation.navigate(item.id);
          }
        }}>
        <Item title={item.title} />
      </TouchableOpacity>
      <View style={styles.bottomline}></View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={styles.dp}></View>
      <View
        style={{
          marginLeft: 20,
          marginVertical: 10,
        }}>
        <Text>
          {' '}
          {firebase.auth().currentUser ? (
            firebase.auth().currentUser.email
          ) : (
            <Guest route={navigation} />
          )}
        </Text>
      </View>
      <SafeAreaView >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'white',
    height: Dimensions.get('window').height,
    borderRightWidth:2,
    elevation:2,

  },
  item: {
    
    padding: 8,
    marginVertical: 8,

    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  bottomline: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 16,
    opacity: 0.1,
  },
  dp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    margin: 20,
  },
});

export default Menu;
