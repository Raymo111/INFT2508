import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Logo } from '../components/Components';
import NewsStoryScreen from './NewsStory';
import React from 'react';
import NewsScreen from './News';

const NewsStack = createNativeStackNavigator();

const NewsTabScreen = () => {
  return (
    <NewsStack.Navigator
      initialRouteName="News"
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
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Logo />,
        })}
      />
      <NewsStack.Screen name="NewsStory" component={NewsStoryScreen} />
    </NewsStack.Navigator>
  );
};

export default NewsTabScreen;
