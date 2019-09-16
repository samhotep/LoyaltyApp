import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import styles from '../styles/styles';
import ItemBoard from '../utilities/ItemBoard';
import ItemList from '../utilities/ItemList';
import MainNavigator from './LoginScreen';
import HeaderBar from '../utilities/HeaderBar';

const data = [
	{
			key: '1',
			image: require('../images/cart.png'),
			date: 'June 2019',
			day: 'Wednesday 6',
			name: 'Books',
			points: '12'
	},
	{
			key: '2',
			image: require('../images/cart.png'),
			date: 'July 2019',
			day: 'Tuesday 5',
			name: 'Shoes',
			points: '10'
	}
]

export default class RedeemedScreen extends Component {
	constructor (props) {
		super(props);
		this.state = { "total": "1234" , "text": "Points Redeemed", "drawerText": "Timeline"};
	}
	render () {
		return (
			<View style={styles.container}>
				<HeaderBar onPress={() => this.props.navigation.openDrawer()} label="Redeemed"/>
				<ItemBoard source={require('../images/redeemed_icon.png')} 
						   style={styles.icon}
						   total={this.state.total}
						   text={this.state.text}/>
				<ItemList style={styles.drawerList} text={this.state.drawerText} data={ data }/>
			</View>
		);
	}
}  