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

import Search from './App/Components/Search';
import Main from './App/Components/Main';
import SignUp from './App/Components/SignUp';
import * as firebase from 'firebase';
import Firebase from './App/Lib/firebase';
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
  constructor(props){
    super(props)
    this.state = {
      initialView : null,
      userLoaded: false
    }

    this.getInitialView = this.getInitialView.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(Firebase.config())
    this.getInitialView();
  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {
      let initialView = user ? 'Search' : 'Main'

      this.setState({
        userLoaded: true,
        initialView
      })
    })
  }

  // componentWillMount() {
  //   this.animated = new Animated.Value(0);
  // }

  render() {
    const { navigate } = this.props.navigation;

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

    if (this.state.userLoaded) {
      return (
        <View>
          <Text> Hello! </Text>
          <Button
          onPress={() => navigate('Main')}
          title= "Login"/>
          </View>
      );
    }
  }
}

FirstRNProject = StackNavigator({
  Main: { screen: Main},
  SignUp: { screen: SignUp},
  Search: { screen: Search}
})

AppRegistry.registerComponent('FirstRNProject', () => FirstRNProject);
