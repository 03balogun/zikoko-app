import React from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {COLORS, PRIMARY_FONT} from '../assets/config';
import SearchIcon from '../assets/icons/search_input.svg';

const SearchInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBtn}>
        <SearchIcon width={15} height={15} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBtn: {
    paddingVertical: 17,
    paddingLeft: 18,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingVertical: 17,
      },
    }),
    paddingRight: 18,
    fontFamily: PRIMARY_FONT.regular,
    fontSize: 13,
    lineHeight: 15,
  },
});
