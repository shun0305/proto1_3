import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const PostView = (props) => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <TouchableOpacity
          onPress={() => props.setModalVisible(!props.modalVisible)}
          style={styles.icon}
        >
          <MaterialIcons name={props.iconName} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <TextInput
          value={props.text}
          placeholder="What is going on ?"
          placeholderTextColor="gray"
          keyboardType="default"
          numberOfLines={5}
          multiline={true}
          style={{ fontSize: 20 }}
          onChangeText={props.setText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  screen: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    width: '82%',
    height: 300,
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
    height: 35,
  },
});

export default PostView;
