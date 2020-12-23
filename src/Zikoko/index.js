import React from 'react';
import BottomTab from './navigations/BottomTab';
import {SafeAreaView, StyleSheet} from 'react-native';

const Zikoko = () => (
  <>
    <SafeAreaView style={styles.topSafeAreaView} />
    <SafeAreaView style={styles.bodySafeAreaView}>
      <BottomTab />
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  topSafeAreaView: {
    backgroundColor: '#F3F3F9',
  },
  bodySafeAreaView: {
    flex: 1,
  },
});

export default Zikoko;
