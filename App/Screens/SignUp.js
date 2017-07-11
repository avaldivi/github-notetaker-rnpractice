import React, { Component } from 'react';
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

//import * as firebase from 'firebase';
import { onSignIn } from "../Config/auth";

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

export default class SignUp extends Component {

      constructor(props){
      super(props)
      this.state = {
        email: '',
        password: '',
        response: ''
      }
      //this.signUp = this.signUp.bind(this)
    }

    // async signUp() {
    //   try {
    //     await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     this.setState({
    //       response: 'account created!'
    //     })
    //     setTimeout(() => {
    //       navigate('Search')
    //     }, 1500)
    //   } catch (error) {
    //     this.setState({
    //       response: error.toString()
    //     })
    //   }
    // }

    render() {
      //const { navigate } = this.props.navigation;
      const { navigation } = this.props;
      console.log(navigation);

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
                onChangeText={(email) => this.setState({email})}
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
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
              <TouchableHighlight
                onPress= {() => {
                            onSignIn().then(() => navigation.navigate("SignedIn")); // NEW LOGIC
                          }}
                style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
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