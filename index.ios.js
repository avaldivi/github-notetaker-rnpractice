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
  Navigator,
  View,
  Animated,
  ScrollView
} from 'react-native';

import Search from './App/Components/Search';
import Main from './App/Components/Main';
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

  configureScene(route){
    if(route.sceneConfig) {
      return route.sceneConfig
    } else {
      return ({
        ...Navigator.SceneConfigs.HorizontalSwipeJumpRight,
        gesture: {}
      });
    }

  }
  renderScene(route, navigator) {
    var globalProps = {navigator}
    switch(route.id) {
     case 'Search':
      return (
        <Search navigator={navigator}/>
      )
     case 'Main':
      return (
        <Login navigator={navigator}/>
      )
    }
  }
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

    if (this.state.userLoaded) {
      return (
        <Navigator
          initialRoute={{
            id: this.state.initialView
          }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          />
      );
    } else {
      return null
    }
  }
}


AppRegistry.registerComponent('FirstRNProject', () => FirstRNProject);
