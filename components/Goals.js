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
  tabBarOptions: {
    tabBarPosition: 'bottom',
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#28487B'
    }
  },
});

export default Goals;