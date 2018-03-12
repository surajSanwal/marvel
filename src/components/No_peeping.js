import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {StyleSheet,Platform,View,BackgroundImage,TextInput,Text,Image,TouchableOpacity,Dimensions} from 'react-native'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'
export default class Start extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{flex:1}} onPress={()=>Actions.pop()}>
          <Image source={require('../Images/nopeeping.png')} style={{width:width*1,height:height*1}} resizeMode="cover"/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: "column",
  },

});
