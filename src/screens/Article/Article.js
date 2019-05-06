import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'
import { AppColors } from '../../constants/styles/colors';
import { AppText, FlexBetween } from '../../constants/styles/reusable';
import placeholder from '../../../assets/imgs/placeholder.png'


const Wrapper = styled(View)`
  flex: 1;
`

const ArticleTitle = styled(View)`
  padding: 15px;
`

const ImageWrapper = styled(View)`
  width: 100%;
  height: 220px;
`
const ArticleImage = styled(Image)`
  width: 100%;
  height: 100%;
`
const ArticleContent = styled(View)`
  padding: 15px;
`

export default class Article extends Component {
  render() {
    const { aticleTitle, img, author, date, content } = this.props
    return (
      <Wrapper>
        <ArticleTitle>
          <AppText bold>
            {aticleTitle || 'Pixel 3A leaks at Best Buy, confirming 6-inch screen for XL model. Just adding more text to see if it truncates'}
          </AppText>
          <FlexBetween>
            <AppText small light>{author || 'Eugene Ambassador'}</AppText>
            <AppText small light>{date || 'Just now'}</AppText>
          </FlexBetween>
        </ArticleTitle>

        <ImageWrapper>
          <ArticleImage source={img || placeholder} />
        </ImageWrapper>

        <ArticleContent>
          <AppText>
            {
              content ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien. Sem integer vitae justo eget magna. Id neque aliquam vestibulum morbi. Diam volutpat commodo sed egestas. Ac tortor dignissim convallis aenean et tortor. Sem fringilla ut morbi tincidunt augue. Viverra nam libero justo laoreet. Sodales ut eu sem integer vitae justo. Velit euismod in pellentesque massa. Et egestas quis ipsum suspendisse ultrices. Felis eget velit aliquet sagittis  '
            }
          </AppText>
          <AppText small italic right>Read more</AppText>

        </ArticleContent>
      </Wrapper>
    )
  }
}



