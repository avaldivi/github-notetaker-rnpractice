import React, { Component } from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { onSignIn } from "../Config/auth";
import {  GitHubProfile } from "../Config/Router";

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

export class Dashboard extends Component {

constructor(props) {
	super(props);
	this.state = {
	}
   this.goToRepos = this.goToRepos.bind(this)
   this.getNotes = this.goToNotes.bind(this)
  }

	goToProfile() {
		this.props.navigation.navigate('Profile', {
			title: 'Profile Page',
			userInfo: this.props.navigation.state.params.userInfo
		});
	}

	goToRepos() {
		api.getRepos(this.props.navigation.state.params.userInfo.login)
			.then((res) => {
				this.props.navigation.navigate('Repositories', {
					title: 'Repositories',
					userInfo: this.props.navigation.state.params.userInfo,
					repos: res
				});
			});
	}

	goToNotes() {
		api.getNotes(this.props.navigation.state.params.userInfo.login)
			.then((res) => {
				res = res || {};
				this.props.navigation.navigate('Notes', {
					title: 'Notes',
					userInfo: this.props.navigation.state.params.userInfo,
					notes: res
				});
			});
	}

	render(){
		//console.log(this.props);
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: this.props.navigation.state.params.userInfo.avatar_url}} />
				<TouchableHighlight
					style={styles.buttonProfile}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> View Profile </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.buttonRepos}
					onPress={() => this.goToRepos()}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> View Repositories </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.buttonNotes}
					onPress={() => this.goToNotes()}
					underlayColor='#4888BC'>
						<Text style={styles.buttonText}> Take Notes </Text>
				</TouchableHighlight>
			</View>
		)
	}
};

module.exports = Dashboard;