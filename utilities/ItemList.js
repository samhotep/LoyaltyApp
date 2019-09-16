import React, {Component} from 'react';
import {Animated, Text, View, TouchableHighlight, Image, StyleSheet, Dimensions, PanResponder, FlatList} from 'react-native';
import styles from '../styles/styles';
import ItemCard from './ItemCard';

export default class ItemList extends Component {
	drawer = null;

	constructor (props){
		super(props);
		this.moveAnimation = new Animated.ValueXY({ x: 0, y: 350 });
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

			onPanResponderGrant: (evt, gestureState) => {
				return true;
			},

			onPanResponderMove: (evt, gestureState) => {
				var change = this.state.top+gestureState.dy;
				if (change > 60 && change < 350) {
					Animated.spring(this.moveAnimation, {
						toValue: {x:0, y: this.state.top+gestureState.dy},
					}).start()
				}
			},

			onPanResponderTerminationRequest: (evt, gestureState) => true,

			onPanResponderRelease: (evt, gestureState) => {
				var change = this.state.top+gestureState.dy;
				if (change > 60 && change < 350) {
					this.setState({
						top: this.state.top+gestureState.dy,
					});	
					if (change < 320 && this.state.top != 60) {
						Animated.spring(this.moveAnimation, {
							toValue: {x:0, y:60},
						}).start()
						this.setState({
							top: 60,
						});	
						return true;
					} else if (change > 80 && this.state.top != 350) {
						Animated.spring(this.moveAnimation, {
							toValue: {x:0, y:350},
						}).start()
						this.setState({
							top: 350,
						});	
						return true;
					}
				}
			},

			onPanResponderTerminate: (evt, gestureState) => {
				return true;
			},

			onShouldBlockNativeResponder: (evt, gestureState) => {
				return true;
			},

		});
		this.state = {
			height: 0,
			width: 0,
			posX: 0,
			posY: 0,
			moveX: 0,
			moveY: 0,
			dx: 0,
			dy: 0,
			top: 350,
			change: 0,
			slide: new Animated.Value(350),
		};
	};

	getPosition = (event) => {
		const layout = event.nativeEvent.layout;
		this.setState({
			height: layout.height,
			width: layout.width,
		});
	};


	_onStartShouldSetResponder = (event) => {
		return true;
	};

	_onResponderGrant = (event) => {
		this.setState({
			posX: event.nativeEvent.pageX,
			posY: event.nativeEvent.pageY,
		});
		return true;
	};

	_onResponderMove = (event) => {
		//alert("..Moving...");
		this.setState({
			dx: this.state.posX-event.nativeEvent.pageX,
			dy: this.state.posY-event.nativeEvent.pageY,
		});
		this.updatePosition(event);
		//alert(event.nativeEvent.pageY);
		//alert(Math.round(Dimensions.get('window').height));
		//alert(this.state.posY);
		//alert(this.state.moveY);
		//this.state.newStyle.drawer.height += this.state.moveY; 
		return true;
	};

	_onResponderRelease = (event) => {
		//alert("..View Released");
		this.setState({
			top: this.state.change,
		});
	};

	_onPressLink = (event) => {
		alert("..Link Released");
	};

	updatePosition = (event) => {
		this.setState({
			change: Math.round(this.state.top-this.state.dy),
		});
		Animated.event([
			null,
			{dy: this.state.change},
		]);
		//change = Math.round(this.state.top-this.state.dy);
		//alert(this.state.top);
		/*if (0 <= this.state.top <= 350) {
			if (true) {

			}
			//alert("IN RANGE!");
			Animated.timing(
				this.state.slide,
				{
					toValue: this.state.change,
					duration: 10000,
				}
			).start();
			this.drawer && this.drawer.setNativeProps({ style: { top: this.state.change } });
		}*/
	};

	render () {
		//let { slideAnim } = this.state;
		return (
			<Animated.View
				style={[this.props.style, styles.shadow, this.moveAnimation.getLayout()]}
				{...this._panResponder.panHandlers}>
				<View style={styles.swipeLink}>
				</View>
				<Text style={styles.itemText}>{this.props.text}</Text>
				<View>
				</View>
				<FlatList 
					style={ styles.flatList }
					data={ this.props.data } 
					renderItem={({ item }) => <ItemCard 
						image={item.image}
						imageText={item.date}
						date={item.day}
						name={item.name}
						points={"Points:"+item.points}/>}
				/>
			</Animated.View>
		);
	}
}
/*
	onStartShouldSetResponder={this._onStartShouldSetResponder}
	onResponderGrant={this._onResponderGrant}
	onResponderMove={this._onResponderMove}
	onResponderRelease={this._onResponderRelease}
	onLayout={this.getPosition}
*/