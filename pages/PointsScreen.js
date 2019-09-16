import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { DrawerActions } from 'react-navigation-drawer';
import RedeemedScreen from './RedeemedScreen';
import SettingsScreen from './SettingsScreen';
import OffersScreen from './OffersScreen';
import styles from '../styles/styles';
import HeaderBar from '../utilities/HeaderBar';
import ItemBoard from '../utilities/ItemBoard';
import ItemList from '../utilities/ItemList';
import TabIcon from '../utilities/TabIcon';
import MainNavigator from './LoginScreen';
import Button from '../utilities/Button';

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

class PointsScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Points',
		drawerIcon: ({ tintColor }) => {
			<Image source={ require('../images/points_icon.png') }/>
		}
	};

	constructor (props) {
		super(props);
		this.state = { "total": "1234" , "text": "Points Earned", "drawerText": "Timeline"};
	}
	
	render () {
		return (
			<View style={styles.container}>
				<HeaderBar onPress={() => this.props.navigation.openDrawer()} label="Points"/>
				<ItemBoard source={require('../images/points_icon.png')} 
						   style={styles.icon}
						   total={this.state.total}
						   text={this.state.text}/>
				<ItemList style={styles.drawerList} text={this.state.drawerText} data={ data }/>
			</View>
		);
	}
}
				//<ItemList style={styles.drawerList} text={this.state.drawerText}/>

const TabNavigator = createBottomTabNavigator(
	{
		Points: { screen: PointsScreen },
		Redeemed: { screen: RedeemedScreen },
		Offers: { screen: OffersScreen },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let defaultIcon;
				if ( routeName === 'Points' ) {
					if (focused) {
						return <TabIcon source={require('../images/points_icon_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/points_icon.png')} />;
					}
				} else if (routeName === 'Redeemed'){
					if (focused) {
						return <TabIcon source={require('../images/redeemed_icon_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/redeemed_icon.png')} />;
					}
				} else if (routeName === 'Offers'){
					if (focused) {
						return <TabIcon source={require('../images/offers_icon_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/offers_icon.png')} />;
					}
				}
			}
		}),
		tabBarOptions: {
			activeTintColor: 'blue',
			inativeTintColor: 'black',
		},
});

/*
const StackNavigator = createStackNavigator(
	{

	}
);*/

const DrawerNavigator = createDrawerNavigator(
	{
		TabNavigator,
	},
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component{
  render () {
    return <AppContainer/>;
  }
}