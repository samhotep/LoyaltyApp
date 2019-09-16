import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';
import styles from '../styles/styles';
import HeaderBar from '../utilities/HeaderBar';
import OffersCard from '../utilities/OffersCard';

const data = [
	{
		key: '1',
		image: require('../images/offers_sample.jpg'),
		name: 'Shoes',
		price: '15,000 UGX',
		points: '12',
	},
	{
		key: '2',
		image: require('../images/offers_sample_2.jpg'),
		name: 'Belt',
		price: '30,000 UGX',
		points: '15'
	},
	{
		key: '3',
		image: require('../images/offers_sample.jpg'),
		name: 'Cap',
		price: '20,000 UGX',
		points: '20',
	}
]

export default class OffersScreen extends React.PureComponent {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<View style={styles.container}>
				<HeaderBar onPress={() => this.props.navigation.openDrawer()} label="Offers"/>
				<View style={styles.offersList}>
					<FlatList 
						style={ styles.flatListOffers }
						data={ data }
						renderItem={({ item }) => <OffersCard
						image={item.image}
						name={item.name}
						price={item.price}
						points={item.points}/>}
						/>
				</View>
			</View>
		);
	}
}