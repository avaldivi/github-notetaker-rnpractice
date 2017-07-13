import React, { Component } from 'react';
import { View } from "react-native";
import { withNavigation } from 'react-navigation';
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../Config/auth";


export class Account extends Component {


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