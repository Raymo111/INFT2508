import { Image, ImageProps, Pressable, Text } from 'react-native';
import React from 'react';
import { Styles } from './Styles';

const LotteryCard = (props: {
  img: ImageProps;
  highlight?: string;
  label: string;
  numbers: string;
}) => {
  return (
    <Pressable style={Styles.card.container}>
      <Image source={props.img} style={Styles.card.image} />
      {props.highlight && (
        <Text style={Styles.card.highlight}>{props.highlight}</Text>
      )}
      <Text style={Styles.card.label}>{props.label}</Text>
      <Text style={Styles.card.numbers}>{props.numbers}</Text>
    </Pressable>
  );
};

export default LotteryCard;
