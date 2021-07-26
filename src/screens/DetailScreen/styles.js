import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    width: '100%',
    height: 400,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  content: {
    marginVertical: 16,
    marginHorizontal: 24,
    borderLeftWidth: 3,
    borderLeftColor: '#ddd',
  },
  text: {
    fontFamily: 'CircularStd-Book',
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 24,
  },
  name: {
    fontFamily: 'CircularStd-Black',
    color: '#121212',
    fontSize: 22,
    marginBottom: 8,
  },
});
