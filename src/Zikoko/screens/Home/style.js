import {StyleSheet} from 'react-native';

import {COLORS, PRIMARY_FONT} from '../../assets/config';

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    paddingRight: 23,
    paddingLeft: 23,
    paddingTop: 13,
    paddingBottom: 30,
  },
  headContainer: {
    height: 85,
    backgroundColor: COLORS.secondary,
    paddingRight: 23,
    paddingLeft: 23,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileDetails: {
    width: 136,
    height: 44,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 18,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 22,
    backgroundColor: COLORS.tertiary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontFamily: PRIMARY_FONT.semiBold,
    fontSize: 18,
    marginLeft: 10,
    color: COLORS.primaryText,
  },
  categoryContainer: {
    height: 195,
    backgroundColor: '#F3F3F9',
    paddingTop: 18,
    paddingRight: 23,
    paddingLeft: 23,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1.5,
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: PRIMARY_FONT.bold,
    color: COLORS.primaryText,
  },
  categories: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  continueReading: {
    marginTop: 25,
  },
  horizontalScroll: {
    marginTop: 24,
    marginBottom: 18,
  },
});

export default styles;
