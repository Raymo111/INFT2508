import React, { useState } from 'react';
import {
  H1,
  H3,
  LotteryResult,
  News,
  Section,
  SectionHeading,
} from '../components/Components';
import {
  ImageProps,
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { Styles } from '../components/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LotteryCard from '../components/LotteryCard';
import SeeMore from '../components/SeeMore';
import NewsItem from '../components/NewsItem';
import NavItem from '../components/NavItem';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const images = {
    resultPlaceholder: require('../assets/result-placeholder.png'),
    newsPlaceholder: require('../assets/news-placeholder.png'),
  };

  const data = require('../assets/dummydata.json');

  // Initial state
  const [resultsToday, setResultsToday] = useState<LotteryResult[]>(
    data.initialResultsToday,
  );
  const [resultsPrevious, setResultsPrevious] = useState<LotteryResult[]>(
    data.initialResultsPrevious,
  );
  const [news, setNews] = useState<News[]>(data.initialNews);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateToday, setDateToday] = useState(
    new Date(Date.now()).toLocaleDateString(),
  );

  const showResultsHandler = (
    img: ImageProps,
    highlight: string | null,
    label: string | null,
    numbers: string | null,
  ) => {
    navigation.navigate('Result', { img, highlight, label, numbers });
  };

  const showNewsHandler = (
    img: ImageProps,
    title: string | null,
    date: string | null,
    source: string | null,
    text: string | null,
  ) => {
    navigation.navigate('NewsItem', { img, title, date, source, text });
  };

  const searchChangedHandler = (search: string) => {
    const matchedResultsToday: LotteryResult[] = [];
    const matchedResultsPrevious: LotteryResult[] = [];
    const matchedNews: News[] = [];
    if (search.trim().length > 0) {
      resultsToday.map(value => {
        if (value.numbers && value.numbers.includes(search)) {
          matchedResultsToday.push(value);
        }
      });
      resultsPrevious.map(value => {
        if (value.numbers && value.numbers.includes(search)) {
          matchedResultsPrevious.push(value);
        }
      });
      news.map(value => {
        if (value.title && value.title.includes(search)) {
          matchedNews.push(value);
        }
      });
      setResultsToday(matchedResultsToday);
      setResultsPrevious(matchedResultsPrevious);
      setNews(matchedNews);
    } else {
      setResultsToday(data.initialResultsToday);
      setResultsPrevious(data.initialResultsPrevious);
      setNews(data.initialNews);
    }
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/* Search bar */}
        <View style={Styles.search.container}>
          <TextInput
            style={Styles.search.input}
            placeholder="Search for lottery numbers"
            placeholderTextColor={'#888'}
            onChangeText={searchChangedHandler}
          />
          <Pressable style={Styles.search.button}>
            <MaterialIcons name="search" size={24} color="grey" />
          </Pressable>
        </View>
        {/*  Today's lottery results */}
        <Section>
          <SectionHeading>
            <H1>Today's Lottery Results</H1>
            <H3>{dateToday}</H3>
          </SectionHeading>
          <ScrollView horizontal={true}>
            {resultsToday.length > 0 ? (
              resultsToday.map(result => (
                <LotteryCard
                  key={result.id}
                  img={result.img ? result.img : images.resultPlaceholder}
                  highlight={result.highlight}
                  label={result.label}
                  numbers={result.numbers}
                  showResults={showResultsHandler}
                />
              ))
            ) : (
              <H3>No results found</H3>
            )}
          </ScrollView>
        </Section>
        {/*  Previous lottery results */}
        <Section>
          <SectionHeading>
            <H1>Previous Lottery Results</H1>
            <SeeMore text={'View All Results'} />
          </SectionHeading>
          <ScrollView horizontal={true}>
            {resultsPrevious.length > 0 ? (
              resultsPrevious.map(result => (
                <LotteryCard
                  key={result.id}
                  img={result.img ? result.img : images.resultPlaceholder}
                  highlight={result.highlight}
                  label={result.label}
                  numbers={result.numbers}
                  showResults={showResultsHandler}
                />
              ))
            ) : (
              <H3>No results found</H3>
            )}
          </ScrollView>
        </Section>
        {/*  Lottery news */}
        <Section>
          <SectionHeading>
            <H1>Lottery News</H1>
            <SeeMore text={'View All News'} />
          </SectionHeading>
          <View style={Styles.news.container}>
            {news.length > 0 ? (
              news.map(item => (
                <NewsItem
                  key={item.id}
                  img={item.img ? item.img : images.newsPlaceholder}
                  title={item.title}
                  date={item.date}
                  source={item.source}
                  text={item.text}
                  showNews={showNewsHandler}
                />
              ))
            ) : (
              <H3>No news found</H3>
            )}
          </View>
        </Section>
      </ScrollView>
      {/*  Bottom nav bar */}
      <View style={Styles.nav.container}>
        <NavItem icon={'home'} label={'Home'} />
        <NavItem icon={'calendar-month'} label={'Results'} />
        <NavItem icon={'newspaper'} label={'News'} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
