import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // 0.16.0


export default class AppCheckbox extends Component {
  state = {
    checked: false,
  };

  render() {
    return (
     
        <CheckBox

          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

    );
  }
}

const styles = StyleSheet.create({
});
