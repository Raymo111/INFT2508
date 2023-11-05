import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const images = {
    resultPlaceholder: require('../assets/result-placeholder.png'),
    newsPlaceholder: require('../assets/news-placeholder.png'),
  };

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
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
  const [myNumbers, setMyNumbers] = useState('');
  let numbersWasEmpty = true;
  const endpoint = 'http://localhost:3000/num';

  useEffect(() => {
    fetch('https://cloud.raymond.li/data.json').then(response => {
      response.json().then(res => {
        setData(res);
        setResultsToday(res.initialResultsToday);
        setResultsPrevious(res.initialResultsPrevious);
        setNews(res.initialNews);
      });
    });
    try {
      AsyncStorage.getItem('mynumbers').then(value => {
        if (value !== null) {
          setMyNumbers(value);
        }
      });
    } catch (e) {
      console.log('Error');
    }
  }, []);

  useEffect(() => {
    try {
      // Persist to storage
      AsyncStorage.setItem('mynumbers', myNumbers).then(r => {
        console.log(r);
      });

      // Send to server
      if (myNumbers.trim().length === 0) {
        // DELETE when empty
        fetch(endpoint, {
          method: 'DELETE',
        }).then(response => {
          response.json().then(res => {
            console.log(res);
          });
        });
      } else if (numbersWasEmpty) {
        // POST when was empty
        fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numbers: myNumbers,
          }),
        }).then(response => {
          response.json().then(res => {
            console.log(res);
          });
        });
      } else {
        // PUT when not empty
        fetch(endpoint, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numbers: myNumbers,
          }),
        }).then(response => {
          response.json().then(res => {
            console.log(res);
          });
        });
      }
    } catch (e) {
      console.log('Error');
    }
  }, [myNumbers, numbersWasEmpty]);

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
    navigation.navigate('NewsStory', { img, title, date, source, text });
  };

  const seeMoreResultsHandler = () => {
    navigation.navigate('ResultsTab');
  };

  const seeMoreNewsHandler = () => {
    navigation.navigate('NewsTab');
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

  const myNumbersChangedHandler = (newNumbers: string) => {
    numbersWasEmpty = myNumbers.trim().length === 0;
    setMyNumbers(newNumbers);
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
        {/* My numbers */}
        <Section>
          <SectionHeading>
            <H1>My numbers</H1>
          </SectionHeading>
          <TextInput
            style={Styles.search.numbers}
            placeholder="123456"
            value={myNumbers}
            onChangeText={myNumbersChangedHandler}
          />
        </Section>
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
            <SeeMore text={'View All Results'} action={seeMoreResultsHandler} />
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
            <SeeMore text={'View All News'} action={seeMoreNewsHandler} />
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
    </SafeAreaView>
  );
};

export default HomeScreen;
