import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  blueColor: '#4527a0',
  whiteColor: '#ffffff',
  blackColor: '#000000',
  px15: {
    paddingHorizontal: 15,
  },
  screenStyle: {
    flex: 1,
    height: '100%',
    backgroundColor: '#eae3ff',
  },
  bigTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'poppinsBold',
    color: '#000000',
  },
  smallHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'poppinsMedium',
    color: '#000000',
  },
  normlTxt: {
    fontSize: 14,
    fontFamily: 'poppinsRegular',
    color: '#000000',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    color: '#000000',
    height: 50,
    position: 'relative',
    zIndex: 9,
  },
  labelStyle: {
    fontSize: 16,
    fontFamily: 'poppinsRegular',
    color: '#000000',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  buttonContain: {
    backgroundColor: '#4527a0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#4527a0',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#4527a0',
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
});
