import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class App extends Component {
	render() {
		const { viewStyle, textStyle } = styles;
		return (
			<View style={ viewStyle }>
				<Text style = { textStyle }>Hello, React Natice!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	textStyle: {
		fontSize: 18,
		color: '#383838',
		fontWeight: '600'
	}
});

export default App;