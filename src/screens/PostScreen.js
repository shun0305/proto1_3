import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../../firebase';

import SafeArea from '../components/SafeArea';
import CategoryModal from '../components/Post/CategoryModal';
import PostView from '../components/Post/PostView';
import Geolocation from '../components/Post/Geolocation';
import Colors from '../constants/Colors';

const PostScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iconName, setIconName] = useState('');
  const [text, setText] = useState('');
  const [warnOrProfit, setWarnOrProfit] = useState('');
  const [selectedWorP, setSelectedWorP] = useState('');

  function PushData() {
    db.add({
      text: text,
      warnorprofit: warnOrProfit,
      iconname: iconName,
      date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
    });
    setText('');
    setIconName('');
    props.navigation.navigate('Map');
  }

  function setWarn() {
    setWarnOrProfit('warn');
    setModalVisible(true);
    setSelectedWorP('warn');
  }

  function setProfit() {
    setWarnOrProfit('profit');
    setModalVisible(true);
    setSelectedWorP('profit');
  }

  return (
    <SafeArea>
      <View style={styles.topScreen}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Map');
          }}
        >
          <View style={styles.topButton}>
            <Text style={styles.textButton}>Cancel</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            PushData();
          }}
        >
          <View style={styles.topButton}>
            <Text style={styles.textButton}>Post</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.geoScreen}>
        <Geolocation />
      </View>

      <View style={styles.bottomScreen}>
        <TouchableOpacity onPress={() => setWarn()}>
          {selectedWorP === 'warn' ? (
            <View style={styles.bottomButtonSelected}>
              <Ionicons name="warning" size={24} color="white" />
              <Text style={styles.textButtonSelected}>Warn</Text>
            </View>
          ) : (
            <View style={styles.bottomButton}>
              <Ionicons name="warning" size={24} color={Colors.primaryColor} />
              <Text style={styles.textButton}>Warn</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setProfit();
          }}
        >
          {selectedWorP === 'profit' ? (
            <View style={styles.bottomButtonSelected}>
              <MaterialCommunityIcons name="lightbulb-on" size={24} color="white" />
              <Text style={styles.textButtonSelected}>Profit</Text>
            </View>
          ) : (
            <View style={styles.bottomButton}>
              <MaterialCommunityIcons name="lightbulb-on" size={24} color={Colors.primaryColor} />
              <Text style={styles.textButton}>Profit</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.post}>
        <PostView
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          iconName={iconName}
          setText={setText}
          text={text}
        />
      </View>
      <CategoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        iconName={iconName}
        setIconName={setIconName}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  topScreen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  topButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    width: 120,
    padding: 5,
  },
  textButton: {
    padding: 5,
    textAlign: 'center',
    color: 'gray',
  },
  textButtonSelected: {
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  bottomScreen: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    width: 120,
    padding: 5,
  },
  bottomButtonSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    width: 120,
    padding: 5,
  },
  post: {
    height: '100%',
    margin: 20,
  },
});

export default PostScreen;
