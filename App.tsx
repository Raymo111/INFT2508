import React from 'react';
import {
  Image,
  ImageProps,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Section = (props: { children: any }) => {
  return <View style={styles.section.container}>{props.children}</View>;
};

const SectionHeading = (props: { children: any }) => {
  return <View style={styles.section.heading}>{props.children}</View>;
};

const H1 = (props: { children: any }) => {
  return <Text style={styles.page.h1}>{props.children}</Text>;
};

const H3 = (props: { children: any }) => {
  return <Text style={styles.page.h3}>{props.children}</Text>;
};

const LotteryCard = (props: {
  img: ImageProps;
  highlight?: string;
  label: string;
  numbers: string;
}) => {
  return (
    <Pressable style={styles.card.container}>
      <Image source={props.img} style={styles.card.image} />
      {props.highlight && (
        <Text style={styles.card.highlight}>{props.highlight}</Text>
      )}
      <Text style={styles.card.label}>{props.label}</Text>
      <Text style={styles.card.numbers}>{props.numbers}</Text>
    </Pressable>
  );
};

const SeeMore = (props: { text: string }) => {
  return (
    <Pressable style={styles.section.seeMore}>
      <Text style={styles.section.seeMoreLabel}>{props.text}</Text>
      <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
    </Pressable>
  );
};

const NewsItem = (props: {
  img: ImageProps;
  title: string;
  date: string;
  source: string;
  text: string;
}) => {
  return (
    <Pressable style={styles.news.item}>
      <Image source={props.img} style={styles.news.image} />
      <View style={styles.news.content}>
        <Text style={styles.news.title}>{props.title}</Text>
        <View style={styles.news.subtitle}>
          <Text style={styles.news.subtitleText}>{props.date}</Text>
          <Text style={styles.news.subtitleText}>{props.source}</Text>
        </View>
        <Text style={styles.news.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const NavItem = (props: { icon: string; label: string }) => {
  return (
    <Pressable style={styles.nav.button}>
      <MaterialIcons name={props.icon} size={28} color="white" />
      <Text style={styles.nav.label}>{props.label}</Text>
    </Pressable>
  );
};

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
        <Section>
          <SectionHeading>
            <H1>Today's Lottery Results</H1>
            <H3>October 1, 2023</H3>
          </SectionHeading>
          <ScrollView horizontal={true}>
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'Jackpot Winner'}
              label={'Norsk Tipping'}
              numbers={'1 2 3 4 5'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'2nd Prize Winner'}
              label={'Powerball'}
              numbers={'6 7 8 9 10'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'3rd Prize Winner'}
              label={'Mega Millions'}
              numbers={'11 12 13 14 15'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              label={'EuroMillions'}
              numbers={'12 13 14 15 16 17'}
            />
          </ScrollView>
        </Section>
        {/*  Previous lottery results */}
        <Section>
          <SectionHeading>
            <H1>Previous Lottery Results</H1>
            <SeeMore text={'View All Results'} />
          </SectionHeading>
          <ScrollView horizontal={true}>
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'5th Prize Winner'}
              label={'Lotto 6/49'}
              numbers={'1 2 3 4 5'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'8th Prize Winner'}
              label={'SuperEnalotto'}
              numbers={'6 7 8 9 10'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              highlight={'7th Prize Winner'}
              label={'Mega Millions'}
              numbers={'11 12 13 14 15'}
            />
            <LotteryCard
              img={require('./assets/result-placeholder.png')}
              label={'EuroMillions'}
              numbers={'12 13 14 15 16 17'}
            />
          </ScrollView>
        </Section>
        {/*  Lottery news */}
        <Section>
          <SectionHeading>
            <H1>Lottery News</H1>
            <SeeMore text={'View All News'} />
          </SectionHeading>
          <View style={styles.news.container}>
            <NewsItem
              img={require('./assets/news-placeholder.png')}
              title={'New Lottery Game Launching Soon'}
              date={'October 1, 2023'}
              source={'LotteryNEWS'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci eget fauci...'
              }
            />
            <NewsItem
              img={require('./assets/news-placeholder.png')}
              title={'Tips to Increase Your Chances of Winning'}
              date={'October 1, 2023'}
              source={'Norsk Tipping'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci eget fauci...'
              }
            />
          </View>
        </Section>
      </ScrollView>
      {/*  Bottom nav bar */}
      <View style={styles.nav.container}>
        <NavItem icon={'home'} label={'Home'} />
        <NavItem icon={'whatshot'} label={'Hot Numbers'} />
        <NavItem icon={'calendar-month'} label={'Results'} />
        <NavItem icon={'newspaper'} label={'News'} />
        <NavItem icon={'insights'} label={'Statistics'} />
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

export default Inft2508App;
