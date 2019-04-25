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

       <View style={styles.topBox}>
      <Button color='#bbb' 
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Start Your Subscription"
/>
</View>
<View style={styles.secondBox}>
<Button 
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Join Challenge"
/>
</View>
<View style={styles.boxes}>
      <Text>Training Sock Level</Text>
      <Text style={{marginLeft: 78}}>Training Streak</Text>
</View>
<View style={styles.bottomBox}>
      <Text style={{alignSelf: 'center'}}>Total Time Trained</Text>
</View>

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
    header: {
      marginTop: -300,
      height: 60,
      backgroundColor: "green"

    },
    //are these two identical? If so - remove one.
    topBox: {
      marginTop: 50,
      height: 50,
      width: 300,
      borderBottomWidth: .5,
      borderTopColor: '#bbb',
      borderBottomColor: '#bbb',
      
    },
    secondBox: {
      height: 50,
      width: 300,
      borderBottomWidth: .5,
      borderTopColor: '#bbb',
      borderBottomColor: '#bbb',
      marginTop:3,
    },
    boxes: {
      height: 50,
      width: 300,
      flexDirection: 'row',
      borderBottomWidth: .5,
      borderTopColor: '#bbb',
      borderBottomColor: '#bbb',
      marginTop:3,
    },
    bottomBox: {
      height: 50,
      width: 300,
      borderBottomWidth: .5,
      borderTopColor: '#bbb',
      borderBottomColor: '#bbb',
      marginTop:3,
    }
    
});
