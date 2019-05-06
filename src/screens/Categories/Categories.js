import React, { Component } from 'react'
import { View } from 'react-native'
import { Wrapper } from '../../constants/styles/reusable';
import CategoryCard from '../../components/Categories/CategoryCard';
import { AppColors } from '../../constants/styles/colors';
import { Actions } from 'react-native-router-flux';

// const Wrapper = styled(View)``

export default class Categories extends Component {
  render() {
    return (
      <Wrapper>
        <CategoryCard
          onPress={() => Actions.Section({ title: 'Technology' })}
          textColor={AppColors.white}
          bgColor={AppColors.primary}
          details={14}
          categoryName='Technology' />

        <CategoryCard
          onPress={() => Actions.Section({ title: 'Sports' })}
          textColor={AppColors.white}
          bgColor={AppColors.secondary}
          details={35}
          categoryName='Sports' />
        <CategoryCard
          onPress={() => Actions.Section({ title: 'Business' })}
          bgColor={AppColors.primary}
          textColor={AppColors.white}
          details={35}
          categoryName='Business' />
      </Wrapper>
    )
  }
}
