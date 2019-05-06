import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Playground from '../../components/Playground';
import Categories from '../../screens/Categories/Categories';
import { AppColors } from '../styles/colors';
import Section from '../../screens/Section/Section';
import Article from '../../screens/Article/Article';



export default class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: AppColors.white }}>
        <Stack key={'root'}>
          <Scene key={'Playground2'} component={Playground} title={'Playground'} />

          <Scene key={'Categories'} component={Categories} title={'Categories'} initial />
          <Scene key={'Section'} component={Section} title={'Section'} />
          <Scene key={'Article'} component={Article} title={'Article'} />
        </Stack>
      </Router>
    )
  }
}
