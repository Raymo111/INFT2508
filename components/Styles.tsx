import { StyleSheet } from 'react-native';

export const Styles = {
  screen: StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
  header: StyleSheet.create({
    container: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 8,
      paddingRight: 8,
      width: '100%',
      backgroundColor: '#222',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      flex: 1,
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 8,
    },
    icon: {
      width: 24,
      height: 24,
    },
  }),
  page: StyleSheet.create({
    container: {
      backgroundColor: '#000',
      padding: 12,
      color: '#FFF',
      flex: 1,
    },
    h1: {
      fontSize: 18,
      color: '#FFF',
    },
    h3: {
      fontSize: 12,
      color: '#AAA',
    },
  }),
  search: StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderRadius: 5,
      borderWidth: 1,
      paddingRight: 12,
      borderColor: '#222',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingLeft: 12,
      paddingTop: 4,
      paddingBottom: 4,
    },
    button: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: '#222',
      borderRadius: 5,
    },
  }),
  section: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
    },
    heading: {
      marginBottom: 12,
    },
    seeMore: {
      borderWidth: 1,
      borderColor: '#FFF',
      borderRadius: 5,
      position: 'absolute',
      right: 0,
      top: 0,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    seeMoreLabel: {
      fontSize: 12,
      color: '#FFF',
      borderStyle: 'solid',
    },
  }),
  card: StyleSheet.create({
    container: {
      width: 200,
      marginRight: 8,
      marginBottom: 8,
    },
    image: {
      width: '100%',
      height: 200,
    },
    highlight: {
      fontSize: 12,
      padding: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#D4AF37',
      color: '#000',
    },
    label: {
      fontSize: 12,
      color: '#FFF',
      marginTop: 4,
      marginBottom: 4,
    },
    numbers: {
      fontSize: 16,
      color: '#FFF',
    },
  }),
  news: StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    image: {
      width: 100,
      height: 100,
    },
    content: {
      flex: 1,
      marginLeft: 8,
    },
    title: {
      fontSize: 16,
      color: '#FFF',
      marginBottom: 2,
    },
    subtitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    subtitleText: {
      fontSize: 12,
      color: '#AAA',
    },
    text: {
      fontSize: 12,
      color: '#FFF',
    },
  }),
  nav: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#222',
      padding: 8,
    },
    button: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
    },
    label: {
      fontSize: 10,
      color: '#FFF',
    },
  }),
};
