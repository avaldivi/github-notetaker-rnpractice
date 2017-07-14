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
  icon: {
    height: 25,
    width: 30
  }
});


export class Account extends Component {

    static navigationOptions = {
    tabBarLabel: 'Account',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/account.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


  //export default ({ navigation }) => (
  render(){

    const { navigation } = this.props;

    return(
      <View style={{ paddingVertical: 20 }}>
        <Card title="John Doe">
          <View
            style={{
              backgroundColor: "#bcbec1",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: "center",
              marginBottom: 20
            }}
          >
            <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
          </View>
          <Button
            backgroundColor="#03A9F4"
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