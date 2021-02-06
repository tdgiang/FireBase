import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT} from '../../config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import  SnackBar from '../SnackBar'
import { connect } from "react-redux";
const HeaderHome = (props) => {

  const {fullname}=props.user

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#0062E1', '#22AEFB']}>
      <StatusBar barStyle="light-content" backgroundColor={'#0062E1'} />
      <SnackBar />
      <View style={styles.container}>
        <Image source={R.images.avartar} style={styles.img} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.txtTitle}>{fullname}</Text>
          <Text style={styles.txt}>Nhân viên kinh doanh</Text>
        </View>
      </View>
    </LinearGradient>
  );
};




const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderHome);


const styles = StyleSheet.create({
  container: {
    height: HEIGHT(65),
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingTop: 15,
  },
  txtTitle: {
    marginTop:2,
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: 'bold',
  },
  txt: {fontSize: getFontXD(36), color: R.colors.white},
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: R.colors.white,
  },
});
