import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Button color='#bbb'
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
<Button style={buttonStyle}
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
<Button style={styles.buttons}
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
<Button style={styles.buttons}
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
        <Text >Open up App.js to start working on your app!</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    );
  }
}

const buttonStyle = {
  backgroundColor: "#bbb"
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
    }
    
});
