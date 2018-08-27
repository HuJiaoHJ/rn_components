/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import IconExapmle from './icon/example';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IconExapmle/>
      </View>
    );
  }
}
