import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Coords({ data }) {
  const {
    name,
    coord: { lat, long },
  } = data;
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.Text}> {name} </Text>
        
        <Text style={styles.smallText}>
          {lat}°, {long}°
        </Text>
        </View>
    
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
      backgroundColor:"white",
      padding:15,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:30,  
      elevation:4,
      alignItems:'center',
      shadowColor:"black",
      shadowOpacity:0.8,
      shadowRadius:50,

   

  },
 
  square: {
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity: 0.4,
    borderRadius:50

  },
  Text: {
      fontSize:19,
      fontWeight:"bold",
      color:'dodgerblue',
      paddingBottom:10,
  },
  smallText: {
    fontSize:15,
    fontWeight:"100",
    color:'grey',
  },
  circular:{
      width:12,
      height:12,
      borderColor:"dodgerblue",
      borderWidth:2,
      borderRadius:5,
  },
});
