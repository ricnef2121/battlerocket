import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Lunch from './src/components/lunch';
import Internets from './src/components/internets';




const TabNavigator = createBottomTabNavigator({
  
  Lunch : {
    screen:Lunch,
    navigationOptions:{
      tabBarLabel:'Lunch',
    }
  },
  Internets: Internets
});

export default createAppContainer(TabNavigator);