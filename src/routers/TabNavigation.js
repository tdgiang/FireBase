import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home/Home';
import {connect} from 'react-redux';
import R from '../assets/R';

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      tabBarOptions={{activeTintColor: R.colors.main}}>
      <Tab.Screen
        name="Screen1"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    notifi: state.CountNotificationReducer,
  };
};

export default connect(
  mapStateToProps,
  {},
)(TabNavigator);
