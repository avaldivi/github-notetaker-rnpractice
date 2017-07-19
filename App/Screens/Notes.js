import React, { Component } from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { onSignIn } from "../Config/auth";
import {  GitHubProfile } from "../Config/Router";

import PropTypes from 'prop-types';

var Badge = require('./Helpers/Badge');
var Separator = require('./Helpers/Separator');
var api = require('../Utils/api');

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	buttonText: {
		fontSize: 18,
		color: 'white'
	},
	button: {
		height: 60,
		backgroundColor: '#48BBEC',
		flex:3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchInput: {
		height: 60,
		padding: 10,
		fontSize: 18,
		color: '#111',
		flex: 10
	},
	rowContainer: {
		padding: 10
	},
	footerContainer: {
		backgroundColor: '#E3E3E3',
		alignItems: 'center',
		flexDirection: 'row'
	}
});

export class Notes extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: this.ds.cloneWithRows(this.props.navigation.state.params.notes),
	      note: '',
	      error: ''
	    };
	    console.log(this.props)
	}

	handleChange(e) {
	    this.setState({
	      	note: e.nativeEvent.text
	    });
  	}

	handleSubmit() {
		var note = this.state.note;
		this.setState({
			note: ''
		})
	api.addNote(this.props.navigation.state.params.userInfo.login, note)
	.then((data) => {
		api.getNotes(this.props.navigation.state.params.userInfo.login)
		.then((data) => {
			this.setState({
				dataSource: this.ds.cloneWithRows(data)
			})
		})
	}).catch((err) => {
			console.log('Request Failed', err);
			this.setState({error})
		})
	console.log(note)
	}

  	renderRow(rowData){
  		return(
  			<View>
  				<View style={styles.rowContainer}>
  				<Text> {rowData} </Text>
  				</View>
  				<Separator/>
  			</View>
  		)
  	}

  	footer(){
  		return(
  		<View style={styles.footerContainer}>
  			<TextInput
  				style={styles.searchInput}
  				value={this.state.note}
  				onChange={this.handleChange.bind(this)}
  				placeholder="new note"/>
  				<TouchableHighlight
  				style={styles.button}
  				onPress={this.handleSubmit.bind(this)}
  				underlayColor='#88D4F5'>
  					<Text style={styles.buttonText}> Submit </Text>
  				</TouchableHighlight>
  		</View>
  		)
  	}

	render() {
		return (
			<View style={styles.container}>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				renderHeader={() => <Badge userInfo={this.props.navigation.state.params.userInfo} /> }
				/>
			{this.footer()}
			</View>
		)
	}
};

Notes.propTypes = {
	userInfo: PropTypes.object,
	notes: PropTypes.object
}

module.exports = Notes;