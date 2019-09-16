import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import PointsScreen from './PointsScreen';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import styles from '../styles/styles';
import Button from '../utilities/Button';

class LoginScreen extends Component {
  /*const test (event) => {
    fetch('http://10.42.0.1/nodejsApp/users')
      .then(response => response.json())
        .then(users => console.warn(users));

    //this.navigate('Points', {name: 'Random'}
  };*/
  static navigationOptions = {
    header: null,
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo_1.png')} style={styles.cover}>
        </Image>
        <View style={styles.input}>
          <Image source={require('../images/user_icon.png')} style={styles.inputIcon}/>
          <TextInput placeholder="Username" style={styles.inputText}></TextInput>    
        </View>
        <View style={styles.input}>
          <Image source={require('../images/lock_icon.png')} style={styles.inputIcon}/>
          <TextInput placeholder="Password" style={styles.inputText} secureTextEntry={true}></TextInput>    
        </View>
        <View elevation={5} style={styles.shadow}>
          <Button label="Login" 
                  onPress={() => navigate('Points', {name: 'Random'})}
                  style={styles.button}/>
        </View>
      </View>
    );
  }
}

//const TabBarComponent = (props) => (<BottomTabBar {..props} />);

const MainNavigator = createSwitchNavigator(
  {
    //Home: { screen: },
    Login: { screen: LoginScreen },
    Points: { screen: PointsScreen },
  },
  {
    initalRouteName: "Login"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component{
  render () {
    return <AppContainer/>;
  }
}

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginScreen extends Component<Props> {
	render () {
		return (
			<View style={styles.container}>
		      <Text style={styles.welcome}>Welcome to React Native!</Text>
		      <Text style={styles.instructions}>To get started, edit App.js</Text>
		      <Text style={styles.instructions}>{instructions}</Text>
		  </View>
		);
	}
}*/