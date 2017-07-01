import React, { Component } from 'react';
var api = require('../Utils/api');
var Dashboard = require('./Dashboard')
var Header = require('./Header')

import {
  View,
  Text,
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
    }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
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
    //FETCH data from github
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });

    //REROUTE to the next passing github information
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
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Search;
