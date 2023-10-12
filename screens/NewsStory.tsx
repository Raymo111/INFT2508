import React from 'react';
import { View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { Styles } from '../components/Styles';
import { H1, H3 } from '../components/Components';

// @ts-ignore
const NewsStoryScreen = ({ route }) => {
  const { img, title, date, source, text } = route.params;
  return (
    <SafeAreaView style={Styles.screen.container}>
      <ScrollView style={Styles.page.container}>
        <Image source={img} />
        <H1>{title}</H1>
        <H3>{date}</H3>
        <H3>{source}</H3>
        <Text>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsStoryScreen;