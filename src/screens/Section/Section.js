import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Wrapper } from '../../constants/styles/reusable';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Actions } from 'react-native-router-flux';

export default class Section extends Component {
  render() {
    return (
      <Wrapper>
        <NewsCard onPress={() => Actions.Article()} />
        <NewsCard onPress={() => Actions.Article()} />
        <NewsCard onPress={() => Actions.Article()} />
        <NewsCard onPress={() => Actions.Article()} />
        <NewsCard onPress={() => Actions.Article()} />
      </Wrapper>
    )
  }
}
