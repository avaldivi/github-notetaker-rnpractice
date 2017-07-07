/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { SignedOut } from "./App/Config/Router";

import Search from './App/Screens/Search';
import Main from './App/Screens/Main';
import SignUp from './App/Screens/SignUp';
//import * as firebase from 'firebase';
//import Firebase from './App/Lib/firebase';
import Octocat from "./octocat.png";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigator: {
    flex:1,
  },
  titleStyle: {
      marginBottom: 10
  },
  image: {
      width: 50,
      height: 50
  },
  header: {
      paddingTop: 30,
      alignItems: "center"
  },
  scrollView: {
      flex: 1
  }
});

export default class FirstRNProject extends Component {

  // componentWillMount() {
  //   this.animated = new Animated.Value(0);
  // }

  render() {
   

    // const hideImageInterpolate = this.animated.interpolate({
    //   inputRange: [0, 250],
    //   outputRange: [50, 0],
    //   extrapolate: "clamp",
    // })

    // const fontInterpolate = this.animated.interpolate({
    //   inputRange: [0, 250],
    //   outputRange: [24, 30],
    // })

    // const opacityInterpolate = this.animated.interpolate({
    //   inputRange: [0, 250],
    //   outputRange: [1, 0],
    //   extrapolate: "clamp"
    // });

    // const collapseInterpolate = this.animated.interpolate({
    //   inputRange: [0, 250],
    //   outputRange: [50, 0],
    //   extrapolate: "clamp"
    // })

    // const imageStyle = {
    //   width: hideImageInterpolate,
    //   height: hideImageInterpolate
    // }

    // const titleStyle = {
    //   fontSize: fontInterpolate
    // }

     return <SignedOut />; 
  }
}

AppRegistry.registerComponent('FirstRNProject', () => FirstRNProject);
