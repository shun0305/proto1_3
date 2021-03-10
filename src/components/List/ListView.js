import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/Colors';
import db from '../../../firebase';

const ListView = (props) => {
  const [geos, setGeos] = useState([]);

  function getGeo() {
    db.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      setGeos(dataArray);
      console.log(db);
    });
  }

  // useEffect(() => {
  //     getGeo();
  // }, []
  // )
  // .orderBy('date', 'desc').onSnapshot((querySnapshot) => {
  // const dataArray = []
  // querySnapshot.forEach((doc) => {
  //     dataArray.push(doc.data());
  // });
  const result = geos.map((item) => {
    <Text>{item.text}</Text>;
  });

  //console.log(geos)

  return (
    <View style={styles.screen}>
      <Text>List</Text>
      <View>{result}</View>
      <Button
        title="firestore"
        onPress={() => {
          getGeo();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.accentColor,
    height: 500,
  },
});

export default ListView;
