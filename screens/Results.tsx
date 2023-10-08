import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Styles } from '../components/Styles';
import { H1 } from '../components/Components';

const ResultsScreen = () => {
  return (
    <SafeAreaView>
      <View style={Styles.page.container}>
        <H1>Results</H1>
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
