import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: '	Brush Script MT',
    fontStyle: 'italic',
    fontsize: 90,
    color: '#000',
  },
  input: {
    borderWidth: 3,
    borderColor: '#000',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
