import {StyleSheet} from 'react-native';
// import globalStyles from './styles/global';

const styles = StyleSheet.create({
  abc: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  },
  title: {
    fontSize: 60,
    color: '#0044cc',
    padding: 10,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#ffffff',
    padding: 8,
    margin: 10,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 5,
  },
  btnTitle: {
    fontSize: 26,
    color: '#000000',
  },
  txtInputStyle: {
    height: 35,
    width: 300,
    fontSize: 15,
    color: '#000000',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  h1: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    color: '#000000',
    padding: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  txtGeneral: {
    fontFamily: 'Times new roman',
    fontSize: 25,
    color: '#000000',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn2: {
    backgroundColor: '#ffffff',
    padding: 8,
    margin: 10,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 5,
    fontSize: 26,
    color: '#000000',
  },
  txtTopic: {
    fontFamily: 'Times new roman',
    fontSize: 25,
    color: '#0000ff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
export default styles;
