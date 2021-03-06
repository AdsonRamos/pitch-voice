import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Rules from './Rules'
import PreGame from './PreGame'

export default class Intro extends React.Component{
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#23BAA7',
    },
  };

  render(){
      return (
        <View style={styles.container}>
          <View style={styles.btnRules}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Rules')}>
              <Text style={{color: '#23BAA7', fontSize: 30}}>?</Text>
            </TouchableOpacity> 
          </View>
          <Text style={styles.welcome}>Pitch Voice</Text>
          <View style={styles.btnNew}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PreGame')}>
              <Text style={{color: '#ffffff', fontSize: 20}}>Novo Jogo</Text>
            </TouchableOpacity> 
          </View>   
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4E555D',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    welcome: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      fontWeight:'600',
      color: '#ffffff',
      position: 'absolute',
      bottom: 420,
    },
    btnRules: {
      flex: 0,
      position: 'absolute', 
      right: 10, 
      top: 10,
      justifyContent: 'center',
    },
    btnNew: {
      flex: 0,
      width: 120,
      height: 60,
      position: 'absolute',
      bottom: 150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#23BAA7',
      borderColor: '#23BAA7',
      borderRadius: 5,
      borderWidth: 1,
    }
  });
  