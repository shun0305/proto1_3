import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Searchbar } from 'react-native-paper';
import SafeArea from '../components/SafeArea';
import ListView from '../components/List/ListView';

const ListScreen = () => {
  return (
    <SafeArea>
      <View style={styles.search}>
        <Searchbar placeholder="SEARCH" />
      </View>
      <View style={styles.list}>
        <ListView />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
  },
});

export default ListScreen;
