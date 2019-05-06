import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/constants/config/routes';

export default class App extends React.Component {
  state = {
    loading: false
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'MuliBold': require('./assets/fonts/muli/Muli-Bold.ttf'),
      'MuliLight': require('./assets/fonts/muli/Muli-Light.ttf'),
      'Muli': require('./assets/fonts/muli/Muli.ttf'),
      'MuliSemiBold': require('./assets/fonts/muli/Muli-SemiBold.ttf'),
      'MuliItalic': require('./assets/fonts/muli/Muli-Italic.ttf')
    });
    this.setState({ loading: true })
  }

  render() {
    const { loading } = this.state
    return (
      <View style={{ flex: 1 }}>
        {loading && <Router />}
      </View>
    );
  }
}

