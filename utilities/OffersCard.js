import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

export default class OffersCard extends Component {

	_onPress = () => {
		return true;
	};

	render () {
		return (
			<TouchableOpacity style={[styles.offersCard, styles.shadow]} onPress={this._onPress}>
				<Image source={this.props.image} style={styles.offersCardImage}/>
				<View style={styles.offersItem}>
		          <Image source={require('../images/product_name_icon.png')} style={styles.inputIcon}/>
		          <Text style={styles.offersItemText}>{this.props.name}</Text>    
		        </View>
		        <View style={styles.offersItem}>
		          <Image source={require('../images/price_icon.png')} style={styles.inputIcon}/>
		          <Text style={styles.offersItemText}>{this.props.price}</Text>    
		        </View>
		        <View style={styles.offersItem}>
		          <Image source={require('../images/points_icon.png')} style={styles.inputIcon}/>
		          <Text style={styles.offersItemText}>{this.props.points}</Text>    
		        </View>
			</TouchableOpacity>
		);
	}
}