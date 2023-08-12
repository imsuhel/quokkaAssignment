import {StyleSheet} from 'react-native';

export default GStyles = StyleSheet.create({
  blueColor: '#4527a0',
  whiteColor: '#ffffff',
  blackColor: '#000000',
  lightBlack: '#36343D',
  px15: {
    paddingHorizontal: 15,
  },
  screenBackgrond: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  screenStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  bigTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'poppinsBold',
    color: '#ffffff',
  },
  smallHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'poppinsMedium',
    color: '#fff',
  },
  normlTxt: {
    fontSize: 14,
    fontFamily: 'poppinsRegular',
    color: '#ffffff',
  },
  smallTxt: {
    fontSize: 12,
    fontFamily: 'poppinsRegular',
    color: '#ffffff',
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
    color: '#ffffff',
    height: 50,
    position: 'relative',
    zIndex: 9,
  },
  labelStyle: {
    fontSize: 16,
    fontFamily: 'poppinsRegular',
    color: '#ffffff',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  buttonContain: {
    backgroundColor: '#AC3DF5',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#AC3DF5',
  },
  buttonOutline: {
    backgroundColor: '#36343D',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#36343D',
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
  flotingInput: {
    height: 76,
    backgroundColor: '#36343D',
    borderRadius: 10,
    paddingTop: 18,
    paddingHorizontal: 20,
    color: '#fff',
  },
});
