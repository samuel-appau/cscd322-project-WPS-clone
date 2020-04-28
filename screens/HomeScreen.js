
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Ionicons} from  '@expo/vector-icons'


export default function HomeScreen() {
  return (
    <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
      <ScrollView>
      <View  style={{
        padding:10,
        height:120,
        width:"95%",
        borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'seagreen',
        padding:20,
        borderRadius:10,
        marginLeft:9.5
        }}>


        <Text style={{color:'white'}}>
            Report any case when you start to experience the symptoms of covid-19
        </Text>

      </View>

      <View style={{padding:10,
        height:140,
        width:"95%",
        
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginLeft:9.5}}>
        <View style={{flexDirection:'row',marginTop:-10,marginLeft:-120}}>
           <Ionicons name="ios-globe"  size={35}/>
           <Text style={{fontWeight:'bold',fontSize:20,marginTop:8,marginLeft:6}}>World Statistics</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:20}}>
          <View style={{borderRightWidth:1,height:50,flex:5}}>
              <Text style={{color:'blue'}}>Confirmed</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>2,994,761</Text>
            </View>
            
            <View style={{borderRightWidth:1,height:50,flex:5}}>
              <Text style={{color:'green',marginLeft:10}}>Recovered</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>878,820</Text>
            </View>

            <View style={{height:50,flex:5}}>
              <Text style={{color:'red',marginLeft:10}}>Deaths</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>206,992</Text>
            </View>

          </View>

       
      </View>

      <View  style={{height:190,
        width:"95%",
        
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginLeft:9.5}}>
        <View style={{flexDirection:'row',marginTop:-20,marginLeft:-120}}>
           <Ionicons name="ios-globe"  size={35}/>
           <Text style={{fontWeight:'bold',fontSize:20,marginTop:8,marginLeft:6}}>Statistics</Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <View style={{borderRightWidth:1,height:120,flex:5}}>
          <Text style={{color:'blue'}}>Confirmed</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>1,550</Text>
              
              <Text style={{color:'gold',marginTop:20}}>Active</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>1,384</Text>
            </View>
            
            <View style={{borderRightWidth:1,height:120,flex:5}}>
              <Text style={{color:'green',marginLeft:10}}>Recovered</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>155</Text>
              <Text style={{color:"brown",marginTop:20,marginLeft:10}}>Critical</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>4</Text>
            </View>

            <View style={{height:120,flex:5}}>
              <Text style={{color:'red',marginLeft:10}}>Deaths</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>11</Text>

              <Text style={{color:'#f14897',marginTop:20,marginLeft:10}}>Tests</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>100,622</Text>
            </View>

          </View>

          </View>

    
          </ScrollView>
    </View>

  );


 

  }

  HomeScreen.navigationOptions = {
    title: 'Covid-19 Tracker',
  };