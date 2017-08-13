import React from 'react';
import { TabNavigator } from 'react-navigation';

import GoalsPresent from './goals/GoalsPresent';
import GoalsPast from './goals/GoalsPast';

const Goals = TabNavigator({
  Present: {
    screen: GoalsPresent,
  },
  Past: {
    screen: GoalsPast,
  },
}, {
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#28487B'
    },
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2,
    }
  },
});

export default Goals;