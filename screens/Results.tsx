import React, { useState } from 'react';
import {
  H1,
  H3,
  LotteryResult,
  Section,
  SectionHeading,
} from '../components/Components';
import { ImageProps, SafeAreaView, ScrollView } from 'react-native';
import { Styles } from '../components/Styles';
import LotteryCard from '../components/LotteryCard';

const ResultsScreen = ({ navigation }: { navigation: any }) => {
  const images = {
    resultPlaceholder: require('../assets/result-placeholder.png'),
  };

  const data = require('../assets/dummydata.json');

  // Initial state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resultsToday, setResultsToday] = useState<LotteryResult[]>(
    data.initialResultsToday,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resultsPrevious, setResultsPrevious] = useState<LotteryResult[]>(
    data.initialResultsPrevious,
  );
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

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/*  Today's lottery results */}
        <Section>
          <SectionHeading>
            <H1>Today's Lottery Results</H1>
            <H3>{dateToday}</H3>
          </SectionHeading>
          <ScrollView>
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
          </SectionHeading>
          <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultsScreen;
