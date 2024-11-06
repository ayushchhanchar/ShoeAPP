import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { back } from 'react-native/Libraries/Animated/Easing'
import ProductBox from './Components/ProductBox'

const App = () => {
  return (
   <ScrollView>
    <View style={styles.HeaderBox}>
        <Text style={styles.Header}> My List</Text>
        <TextInput style={styles.Input} placeholder="Enter your name" />
    </View>
    <ProductBox />
   </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  HeaderBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  Header: {
    fontSize: 30,
    textAlign: 'left',
    paddingTop: 50,
    color:'black',
  },
  Input: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
  },
})