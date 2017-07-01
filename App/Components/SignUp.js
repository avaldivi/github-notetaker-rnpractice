import React, { Component } from 'react';
var api = require('../Utils/api');
var Dashboard = require('./Dashboard')
var Header = require('./Header')

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

import Signup_Bkg from "./images/signup_bkg.jpg";
import Username from "./images/username.png";
import Password from "./images/password.png";
import Email from "./images/email.png";
import Github from "./images/github.png";

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
    }
});

class SignUp extends Component {

  render() {
    return (
      
      <Image
        source={Signup_Bkg}
        style={[styles.background, styles.container]}
        resizeMode="cover"
      >
      <View style={styles.container}/>
        <View style={styles.wrapper}>
        <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={Email}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={Username}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Username"
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
                placeholder="Password"
                secureTextEntry
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
              placeholder="Re-Enter Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
              <View style={styles.iconWrap}>
                <Image
                  source={Github}
                  style={styles.icon}
                  resizeMode="contain"
                  />
                </View>
                <Text style={styles.buttonText}>Sign Up with Github</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
            <Text style={styles.forgotPasswordText}>Already have an account? Sign in.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}/>
          <View style={styles.bottomContainer}>
            <TouchableOpacity activeOpacity={.5}>
            <Text style={styles.forgotPasswordText}>Create new account.</Text>
            </TouchableOpacity>
        </View>
        </Image>
      
    );
  }
}

module.exports = SignUp;