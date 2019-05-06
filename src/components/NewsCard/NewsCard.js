import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import Ripple from 'react-native-material-ripple';
import { MainCard, FlexBetween, AppText } from '../../constants/styles/reusable';
import placeholder from '../../../assets/imgs/placeholder.png'

const ImageWrapper = styled(View)`
  width: 100px;
  height: 60px;
  border-radius: 5px;
  background-color: pink;
  margin-right: 8px;
`
const NewsImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

const NewsCard = ({ textColor, title, onPress }) => {
  return (
    <Ripple onPress={onPress}>
      <MainCard >
        <FlexBetween style={{ alignItems: 'flex-start', }}>

          <ImageWrapper>
            <NewsImage source={placeholder} />
          </ImageWrapper>

          {/* <View > */}
          <AppText
            style={{ flex: 1 }}
            semiBold
            color={textColor}
            numberOfLines={3}
          >{title || 'Pixel 3A leaks at Best Buy, confirming 6-inch screen for XL model. Just adding more text to see if it truncates'}
          </AppText>
          {/* </View> */}




        </FlexBetween>
      </MainCard>
    </Ripple>
  )
}

export default NewsCard
