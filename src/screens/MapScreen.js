import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { Searchbar } from 'react-native-paper';

const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <Searchbar placeholder="SEARCH" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    padding: 10,
    position: 'absolute',
    right: '5%',
    bottom: '15%',
    width: '90%',
    height: 70,
  },
});

export default MapScreen;
