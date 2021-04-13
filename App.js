/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './Components/Screens/Home'
import Landing from './Components/Screens/Landing'
import Login from './Components/Screens/Login'
import Order from './Components/Screens/Order'
import Register from './Components/Screens/Register'
import Trade from './Components/Screens/Trade'
import Profile from './Components/Screens/Profile';
import MyPickups from './Components/Screens/MyPickups'
import Help from './Components/Screens/Help';
import Address from './Components/Screens/Address';
import Add_address from './Components/Screens/add_address';
import Select_address from './Components/Screens/Select_address';
import CustomSidebarMenu from './Components/Screens/CustomSidebarMenu';
import Citylist from './Components/Screens/Citylist';

const Stack = createStackNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};


const App: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={Landing}>
          <Stack.Screen name="Landing" component={Landing} options={{ title: 'Landing' ,headerShown:true}} />
          <Stack.Screen name="Home" component={Home}  />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Trade" component={Trade} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Your Pickups" component={MyPickups} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="add_addr" component={Add_address} />
          <Stack.Screen name="Select_address" component={Select_address} />
          <Stack.Screen name="Citylist" component={Citylist} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
