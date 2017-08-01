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
  ScrollView,
  Router
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { createRootNavigator } from "./App/Config/Router";
import { isSignedIn } from "./App/Config/auth";

import Search from './App/Screens/Search';
import Main from './App/Screens/Main';
import SignUp from './App/Screens/SignUp';
//import * as firebase from 'firebase';
//import Firebase from './App/Lib/firebase';
import Header from "./App/Screens/Helpers/Header";

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

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {

    //This uses Auth.js
    const { checkedSignIn, signedIn } = this.state;

    //This uses Auth.js
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
    }
  }

AppRegistry.registerComponent('FirstRNProject', () => FirstRNProject);
