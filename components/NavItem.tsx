import { Pressable, Text } from 'react-native';
import { Styles } from './Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const NavItem = (props: { icon: string; label: string }) => {
  return (
    <Pressable style={Styles.nav.button}>
      <MaterialIcons name={props.icon} size={28} color="white" />
      <Text style={Styles.nav.label}>{props.label}</Text>
    </Pressable>
  );
};

export default NavItem;
