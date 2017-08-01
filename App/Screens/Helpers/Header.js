import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
} from 'react-native';

import Octocat from "../images/octocat.png";

var styles = StyleSheet.create({
	container: {
	    flex: 1
	},
	titleStyle: {
	    marginBottom: 10
	},
	image: {
	    width: 50,
	    height: 50
	},
	header: {
	    paddingTop: 30,
	    alignItems: "center"
	},
	scrollView: {
	    flex: 1
	}
});

export class Header extends Component {
	componentWillMount() {
    	this.animated = new Animated.Value(0);
  	}

	render() {
		const hideImageInterpolate = this.animated.interpolate({
		  inputRange: [0, 250],
		  outputRange: [50, 0],
		  extrapolate: "clamp",
		})

		const fontInterpolate = this.animated.interpolate({
		  inputRange: [0, 250],
		  outputRange: [24, 30],
		})

		const opacityInterpolate = this.animated.interpolate({
		  inputRange: [0, 250],
		  outputRange: [1, 0],
		  extrapolate: "clamp"
		});

		const collapseInterpolate = this.animated.interpolate({
		  inputRange: [0, 250],
		  outputRange: [50, 0],
		  extrapolate: "clamp"
		})

		const imageStyle = {
		  width: hideImageInterpolate,
		  height: hideImageInterpolate
		}

		const titleStyle = {
		  fontSize: fontInterpolate
		}

		return (
			<View style={styles.header}>
				<Animated.Image source={Octocat} style={[styles.image, imageStyle]} />
				<Animated.Text style={[styles.titleStyle, titleStyle]}> Github Notetaker </Animated.Text>
			</View>

		)
	}
};

module.exports = Header;