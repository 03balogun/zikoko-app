import {StyleSheet} from 'react-native';

import {COLORS, PRIMARY_FONT} from '../../assets/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 13,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: COLORS.primaryText,
  },
  headerIcon: {
    position: 'absolute',
    right: 0,
  },
  tabBarStyle: {
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
    elevation: 0,
    marginHorizontal: 20,
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: '80%',
    top: '10%',
    bottom: '10%',
    width: '46%',
    left: 8,
    right: 8,
    borderRadius: 5,
  },
  labelStyle: {
    color: COLORS.primaryText,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
  },
  cardList: {
    marginHorizontal: 20
  }
});

export default styles;
