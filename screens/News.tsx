import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Styles } from '../components/Styles';
import { H1 } from '../components/Components';

const NewsScreen = () => {
  return (
    <SafeAreaView>
      <View style={Styles.page.container}>
        <H1>News</H1>
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;
