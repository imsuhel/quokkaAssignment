import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Ripple from 'react-native-material-ripple';
import ButtonContain from '../components/ButtonContain';
import Modal from 'react-native-modal';

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <View style={[GlobalStyle.screenStyle]}>
      <StatusBar backgroundColor="#eae3ff" barStyle="dark-content" />
      <View
        style={[
          GlobalStyle.row,
          GlobalStyle.between,
          GlobalStyle.alignCenter,
          GlobalStyle.px15,
        ]}>
        <Ripple onPress={() => setOpenDrawer(true)}>
          <Image
            source={require('../imgs/drawerIcon.png')}
            style={{width: 30, height: 24}}
          />
        </Ripple>
        <Ripple style={{overflow: 'hidden', borderRadius: 50}}>
          <Image
            source={require('../imgs/user.png')}
            style={internalStyle.iconStyle}
          />
        </Ripple>
      </View>
      <ScrollView>
        <View
          style={[
            GlobalStyle.row,
            GlobalStyle.between,
            GlobalStyle.alignCenter,
            GlobalStyle.px15,
            {flexWrap: 'wrap'},
          ]}>
          <Image
            source={require('../imgs/loginBg.jpg')}
            style={internalStyle.imgStyle}
          />
          <Ripple style={internalStyle.cardStyle}>
            <Text style={GlobalStyle.bigTxt}>40</Text>
            <Text style={GlobalStyle.normlTxt}>Readers</Text>
          </Ripple>
          <Ripple style={internalStyle.cardStyle}>
            <Text style={GlobalStyle.bigTxt}>40</Text>
            <Text style={GlobalStyle.normlTxt}>Posts</Text>
          </Ripple>
          <Ripple style={internalStyle.cardStyle}>
            <Text style={GlobalStyle.bigTxt}>20</Text>
            <Text style={GlobalStyle.normlTxt}>Categories</Text>
          </Ripple>
          <Ripple style={internalStyle.cardStyle}>
            <Text style={GlobalStyle.bigTxt}>80</Text>
            <Text style={GlobalStyle.normlTxt}>Downloads</Text>
          </Ripple>
        </View>
      </ScrollView>
      <ButtonContain
        label="Create New Post"
        style={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: 15,
        }}
        action={() => {}}
      />
      <Modal
        isVisible={openDrawer}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        hasBackdrop={true}
        onSwipeComplete={() => setOpenDrawer(false)}
        onBackButtonPress={() => setOpenDrawer(false)}
        onBackdropPress={() => setOpenDrawer(false)}
        style={{margin: 0}}>
        <View style={{flex: 1, width: '70%', backgroundColor: '#fff'}}>
          <Ripple>
            <Text style={[GlobalStyle.normlTxt, {padding: 10}]}>Profile</Text>
          </Ripple>
          <Ripple>
            <Text style={[GlobalStyle.normlTxt, {padding: 10}]}>Profile</Text>
          </Ripple>
          <Ripple>
            <Text style={[GlobalStyle.normlTxt, {padding: 10}]}>Profile</Text>
          </Ripple>
          <Ripple>
            <Text style={[GlobalStyle.normlTxt, {padding: 10}]}>Profile</Text>
          </Ripple>
          <Ripple>
            <Text style={[GlobalStyle.normlTxt, {padding: 10}]}>Profile</Text>
          </Ripple>
        </View>
      </Modal>
    </View>
  );
};

export default Dashboard;
const internalStyle = StyleSheet.create({
  cardStyle: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  imgStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 40,
    borderRadius: 10,
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
