import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';


export default class  LoadingScreen extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChange(user =>{
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }
    render(){
  return (
    <View style={styles.container}>
      <Text>Loading ....</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
