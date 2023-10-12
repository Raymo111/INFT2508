import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import NewsStoryScreen from './screens/NewsStory';
import ResultScreen from './screens/Result';
import React from 'react';
import { Logo } from './components/Components';

const Stack = createNativeStackNavigator();

const Inft2508App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerRight: () => <Logo />,
          })}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="NewsItem" component={NewsStoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Inft2508App;
