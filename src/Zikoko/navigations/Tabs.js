import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {COLORS, PRIMARY_FONT} from '../assets/config';
const width = Dimensions.get('window').width;
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tabs = ({scenes, tabRoutes, tabBarStyle, indicatorStyle, labelStyle}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(tabRoutes);

  const renderScene = SceneMap(scenes);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={indicatorStyle || styles.indicatorStyle}
      style={tabBarStyle || styles.tabBar}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            labelStyle || styles.renderLabel,
            {color: focused ? COLORS.primaryText : '#aeb5c0'},
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width}}
    />
  );
};

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: COLORS.primary,
    height: 3,
    borderRadius: 8,
  },
  renderLabel: {
    fontSize: hp('1.5%'),
    fontWeight: '500',
    fontFamily: PRIMARY_FONT.medium,
    margin: 8,
  },
  tabBar: {
    backgroundColor: 'transparent',
    marginBottom: 15,
  },
  tabView: {backgroundColor: '#FFF'},
});

export default Tabs;
