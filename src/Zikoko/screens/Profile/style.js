import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {COLORS, PRIMARY_FONT} from '../../assets/config';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.secondary, padding: 24},
  headerContainer: {
    height: 50,
    backgroundColor: COLORS.secondary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileContainer: {
    height: 150,
    alignItems: 'center',
  },
  profileImageContainer: {
    height: 82,
    width: 82,
    backgroundColor: '#FFF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageBorder: {
    height: 72,
    width: 72,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 3,
  },
  profileImage: {
    height: 65,
    width: 65,
  },
  profileName: {
    marginTop: 10,
    color: COLORS.primaryText,
    fontFamily: PRIMARY_FONT.semiBold,
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
  },
  profileEmail: {
    marginTop: 8,
    color: '#545455',
    fontFamily: PRIMARY_FONT.regular,
    fontSize: 16,
    lineHeight: 19,
  },
  continueReading: {
    marginTop: 70,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: PRIMARY_FONT.bold,
    color: COLORS.primaryText,
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    paddingBottom: 200,
  },
});

export default styles;
