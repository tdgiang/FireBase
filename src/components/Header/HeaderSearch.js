import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
    Platform
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, WIDTH, HEIGHTXD,HEIGHT} from '../../config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Block from '../Block';
import {useNavigation} from '@react-navigation/native';
import  SnackBar from '../SnackBar'
const HeaderSearch = (props) => {
  const {title,onChangText} = props;
  const navigate = useNavigation();
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    onChangText('')
    setOpenSearch(!openSearch);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#0062E1', '#22AEFB']}>
      <StatusBar barStyle="light-content" backgroundColor={'#0062E1'} />
<SnackBar/>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Block center row>
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <Icon name={'chevron-back'} size={30} color={R.colors.white} />
            </TouchableOpacity>
            {openSearch ? (
              <TextInput
                style={styles.txtInput}
                onChangeText={(val) => onChangText(val)}
              />
            ) : (
              <Text style={styles.txtTitle}>{title ? title : ''} </Text>
            )}
          </Block>
        </View>
        <TouchableOpacity onPress={toggleSearch}>
          {openSearch ? (
            <Icon
              style={[styles.btnIcon, {marginLeft: 10, marginRight: 20}]}
              name={'refresh-outline'}
              size={20}
              color={R.colors.white}
            />
          ) : (
            <Icon
              style={[styles.btnIcon, {marginLeft: 10, marginRight: 20}]}
              name={'search-sharp'}
              size={20}
              color={R.colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    height: 55,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: getFontXD(52),
    color: R.colors.white,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  txt: {fontSize: getFontXD(36), color: R.colors.white},
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: R.colors.white,
  },
  btnIcon: {
    backgroundColor: R.colors.lightBlue2,
    padding: 5,
    borderRadius: 20,
  },
  txtInput: {
    backgroundColor: R.colors.white,
    flex: 1,
    height: Platform.OS == "ios" ?  HEIGHT(30) : HEIGHT(35),
    fontSize: getFontXD(42),
    borderRadius: 10,
  },
});
