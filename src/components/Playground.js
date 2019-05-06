import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { MainCard, AppText } from '../constants/styles/reusable';
import { AppColors } from '../constants/styles/colors';
import CategoryCard from './Categories/CategoryCard';
import NewsCard from './NewsCard/NewsCard';


export default class Playground extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 15, backgroundColor: AppColors.white }}>
        <MainCard>
          <AppText
            bold
            onPress={() => Actions.Playground2()}> Normal Card Bold text
            </AppText>
        </MainCard>

        <MainCard>
          <AppText
            semiBold
            onPress={() => Actions.Playground2()}> Semi-Bold text
            </AppText>
        </MainCard>

        <MainCard>
          <AppText
            onPress={() => Actions.Playground2()}> Normal Text </AppText>
        </MainCard>

        <CategoryCard
          textColor={AppColors.white}
          bgColor={AppColors.primary}
          details={14}
          categoryName='Technology' />
        <CategoryCard
          textColor={AppColors.darkGray}
          bgColor={AppColors.secondary}
          details={14}
          categoryName='Technology' />

        <NewsCard />
        <NewsCard />
        <NewsCard />



      </View>
    )
  }
}
