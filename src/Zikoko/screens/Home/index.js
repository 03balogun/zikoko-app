import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';

import IcMenu from '../../assets/icons/ic-menu.svg';
import Category from '../../components/Category';
import Banner from '../../components/Banner';
import ArticleCard from '../../components/ArticleCard';
import TabCard from '../../components/TabCard';
import Tabs from '../../navigations/Tabs';

import {categories, pendingReads, todaysRead} from '../../api/staticData';

const TodaysRead = () => (
  <View style={{flex: 1, minHeight: 400}}>
    {todaysRead.map((article, index) => (
      <TabCard article={article} key={index} />
    ))}
  </View>
);

const Latest = () => <TodaysRead />;

const Trending = () => <TodaysRead />;

const tabRoutes = [
  {key: 'TodaysRead', title: "Today's Read"},
  {key: 'Latest', title: 'Latest'},
  {key: 'Trending', title: 'Trending'},
];
const tabScenes = {
  TodaysRead,
  Latest,
  Trending,
};

const Home = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.headContainer}>
      <TouchableOpacity activeOpacity={0.8} onclick={() => {}}>
        <IcMenu />
      </TouchableOpacity>
      <View style={styles.profileDetails}>
        <Image source={require('../../assets/images/avatars/avatar-1.png')} />
        <Text style={styles.profileName}>Hi, Foi..</Text>
      </View>
    </View>

    {/* Categories */}
    <View style={styles.categoryContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category) => (
          <Category category={category} key={category.title} />
        ))}
      </View>
    </View>

    {/* Bottom scroll*/}
    <ScrollView style={styles.scrollView}>
      <Banner />

      {/* Continue Reading */}
      <View style={styles.continueReading}>
        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <ScrollView
          style={styles.horizontalScroll}
          horizontal
          showsHorizontalScrollIndicator>
          {pendingReads.map((pendingRead, index) => (
            <ArticleCard article={pendingRead} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* Trends */}
      <Tabs scenes={tabScenes} tabRoutes={tabRoutes} />
    </ScrollView>
  </View>
);

export default Home;
