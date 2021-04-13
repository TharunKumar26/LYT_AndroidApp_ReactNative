import { View } from 'native-base'
import React, { Component } from 'react'
import {StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import firebase from 'firebase';
import Loading from '../blocks/Loading';
export default class Citylist extends Component {

    constructor(props){
        super(props)
        this.state={
            loading: true,
            data :[]
        }
    }
    componentDidMount() {
        firebase.firestore().collection('cities').get().then((querySnapshot)=>{
            let dat = [];

            querySnapshot.forEach(res =>{
                dat.push(res.data())  
               
                if(dat.length == querySnapshot.size){
                    this.setState({
                        loading: false,
                        data:dat,
                       
                    
                    })
                }  
            })
              
        })
    }

    render() {
        if(this.state.loading){
            return <Loading />
        }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>We are so Delighted to serve you</Text>
                <Text style={styles.text_desc}>We are so much excited as you to exapand our network further</Text>
                <Text style={styles.text_desc}>Currently We are Serving in</Text>
                <FlatGrid
      
                    itemDimension={130}
                    data={this.state.data}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    spacing={10}
                    renderItem={({ item }) => (
                         <View 
                        
                        style={styles.itemContainer}>
                        
                          <Text style={{
                              textAlign:'center',
                              fontSize: 18,
                              color:'blue'
                          }}>{item.city}</Text>
                            
                        
                        </View>
                        )} 
                />
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    text:{
        textAlign:'center',
    
        padding:10,
        fontSize:20,
        borderWidth:1,
        borderColor:'green',
        backgroundColor:'lightblue'
        

    },
    itemContainer:{
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        borderWidth:0.5,
        paddingVertical:5,
        width: Dimensions.get('window').width*0.43,
        borderRadius: 2,
   
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
    text_desc:{
        fontSize:15,
        padding:10,
        textAlign:'center'
    }
})
