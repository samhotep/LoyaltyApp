import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';

export default class HeaderBar extends Component {
	render () {
		return (
			<View style={styles.headerBar}>
				<TouchableNativeFeedback onPress={this.props.onPress}>
					<Image source={require('../images/notifications_icon.png')} style={styles.headerIcon} />
				</TouchableNativeFeedback>
				<Text style={styles.headerTitle}>{this.props.label}</Text>
			</View>
		);
	}
}