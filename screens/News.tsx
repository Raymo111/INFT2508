import React, { useEffect, useState } from 'react';
import {
  H1,
  H3, LotteryResult,
  News,
  Section,
  SectionHeading,
} from '../components/Components';
import { ImageProps, SafeAreaView, ScrollView, View } from 'react-native';
import { Styles } from '../components/Styles';
import NewsItem from '../components/NewsItem';

const NewsScreen = ({ navigation }: { navigation: any }) => {
  const images = {
    newsPlaceholder: require('../assets/news-placeholder.png'),
  };

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [news, setNews] = useState<News[]>(data.initialNews);

  useEffect(() => {
    fetch('https://cloud.raymond.li/data.json').then(response => {
      response.json().then(res => {
        setData(res);
        setNews(res.initialNews);
      });
    });
  }, []);

  const showNewsHandler = (
    img: ImageProps,
    title: string | null,
    date: string | null,
    source: string | null,
    text: string | null,
  ) => {
    navigation.navigate('NewsStory', { img, title, date, source, text });
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/*  Lottery news */}
        <Section>
          <SectionHeading>
            <H1>Lottery News</H1>
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

export default NewsScreen;
