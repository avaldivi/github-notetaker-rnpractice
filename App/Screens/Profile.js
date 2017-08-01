import React, { Component } from 'react';

var Badge = require('./Helpers/Badge');
var Separator = require('./Helpers/Separator');
var Header = require('./Helpers/Header')


import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Animated
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex:1
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	rowContainer: {
		padding:10
	},
	rowTitle: {
		color: '#48BBEC',

	},
	rowContent: {
		fontSize:19
	}
});

export class Profile extends Component {

	getRowTitle(user, item) {
		item = (item === 'public_repos') ? item.replace('_', ' ') : item;
		return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
	}
	render() {
		var userInfo = this.props.navigation.state.params.userInfo;
		var topicArr = ['company','location', 'followers', 'following', 'email', 'bio', 'public_repos'];
		var list = topicArr.map((item, index) => {
			if (!userInfo[item]) {
				return <View key={index} />
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
						<Separator/>
					</View>
				)
			}
		});
		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.navigation.state.params.userInfo} />
				{list}
			</ScrollView>
		)
	}

};

module.exports = Profile;
