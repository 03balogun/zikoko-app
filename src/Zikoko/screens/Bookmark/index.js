import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';

import FilterIcon from '../../assets/icons/filter.svg';
import Tabs from '../../navigations/Tabs';
import {bookmarkedReads} from '../../api/staticData';
import TabCard from '../../components/TabCard';

const tabRoutes = [
  {key: 'Stacks', title: 'Stacks'},
  {key: 'Watch', title: 'Watch'},
];

const BookmarkList = () => (
  <FlatList
    data={bookmarkedReads}
    keyExtractor={(item, index) => JSON.stringify(index)}
    renderItem={({item}) => <TabCard article={item} isBookmarked />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.cardList}
  />
);

const Stacks = () => <BookmarkList />;

const Watch = () => <BookmarkList />;

const tabScenes = {
  Stacks,
  Watch,
};

const Bookmark = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Bookmark</Text>
      <TouchableOpacity style={styles.headerIcon}>
        <FilterIcon width={14} height={18} />
      </TouchableOpacity>
    </View>
    <Tabs
      scenes={tabScenes}
      tabRoutes={tabRoutes}
      tabBarStyle={styles.tabBarStyle}
      indicatorStyle={styles.indicatorStyle}
      labelStyle={styles.labelStyle}
    />
  </View>
);

export default Bookmark;
