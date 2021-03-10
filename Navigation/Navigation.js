import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import MapScreen from '../src/screens/MapScreen';
import ListScreen from '../src/screens/ListScreen';
import PostScreen from '../src/screens/PostScreen';
import NoticeScreen from '../src/screens/Notice';
import ProfileScreen from '../src/screens/ProfileScreen';
import Colors from '../src/constants/Colors';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Map: 'map',
  List: 'list',
  Post: 'add-location',
  Profile: 'person',
  Notice: 'notifications',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <MaterialIcons name={iconName} size={size} color={color} />,
  };
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({}) => (
            <View style={styles.centerIcon}>
              <MaterialIcons name="add-location" color="white" size={40} />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Notice" component={NoticeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  centerIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,

    top: -13,
    elevation: 5,
  },
});

export default Navigation;
