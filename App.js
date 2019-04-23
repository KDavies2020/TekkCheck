import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class App extends React.Component {


  render() {
    return (
      
      <View style={styles.container}>
            <FlatHeader style={styles.header}
    leftIcon={<Icon name="futbol-o" size={30} color="#FFF" />}
    leftIconHandler={() => {
        console.warn('Icon Pressed');
    }}
    rightText="TekkCheck"
    rightTextHandler={() => {
        console.warn('Text Pressed');
    }}
    large
/>

       
      <Button color='#bbb'
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Start Your Subscription"
/>
<Button 
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Join Challenge"
/>

        <Text >Open up App.js to start working on your app!</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    );
  }
}


//comment added
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    minWidth: 50,
    borderColor: 'gray',
    borderWidth: 1
    },
    header: {
      marginTop: -400,
      backgroundColor: "green"

    }
    
});
