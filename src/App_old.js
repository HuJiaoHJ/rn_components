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
import './exception_handler/guard_comp';
import CtachComp from './exception_handler/catch_comp';

setTimeout(() => {
  console.log('setTimeout ----------');
  // console.lo('------');
}, 3000);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CtachComp>
          <IconExapmle/>
        </CtachComp>
      </View>
    );
  }
}
