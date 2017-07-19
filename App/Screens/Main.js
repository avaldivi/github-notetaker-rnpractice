import React, { Component } from 'react';

//import { Button } 'react-native';

var api = require('../Utils/api');
var Dashboard = require('./Dashboard')
var Header = require('./Helpers/Header')

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AcivityIndicator,
  TouchableOpacity
} from 'react-native';

import { onSignIn } from "../Config/auth";

import Bkg from "./images/ghnt-background.jpg";
import Username from "./images/username.png";
import Password from "./images/password.png";
import Github from "./images/github.png";
import SignUp from "./SignUp";

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bottomContainer: {
      height: 80
    },
    background: {
      height: null,
      width: null
    },
    wrapper: {
      paddingHorizontal: 15
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      backgroundColor: "transparent"
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#FFFF'
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D9D9D9"
    },
    icon: {
      width: 25,
      height: 25
    },
    button: {
      backgroundColor: "#D9D9D9",
      paddingVertical: 10,
      marginVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
    },
    buttonText: {
      color: "white",
      fontSize: 18
    },
    forgotPasswordText: {
      color: "white",
      backgroundColor: "transparent",
      textAlign: "center"
    },
    hidetext: {
      display: "none"
    }
});
import * as firebase from 'firebase';

export class Main extends Component {

  static navigationOptions = {
    header: <Text style={styles.hideText}></Text>
  };

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <Image
        source={Bkg}
        style={[styles.background, styles.container]}
        resizeMode="cover"
      >
      <View style={styles.container}/>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={Username}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              onChangeText={(email) => this.setState({email})}
              placeholder="Email"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={Password}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                onChangeText={(password) => this.setState({password})}
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableHighlight
              onPress= {() => { onSignIn().then(() => navigation.navigate("SignedIn")); }}
              style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableHighlight>

            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
              <View style={styles.iconWrap}>
                <Image
                  source={Github}
                  style={styles.icon}
                  resizeMode="contain"
                  />
                </View>
                <Text style={styles.buttonText}>Sign in With Github</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>
          

          </View>
          <View style={styles.container}/>
          <View style={styles.bottomContainer}>
            <TouchableOpacity activeOpacity={.5}>
            <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.forgotPasswordText}>Create new account.
            </Text>
            </TouchableOpacity>
        </View>
        </Image>   
    );
  }
}

module.exports = Main;