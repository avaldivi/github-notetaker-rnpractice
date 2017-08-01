import React, { Component } from 'react';
import { onSignIn } from "../../Config/auth";
import {  GitHubProfile } from "../../Config/Router";

import PropTypes from 'prop-types';

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column',
	}

});

export class Web_View extends Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView source={{uri: this.props.navigation.state.params.url }} />
			</View>
		)
	}

};

Web_View.propTypes = {
	url: PropTypes.string
}

module.exports = Web_View;