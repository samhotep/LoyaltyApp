import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../styles/styles';

export default class ItemCard extends React.PureComponent {
	
	_onPress = () => {
		return true;
	};

	render () {
		return (
			<TouchableOpacity onPress={this._onPress} style={[styles.itemCard, styles.shadow]}>
				<ImageBackground source={this.props.image} style={styles.cardImage} resizeMode="contain" imageStyle={{ borderRadius: 25 }}>
					<Text style={styles.cardImageText}>{this.props.imageText}</Text>
				</ImageBackground>
				<Text style={styles.cardHeaderText}>{this.props.date}</Text>
				<View style={styles.cardItemView}><Text style={styles.cardItemText}>{this.props.name}</Text></View>
				<View style={styles.cardItemView}><Text style={styles.cardItemText}>{this.props.points}</Text></View>
			</TouchableOpacity>
		);
	}
}
