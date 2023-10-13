import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Logo } from '../components/Components';
import ResultScreen from './Result';
import ResultsScreen from './Results';

const ResultsStack = createNativeStackNavigator();

const ResultsTabScreen = () => {
  return (
    <ResultsStack.Navigator
      initialRouteName="Results"
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
      <ResultsStack.Screen
        name="Results"
        component={ResultsScreen}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Logo />,
        })}
      />
      <ResultsStack.Screen name="Result" component={ResultScreen} />
    </ResultsStack.Navigator>
  );
};

export default ResultsTabScreen;
