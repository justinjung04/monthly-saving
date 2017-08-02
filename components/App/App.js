import React, { PureComponent } from 'react';
import { Text, TouchableHighlight, View, Alert } from 'react-native';
import s from './styles';

export default class App extends PureComponent {
  constructor() {
    super();
    this.onPressButton1 = this.onPressButton1.bind(this);
    this.onPressButton2 = this.onPressButton2.bind(this);
    this.state = {
      data: 'n/a'
    };
  }

  onPressButton1() {
    Alert.alert('pressed!');
  }

  onPressButton2() {
    Alert.alert('pressed!');
  }

  render() {
    return (
      <View style={s.view}>
        <Text style={s.text}>Proof of Concept</Text>
        <TouchableHighlight style={s.button} onPress={this.onPressButton1}>
          <Text>Get data from the sheet</Text>
        </TouchableHighlight>
        <TouchableHighlight style={s.button} onPress={this.onPressButton2}>
          <Text>Update data in the sheet</Text>
        </TouchableHighlight>
        <Text style={[s.text, s.data]}>{this.state.data}</Text>
      </View>
    );
  }
}
