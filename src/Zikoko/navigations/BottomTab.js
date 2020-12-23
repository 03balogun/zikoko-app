import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Bookmark from '../screens/Bookmark';
import Profile from '../screens/Profile';

import {COLORS} from '../assets/config';

import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import FavouriteIcon from '../assets/icons/favourite-solid.svg';
import ProfileIcon from '../assets/icons/profile.svg';

const tabs = [
  {
    name: 'Home',
    component: Home,
    icon: ({focused, color}) => (
      <HomeIcon fill={color} fillOpacity={focused ? 1 : 0.5} />
    ),
  },
  {
    name: 'Search',
    component: Search,
    icon: ({focused, color}) => (
      <SearchIcon fill={color} fillOpacity={focused ? 1 : 0.5} />
    ),
  },
  {
    name: 'Bookmark',
    component: Bookmark,
    icon: ({focused, color}) => (
      <FavouriteIcon fill={color} fillOpacity={focused ? 1 : 0.5} />
    ),
  },
  {
    name: 'Profile',
    component: Profile,
    icon: ({focused, color}) => (
      <ProfileIcon fill={color} fillOpacity={focused ? 1 : 0.5} />
    ),
  },
];

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.menuInactive,
    }}>
    {tabs.map((tab) => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          tabBarIcon: tab.icon,
        }}
      />
    ))}
  </Tab.Navigator>
);
