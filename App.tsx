import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeTabScreen from './screens/HomeTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ResultsTabScreen from './screens/ResultsTab';
import NewsTabScreen from './screens/NewsTab';

const Tab = createBottomTabNavigator();

const Inft2508App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = 'home';
            } else if (route.name === 'ResultsTab') {
              iconName = 'calendar-month';
            } else if (route.name === 'NewsTab') {
              iconName = 'newspaper';
            } else {
              iconName = 'help';
            }
            return (
              <MaterialIcons
                name={iconName}
                size={28}
                color={focused ? 'white' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#222',
          },
        })}>
        <Tab.Screen name="HomeTab" component={HomeTabScreen} />
        <Tab.Screen name="ResultsTab" component={ResultsTabScreen} />
        <Tab.Screen name="NewsTab" component={NewsTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inft2508App;
