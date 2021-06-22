import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import Coords from './components/Coords'
import { Platform, StyleSheet, Text, View ,KeyboardAvoidingView , TextInput, TouchableOpacity} from 'react-native';
import * as Location from 'expo-location'

export default function App() {

  const [curcor,setCor] =useState({lat:'',long:''}) 
  const [coords,setLC] = useState([])

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
       <Text style={styles.coords} >{curcor.lat}° , {curcor.long}°</Text>
        <Coords data={{name: 'Home',coord:curcor}}/>
        {/*Old Coordinates*/}
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
                <TextInput style={styles.input} placeholder={'Add this location'}  onChangeText={text => setTask(text)} />
        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
     
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

},
coords:{
  marginTop:40,
  textAlign:'center',
  fontSize:19,
  fontWeight:'800',
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: 'dodgerblue',

  borderWidth:0,
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
  elevation:2,
},
addText: {
  color:"white",
  fontSize:26,
  fontWeight:"500"
},


});
