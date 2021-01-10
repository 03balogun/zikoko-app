import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';

import SearchInput from '../../components/SearchInput';

import {searchHistory} from '../../api/staticData';

const Search = () => (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <SearchInput placeholder="Search" />
    </View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>History</Text>
      <TouchableOpacity>
        <Text style={styles.sectionHeaderClearBtnText}>Clear</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.historyItems}>
      {searchHistory.map((item, index) => (
        <TouchableOpacity style={styles.historyItem} key={index}>
          <Text style={styles.historyItemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
export default Search;
