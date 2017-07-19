import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { onSignIn } from "../Config/auth";
import {  GitHubProfile } from "../Config/Router";

import PropTypes from 'prop-types';

var Badge = require('./Helpers/Badge');
var Separator = require('./Helpers/Separator');
//var Web_View = require('./Helpers/Web');

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex:1
	},
	name: {
		fontSize: 18,
		color: '#48BBEC',
		paddingBottom: 5
	},
	rowContainer: {
		padding:10,
		flexDirection: 'column',
		flex: 1
	},
	stars: {
		color: '#48BBEC',
		fontSize: 14,
		paddingBottom: 5

	},
	description: {
		fontSize: 14,
		paddingBottom: 5
	}
});

export class Repositories extends Component {
	openPage(res) {
		this.props.navigation.navigate('Web_View', {
			title: 'Web View',
			url: res
		});
	}
	render() {
		var repos = this.props.navigation.state.params.repos;
		var list = repos.map((item, index) => {
			var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View/>;
			return (
				<View key={index}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, repos[index].html_url)}
							underlayColor='transparent'>
							<Text style={styles.name}> {repos[index].name}</Text>
						</TouchableHighlight>
						<Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
						{desc}
					</View>
					<Separator/>
				</View>
			)
		});
		return(
			<ScrollView style={styles.container}>
			<Badge userInfo={this.props.navigation.state.params.userInfo} />
			{list}
			</ScrollView>
		)
	}
};

Repositories.propTypes = {
	userInfo: PropTypes.object,
	repos: PropTypes.array
}


module.exports = Repositories;