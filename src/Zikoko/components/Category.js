import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, PRIMARY_FONT} from '../assets/config';

const Category = ({category}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.category}>
    <View>
      <View style={styles.categoryIcon}>{category.icon}</View>
      <Text style={styles.categoryText}>{category.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  categoryIcon: {
    height: wp('18.8%'),
    width: wp('18.8%'),
    borderWidth: 1,
    borderColor: '#F4E9FB',
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    justifyContent: 'center',
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: PRIMARY_FONT.medium,
    textAlign: 'center',
    color: COLORS.primaryText,
  },
});

export default Category;
