import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet,Image} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../../utils/animation';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 4);
import { TouchableOpacity } from 'react-native';


const DATA = [];
for (let i = 0; i < 5; i++) {
  DATA.push(i)
}
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

class Slider extends Component {
  
  state = {
    index: 0,

  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
   
  }


  _renderItem({ item }) {


    return (
      <View  style={styles.itemContainer}>
        <TouchableOpacity
  onPress={()=>{
    this.props.nav.navigate('Select_address',{Item :Materials[item].name})
  }}
          >
        <Image
        
        resizeMode='cover'
        style={styles.tinyLogo}
        source={Materials[item].pic}
        
      />
      </TouchableOpacity>
          </View>
    );
  }
  
  render() {
    return (
      <View>
        
        <Carousel
        
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        />
        <Text style={styles.counter}
        >
        
        <Text style={{}}>We Deal with {Materials[this.state.index].name}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  tinyLogo:{
    width:ITEM_WIDTH,
    height:ITEM_HEIGHT
  },
  counter: {
    
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text:{
    fontSize:17,
    textAlign:'center',
    marginTop:10,


  }
});

export default Slider;