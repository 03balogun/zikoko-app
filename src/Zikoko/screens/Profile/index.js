import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';

import CogIcon from '../../assets/icons/cog.svg';
import {profilePendingReads} from '../../api/staticData';
import ArticleCard from '../../components/ArticleCard';

const Profile = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.8} onclick={() => {}}>
        <CogIcon />
      </TouchableOpacity>
    </View>

    {/* Profile Details */}
    <View style={styles.profileContainer}>
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageBorder}>
          <Image
            source={require('../../assets/images/avatars/avatar-2.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <Text style={styles.profileName}>Foi Egwuenu</Text>
      <Text style={styles.profileEmail}>faithegwuenu@gmail.com</Text>
    </View>

    {/* Continue Reading */}
    <View style={styles.continueReading}>
      <Text style={styles.sectionTitle}>Continue Reading</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {profilePendingReads.map((pendingReads, index) => (
          <View style={styles.cardRow} key={index}>
            {pendingReads.map((pendingRead, cardIndex) => (
              <ArticleCard article={pendingRead} key={`card_${cardIndex}`} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);
export default Profile;
