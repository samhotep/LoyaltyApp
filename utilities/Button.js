import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from '../styles/styles';

export default class Button extends Component {
	render () {
		return (
			<TouchableHighlight onPress={this.props.onPress} 
								style={[this.props.style, styles.shadow]}>
				<Text style={styles.buttonText}>
					{this.props.label}
				</Text>
			</TouchableHighlight>
		);
	}
}
