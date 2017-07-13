import React, { Component } from 'react';
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var Notes = require('./Notes');
var api = require('../Utils/api');

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1
	},
	image: {
		height: 350
	},
	buttonText: {
		fontSize: 24,
		alignSelf: 'center'
	},
	buttonNotes: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#53EAAEFF'
	},
	buttonProfile: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#CB7AB8FF' 
	},
	buttonRepos: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#CB773CFF' 
	}
});

class Dashboard extends Component {

	goToProfile() {
		this.props.navigator.push({
			component: Profile,
			title: 'Profile Page',
			passProps: {userInfo: this.props.userInfo}
		});
	}

	goToRepos() {
		api.getRepos(this.props.userInfo.login)
			.then((res) => {
				this.props.navigator.push({
					component: Repositories,
					title: 'Repos',
					passProps: {
						userInfo: this.props.userInfo,
						repos: res
					}
				});
			});
		
	}

	goToNotes() {
		api.getNotes(this.props.userInfo.login)
			.then((res) => {
				res = res || {};
				this.props.navigator.push({
					component: Notes,
					title: 'Notes',
					passProps: {
						userInfo: this.props.userInfo,
						notes: res
					}
				});
			});

	}

	render(){
		return (
			<View style={styles.container}>
				<Image style={styles.image} />
				<TouchableHighlight
					style={styles.buttonProfile}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> View Profile </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.buttonRepos}
					onPress={this.goToRepos.bind(this)}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> View Repositories </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.buttonNotes}
					onPress={this.goToNotes.bind(this)}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> Take Notes </Text>
				</TouchableHighlight>
			</View>
		)
	}
};

module.exports = Dashboard;