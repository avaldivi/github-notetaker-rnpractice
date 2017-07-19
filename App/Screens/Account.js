import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Card, Button } from "react-native-elements";
import { onSignOut } from "../Config/auth";

import {
  View,
  Text,
  ListView,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#bcbec1",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#03A9F4"
  },
  font: {
    color: "white", 
    fontSize: 28
  },
  icon: {
    height: 25,
    width: 30
  },
  hidetext: {
    display: "none"
  }
});


export class Account extends Component {

    static navigationOptions = {
    header: <Text style={styles.hideText}></Text>,
    tabBarLabel: 'Account',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/account.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render(){
    const { navigation } = this.props;

    return(
      <View style={{ paddingVertical: 20 }}>
        <Card title="John Doe">
          <View style={styles.container}>
            <Text style={styles.font}>JD</Text>
          </View>
          <Button
            style={styles.button}
            title="SIGN OUT"
            onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
          />
        </Card>
      </View>
     // );
     );
   }
}


module.exports = Account;