import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { onSignIn } from "../Config/auth";
import {  GitHubProfile } from "../Config/Router";


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
  AcivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    icon: {
      height: 30,
      width: 30
    }
});

export class Search extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentWillMount() {
  //   isSignedIn()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     .catch(err => alert("An error occurred"));
  // }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit(){
    //UPDATE our IndicatorIOS spinner
    this.setState({
      isLoading: true
    });

    let scope = this
    //FETCH data from github
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not found') {
          scope.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          scope.props.navigation.navigate( 'Dashboard', {
            title: res.name || 'Select an Option',
            userInfo: res
          });
          scope.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a GitHub User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleSubmit()}
          underlayColor="white">
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Search;
