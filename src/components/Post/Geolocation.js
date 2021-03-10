import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import ListScreen from '../../screens/ListScreen';

import Colors from '../../constants/Colors';

const Geolocation = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let lat = 'Your location is..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    lat = location.coords.latitude;
  }

  //console.log(location.coords.latitude)

  //const lat = location.coords.latitude

  return (
    <View style={styles.geoScreen}>
      <Text style={styles.geoText}>{lat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  geoScreen: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
  geoText: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: Colors.primaryColor,
    width: '90%',
    height: 50,
    padding: 15,
    textAlign: 'center',
  },
});

export default Geolocation;
