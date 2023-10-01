import React, { useState } from 'react';
import {
  Image,
  ImageProps,
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
  const images = {
    logo: require('./assets/logo.png'),
    resultPlaceholder: require('./assets/result-placeholder.png'),
    newsPlaceholder: require('./assets/news-placeholder.png'),
  };

  const initialResultsToday = [
    {
      id: 1,
      img: images.resultPlaceholder,
      highlight: 'Jackpot Winner',
      label: 'Norsk Tipping',
      numbers: '1 2 3 4 5',
    },
    {
      id: 2,
      img: images.resultPlaceholder,
      highlight: '2nd Prize Winner',
      label: 'Powerball',
      numbers: '6 7 8 9 10',
    },
    {
      id: 3,
      img: images.resultPlaceholder,
      highlight: '3rd Prize Winner',
      label: 'Mega Millions',
      numbers: '11 12 13 14 15',
    },
    {
      id: 4,
      img: images.resultPlaceholder,
      label: 'EuroMillions',
      numbers: '12 13 14 15 16 17',
    },
  ];
  const initialResultsPrevious = [
    {
      id: 1,
      img: images.resultPlaceholder,
      highlight: '5th Prize Winner',
      label: 'Lotto 6/49',
      numbers: '1 2 3 4 5',
    },
    {
      id: 2,
      img: images.resultPlaceholder,
      highlight: '8th Prize Winner',
      label: 'SuperEnalotto',
      numbers: '6 7 8 9 10',
    },
    {
      id: 3,
      img: images.resultPlaceholder,
      highlight: '7th Prize Winner',
      label: 'Mega Millions',
      numbers: '11 12 13 14 15',
    },
    {
      id: 4,
      img: images.resultPlaceholder,
      label: 'EuroMillions',
      numbers: '12 13 14 15 16 17',
    },
  ];

  const initialNews = [
    {
      id: 1,
      img: images.newsPlaceholder,
      title: 'New Lottery Game Launching Soon',
      date: 'October 1, 2023',
      source: 'LotteryNEWS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci eget fauci...',
    },
    {
      id: 2,
      img: images.newsPlaceholder,
      title: 'Tips to Increase Your Chances of Winning',
      date: 'October 1, 2023',
      source: 'Norsk Tipping',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci eget fauci...',
    },
  ];

  // Initial state
  const [resultsToday, setResultsToday] = useState(initialResultsToday);
  const [resultsPrevious, setResultsPrevious] = useState(
    initialResultsPrevious,
  );
  const [news, setNews] = useState(initialNews);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateToday, setDateToday] = useState(
    new Date(Date.now()).toLocaleDateString(),
  );

  const searchChangedHandler = (search: string) => {
    const matchedResultsToday: {
      id: number;
      img: ImageProps;
      label: string;
      numbers: string;
      highlight?: string;
    }[] = [];
    const matchedResultsPrevious: {
      id: number;
      img: ImageProps;
      label: string;
      numbers: string;
      highlight?: string;
    }[] = [];
    const matchedNews: {
      id: number;
      img: ImageProps;
      title: string;
      date: string;
      source: string;
      text: string;
    }[] = [];
    if (search.trim().length > 0) {
      resultsToday.map(value => {
        if (value.numbers.includes(search)) {
          matchedResultsToday.push(value);
        }
      });
      resultsPrevious.map(value => {
        if (value.numbers.includes(search)) {
          matchedResultsPrevious.push(value);
        }
      });
      news.map(value => {
        if (value.title.includes(search)) {
          matchedNews.push(value);
        }
      });
      setResultsToday(matchedResultsToday);
      setResultsPrevious(matchedResultsPrevious);
      setNews(matchedNews);
    } else {
      setResultsToday(initialResultsToday);
      setResultsPrevious(initialResultsPrevious);
      setNews(initialNews);
    }
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/*  Fixed header */}
      <View style={Styles.header.container}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="grey" />
        <Text style={Styles.header.title}>Lottery App</Text>
        <Image source={images.logo} style={Styles.header.icon} />
      </View>
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
                  img={result.img}
                  highlight={result.highlight}
                  label={result.label}
                  numbers={result.numbers}
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
                  img={result.img}
                  highlight={result.highlight}
                  label={result.label}
                  numbers={result.numbers}
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
                  img={item.img}
                  title={item.title}
                  date={item.date}
                  source={item.source}
                  text={item.text}
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
        <NavItem icon={'whatshot'} label={'Hot Numbers'} />
        <NavItem icon={'calendar-month'} label={'Results'} />
        <NavItem icon={'newspaper'} label={'News'} />
        <NavItem icon={'insights'} label={'Statistics'} />
      </View>
    </SafeAreaView>
  );
};

export default Inft2508App;
