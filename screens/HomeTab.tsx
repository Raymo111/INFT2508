import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import { Logo } from '../components/Components';
import ResultScreen from './Result';
import NewsStoryScreen from './NewsStory';
import React from 'react';

const HomeStack = createNativeStackNavigator();

const HomeTabScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Logo />,
        })}
      />
      <HomeStack.Screen name="Result" component={ResultScreen} />
      <HomeStack.Screen name="NewsStory" component={NewsStoryScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeTabScreen;
