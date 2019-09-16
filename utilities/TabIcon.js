import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/styles';

export default class TabIcon extends Component {
	render () {
		return (
			<View>
				<Image source={this.props.source} style={styles.tabIcon}></Image>
			</View>
		);
	}
}