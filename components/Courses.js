import React from 'react';
import { TabNavigator } from 'react-navigation';

import CoursesScreen from './courses/Courses';
import Units from './courses/Units';
import Badges from './courses/Badges';

const Courses = TabNavigator({
  Courses: {
    screen: CoursesScreen,
  },
  Units: {
    screen: Units,
  },
  Badges: {
    screen: Badges,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#28487B',
    }
  },
});

export default Courses;