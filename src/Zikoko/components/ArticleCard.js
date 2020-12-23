import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, PRIMARY_FONT} from '../assets/config';

const ArticleCard = ({article}) => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.articleCard}>
      <Image source={article.cover} style={styles.articleCover} />
      <Text style={styles.articleTile}>{article.title}</Text>
      <Text style={styles.articleAuthor}>By {article.author}</Text>
      <View style={styles.readProgress}>
        <View
          style={[styles.readProgressOffset, {width: `${article.progress}`}]}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  articleCard: {
    width: wp('23%'),
    marginRight: 24,
  },
  articleTile: {
    fontSize: 12,
    color: COLORS.primaryText,
    fontFamily: PRIMARY_FONT.semiBold,
    marginTop: 10,
  },
  articleAuthor: {
    color: '#818998',
    fontSize: 10,
    marginTop: 5,
    fontFamily: PRIMARY_FONT.regular,
  },
  articleCover: {width: '100%', height: 114},
  readProgress: {
    marginTop: 10,
    width: '100%',
    height: 5,
    borderRadius: 8,
    backgroundColor: '#C7C5C7',
  },
  readProgressOffset: {
    width: '30%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
});

export default ArticleCard;
