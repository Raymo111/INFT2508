import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Styles } from './components/Styles';
import LotteryCard from './components/LotteryCard';
import SeeMore from './components/SeeMore';
import NewsItem from './components/NewsItem';
import NavItem from './components/NavItem';

const Section = (props: { children: any }) => {
  return <View style={Styles.section.container}>{props.children}</View>;
};

const SectionHeading = (props: { children: any }) => {
  return <View style={Styles.section.heading}>{props.children}</View>;
};

const H1 = (props: { children: any }) => {
  return <Text style={Styles.page.h1}>{props.children}</Text>;
};

const H3 = (props: { children: any }) => {
  return <Text style={Styles.page.h3}>{props.children}</Text>;
};

const Inft2508App = () => {
  return (
    <SafeAreaView style={Styles.screen.container}>
      {/*  Fixed header */}
      <View style={Styles.header.container}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="grey" />
        <Text style={Styles.header.title}>Lottery App</Text>
        <Image
          source={require('./assets/logo.png')}
          style={Styles.header.icon}
        />
      </View>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/* Search bar */}
        <View style={Styles.search.container}>
          <TextInput
            style={Styles.search.input}
            placeholder="Search for lottery numbers"
            placeholderTextColor={'#888'}
          />
          <Pressable style={Styles.search.button}>
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
          <View style={Styles.news.container}>
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
      <View style={Styles.nav.container}>
        <NavItem icon={'home'} label={'Home'} />
        <NavItem icon={'whatshot'} label={'Hot Numbers'} />
        <NavItem icon={'calendar-month'} label={'Results'} />
        <NavItem icon={'newspaper'} label={'News'} />
        <NavItem icon={'insights'} label={'Statistics'} />
      </View>
    </SafeAreaView>
  );
};

export default Inft2508App;
