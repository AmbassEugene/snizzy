import React from 'react'
import { View, Text } from 'react-native'
import Ripple from 'react-native-material-ripple';
import { MainCard, FlexBetween, AppText } from '../../constants/styles/reusable';
import { AppColors } from '../../constants/styles/colors';

const CategoryCard = ({ bgColor, categoryName, textColor, details, onPress }) => {

  return (
    <Ripple onPress={onPress}>
      <MainCard color={bgColor}>
        <FlexBetween>

          <AppText
            color={textColor}
            bold
            title>{categoryName || 'Sports'}
          </AppText>

          <AppText
            light
            small
            color={textColor}
            bold
          >{details || '13'} Added
        </AppText>


        </FlexBetween>
      </MainCard>
    </Ripple>
  )
}

export default CategoryCard
