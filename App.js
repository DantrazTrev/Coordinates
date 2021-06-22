import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import Coords from './components/Coords'
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

export default function App() {

  const [curcor,setCor] =useState({lat:'',long:''}) 

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
 
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        seterr("Well the weatherman doesn't know where du are");
        return;
      }
      const loc = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = loc.coords;
      setCor({
        lat:latitude,
        long:longitude
        
      })

    } catch (error) {
      //Do something
     }

  };


  return (
    <View style={styles.container}>
      <View style={styles.Coords}>
      <Text style={styles.heading}>Your Coordinates</Text>
        <Coords data={{name: 'Home',coord:curcor}}/>
        {/*Old Coordinates*/}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  Coords:{

    paddingTop:80,
    paddingHorizontal:20,


  },
heading:{
  fontSize:24,
  fontWeight:'bold'

}
});
