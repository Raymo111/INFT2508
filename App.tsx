import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Inft2508App = () => {
  return (
    <SafeAreaView style={styles.screen.container}>
      {/*  Fixed header */}
      <View style={styles.header.container}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="grey" />
        <Text style={styles.header.title}>Lottery App</Text>
        <Image
          source={require('./assets/logo.png')}
          style={styles.header.icon}
        />
      </View>
      {/* Scrollable page  */}
      <ScrollView style={styles.page.container}>
        {/* Search bar */}
        <View style={styles.search.container}>
          <TextInput
            style={styles.search.input}
            placeholder="Search for lottery numbers"
            placeholderTextColor={'#888'}
          />
          <Pressable style={styles.search.button}>
            <MaterialIcons name="search" size={24} color="grey" />
          </Pressable>
        </View>
        {/*  Today's lottery results */}
        <View style={styles.section.container}>
          <View style={styles.section.heading}>
            <Text style={styles.page.h1}>Today's Lottery Results</Text>
            <Text style={styles.page.h3}>October 1, 2023</Text>
          </View>
          <ScrollView horizontal={true}>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>Jackpot Winner</Text>
              <Text style={styles.card.label}>Norsk Tipping</Text>
              <Text style={styles.card.numbers}>1 2 3 4 5</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>2nd Prize Winner</Text>
              <Text style={styles.card.label}>Powerball</Text>
              <Text style={styles.card.numbers}>6 7 8 9 10</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>3rd Prize Winner</Text>
              <Text style={styles.card.label}>Mega Millions</Text>
              <Text style={styles.card.numbers}>11 12 13 14 15</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.label}>EuroMillions</Text>
              <Text style={styles.card.numbers}>12 13 14 15 16 17</Text>
            </Pressable>
          </ScrollView>
        </View>
        {/*  Previous lottery results */}
        <View style={styles.section.container}>
          <View style={styles.section.heading}>
            <Text style={styles.page.h1}>Previous Lottery Results</Text>
            <Pressable style={styles.section.seeMore}>
              <Text style={styles.section.seeMoreLabel}>View More Results</Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>5th Prize Winner</Text>
              <Text style={styles.card.label}>Lotto 6/49</Text>
              <Text style={styles.card.numbers}>1 2 3 4 5</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>8th Prize Winner</Text>
              <Text style={styles.card.label}>SuperEnalotto</Text>
              <Text style={styles.card.numbers}>6 7 8 9 10</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.prizeWon}>7th Prize Winner</Text>
              <Text style={styles.card.label}>Mega Millions</Text>
              <Text style={styles.card.numbers}>11 12 13 14 15</Text>
            </Pressable>
            <Pressable style={styles.card.container}>
              <Image
                source={require('./assets/result-placeholder.png')}
                style={styles.card.image}
              />
              <Text style={styles.card.label}>EuroMillions</Text>
              <Text style={styles.card.numbers}>12 13 14 15 16 17</Text>
            </Pressable>
          </ScrollView>
        </View>
        {/*  Lottery news */}
        <View style={styles.section.container}>
          <View style={styles.section.heading}>
            <Text style={styles.page.h1}>Lottery News</Text>
            <Pressable style={styles.section.seeMore}>
              <Text style={styles.section.seeMoreLabel}>View All News</Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
            </Pressable>
          </View>
          <View style={styles.news.container}>
            <Pressable style={styles.news.item}>
              <Image
                source={require('./assets/news-placeholder.png')}
                style={styles.news.image}
              />
              <View style={styles.news.content}>
                <Text style={styles.news.title}>
                  New Lottery Game Launching Soon
                </Text>
                <View style={styles.news.subtitle}>
                  <Text style={styles.news.subtitleText}>October 1, 2023</Text>
                  <Text style={styles.news.subtitleText}>LotteryNEWS</Text>
                </View>
                <Text style={styles.news.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  orci eget fauci...
                </Text>
              </View>
            </Pressable>
            <Pressable style={styles.news.item}>
              <Image
                source={require('./assets/news-placeholder.png')}
                style={styles.news.image}
              />
              <View style={styles.news.content}>
                <Text style={styles.news.title}>
                  Tips to Increase Your Chances of Winning
                </Text>
                <View style={styles.news.subtitle}>
                  <Text style={styles.news.subtitleText}>October 1, 2023</Text>
                  <Text style={styles.news.subtitleText}>Norsk Tipping</Text>
                </View>
                <Text style={styles.news.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  orci eget fauci...
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.nav.container}>
        <Pressable style={styles.nav.button}>
          <MaterialIcons name="home" size={28} color="white" />
          <Text style={styles.nav.label}>Home</Text>
        </Pressable>
        <Pressable style={styles.nav.button}>
          <MaterialIcons name="whatshot" size={28} color="white" />
          <Text style={styles.nav.label}>Hot Numbers</Text>
        </Pressable>
        <Pressable style={styles.nav.button}>
          <MaterialIcons name="calendar-month" size={28} color="white" />
          <Text style={styles.nav.label}>Results</Text>
        </Pressable>
        <Pressable style={styles.nav.button}>
          <MaterialIcons name="newspaper" size={28} color="white" />
          <Text style={styles.nav.label}>News</Text>
        </Pressable>
        <Pressable style={styles.nav.button}>
          <MaterialIcons name="insights" size={28} color="white" />
          <Text style={styles.nav.label}>statistics</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = {
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
    prizeWon: {
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

export default Inft2508App;
