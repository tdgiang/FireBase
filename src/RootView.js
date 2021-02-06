import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import StackNavigation from './routers/StackNavigation';
import Modal from 'react-native-modal';
import {SkypeIndicator} from 'react-native-indicators';
const RootView = props => {
  return (
    <View style={{flex: 1}}>
      <Modal isVisible={props.loadingModal.isVisible}>
        <SkypeIndicator color={'white'} />
      </Modal>
      <StackNavigation />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(
  mapStateToProps,
  {},
)(RootView);
