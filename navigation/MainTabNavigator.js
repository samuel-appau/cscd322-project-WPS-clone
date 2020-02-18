import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DocumentScreen from '../screens/DocumentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CloudScreen from '../screens/CloudScreen';
import ApplicationScreen from '../screens/ApplicationScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Recent',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-home"
      
      
    />
  ),
};

HomeStack.path = '';

const DocumentStack = createStackNavigator(
  {
    Links: DocumentScreen,
  },
  config
);

DocumentStack.navigationOptions = {
  tabBarLabel: 'Documents',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-book" />
  ),
};

DocumentStack.path = '';

const ApplicationStack = createStackNavigator(
  {
    Settings: ApplicationScreen,
  },
  config
);

ApplicationStack.navigationOptions = {
  tabBarLabel: 'Application',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-apps" />
  ),
};

ApplicationStack.path = '';




const CloudStack = createStackNavigator(
  {
    Settings: CloudScreen,
  },
  config
);

CloudStack.navigationOptions = {
  tabBarLabel: 'Cloud',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-tablet-landscape"/>
  ),
};

CloudStack.path = '';




const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-person"/>
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DocumentStack,
  ApplicationStack,
  CloudStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
