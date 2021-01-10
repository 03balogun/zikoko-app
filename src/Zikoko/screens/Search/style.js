import {StyleSheet} from 'react-native';

import {COLORS, PRIMARY_FONT} from '../../assets/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 24,
    paddingTop: 40,
  },
  searchContainer: {
    marginBottom: 37,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: PRIMARY_FONT.bold,
    color: COLORS.primaryText,
  },
  sectionHeaderClearBtnText: {
    color: COLORS.primaryText,
    opacity: 0.6,
    fontSize: 15,
    lineHeight: 20,
  },
  historyItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  historyItem: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginRight: 7,
    marginBottom: 11,
    backgroundColor: '#EDEDF4',
    borderRadius: 5,
  },
  historyItemText: {
    color: COLORS.primaryText,
    opacity: 0.3,
  },
});

export default styles;
