import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';

export default class SettingsScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Company App Name',
		drawerType: 'front',
	};
	render () {
		return (
			<View></View>
		);
	}
}