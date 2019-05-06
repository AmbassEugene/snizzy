import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import styled from 'styled-components'
import { AppColors } from './colors';


const FlexAll = styled.View`
  flex-direction: row;
  align-items: center;
`

export const FlexStart = styled(FlexAll)`
  justify-content: flex-start;
`
export const FlexEnd = styled(FlexAll)`
  justify-content: flex-end;
`
export const FlexBetween = styled(FlexAll)`
  justify-content: space-between;
`
export const FlexAround = styled(FlexAll)`
  justify-content: space-around;
`
export const FlexCenter = styled(FlexAll)` 
  justify-content: center;
`
export const Space = styled(View)`
  margin: 5px;
`
export const LargeSpace = styled(Space)`
  margin: 10px;
`

export const MainCard = styled(View)`
  background-color: ${props => props.color ? props.color : '#fff'};
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${AppColors.lightGray};
  shadowOpacity: 0.1;
  shadowRadius: 4;
  shadowColor: ${AppColors.black};
  shadowOffset: 1px;
  elevation: 1;
`
export const Wrapper = styled(View)`
  padding: 15px;
  flex: 1;
`

export const AppText = styled(Text)`
  font-family: ${ props => props.bold ? 'MuliBold' : props.italic ? 'MuliItalic' : props.light ? 'MuliLight' : props.semiBold ? 'MuliSemiBold' : 'Muli'};
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'};
  font-size: ${props => props.small ? '12px' : props.fontSize ? props.fontSize : props.title ? '20px' : '14px'};
  color: ${props => props.color ? props.color : AppColors.black};
  /* width: 100%; */
`

