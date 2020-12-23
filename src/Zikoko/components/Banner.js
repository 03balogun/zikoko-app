import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {COLORS, PRIMARY_FONT} from '../assets/config';

const Banner = () => (
  <View style={styles.bannerWrapper}>
    <ImageBackground
      style={styles.banner}
      source={require('../assets/images/banner.png')}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerText}>
          Help Zikoko keep making{'\n'}the content you love
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Contribute ></Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <View style={styles.bannerOffset} />
  </View>
);

const styles = StyleSheet.create({
  bannerWrapper: {alignItems: 'center'},
  banner: {
    minHeight: 137,
    width: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    padding: 19,
  },
  bannerText: {
    fontSize: 17,
    fontFamily: PRIMARY_FONT.bold,
    color: '#FFF',
    lineHeight: 25,
  },
  bannerOffset: {
    height: 13,
    width: '97%',
    borderRadius: 3,
    backgroundColor: COLORS.tertiary,
    position: 'absolute',
    bottom: -8,
    zIndex: -1,
  },
  secondaryButton: {
    marginTop: 11,
    backgroundColor: '#F0F1F6',
    width: 117,
    height: 42,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  secondaryButtonText: {
    fontFamily: PRIMARY_FONT.bold,
    color: COLORS.primary,
    fontSize: 14,
  },
});

export default Banner;
