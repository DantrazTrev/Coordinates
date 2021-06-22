import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Coords({data}) {
    const {name,coord:{lat,long}} = data
    return (
        <View>
            <Text> {name} </Text>
            <Text> {lat} {long} </Text>
        </View>
    )
}

const styles= StyleSheet.create({

})