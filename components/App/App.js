import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import s from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={s.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={s.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
