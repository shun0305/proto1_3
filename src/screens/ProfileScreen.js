import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SafeArea from '../components/SafeArea';

const ProfileScreen = () => {
  return (
    <SafeArea>
      <View style={styles.screen}>
        <Text>Profile Screen</Text>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ProfileScreen;
