import { Image, ImageProps, Pressable, Text } from 'react-native';
import React from 'react';
import { Styles } from './Styles';

const LotteryCard = (props: {
  img: ImageProps;
  highlight?: string | null;
  label: string | null;
  numbers: string | null;
  showResults: (
    img: ImageProps,
    highlight: string | null,
    label: string | null,
    numbers: string | null,
  ) => void;
}) => {
  const handlePress = () => {
    props.showResults(
      props.img,
      props.highlight ? props.highlight : null,
      props.label,
      props.numbers,
    );
  };
  return (
    <Pressable style={Styles.card.container} onPress={handlePress}>
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
