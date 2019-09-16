import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import styles from '../styles/styles';

export default class ItemBoard extends Component {
	render () {
		return (
			<View style={[styles.itemBoard, styles.shadow]}>
				<Image source={this.props.source} style={this.props.style}>
    			</Image>
				<View >
					<Text style={styles.itemText}>{this.props.total}</Text>
				</View>
				<View style={styles.doubleSeparator}></View>
				<View>
					<Text style={styles.typeText}>{this.props.text}</Text>
				</View>
			</View>
		);
	}
}