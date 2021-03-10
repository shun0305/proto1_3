import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const CategoryModal = (props) => {
  function selectFoodIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('fastfood');
  }

  function selectCarIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('directions-car');
  }

  function selectSmokeIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('smoking-rooms');
  }

  function selectMoneyIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('attach-money');
  }

  function selectWcIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('wc');
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Category</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => selectFoodIcon()} style={styles.icon}>
                <MaterialIcons name="fastfood" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectCarIcon()} style={styles.icon}>
                <MaterialIcons name="directions-car" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectSmokeIcon()} style={styles.icon}>
                <MaterialIcons name="smoking-rooms" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectMoneyIcon()} style={styles.icon}>
                <MaterialIcons name="attach-money" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectWcIcon()} style={styles.icon}>
                <MaterialIcons name="wc" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: 300,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default CategoryModal;
