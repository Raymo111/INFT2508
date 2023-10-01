import {Image, ImageProps, Pressable, Text, View} from 'react-native';
import {Styles} from './Styles';
import React from 'react';

const NewsItem = (props: {
  img: ImageProps;
  title: string;
  date: string;
  source: string;
  text: string;
}) => {
  return (
    <Pressable style={Styles.news.item}>
      <Image source={props.img} style={Styles.news.image} />
      <View style={Styles.news.content}>
        <Text style={Styles.news.title}>{props.title}</Text>
        <View style={Styles.news.subtitle}>
          <Text style={Styles.news.subtitleText}>{props.date}</Text>
          <Text style={Styles.news.subtitleText}>{props.source}</Text>
        </View>
        <Text style={Styles.news.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default NewsItem;
