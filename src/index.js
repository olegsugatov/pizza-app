import React, { Component } from 'react';
import { View } from 'react-native';

// components
import { Header } from './components/common';

class App extends Component {
	render() {
		return (
			<View>
				<Header>
					Pizza App
				</Header>
			</View>
		);
	}
}

export default App;