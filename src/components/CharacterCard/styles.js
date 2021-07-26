import { StyleSheet } from 'react-native';

const cardWidth = 142;
const cardHeight = 192;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: cardWidth,
    height: 192,
    borderRadius: 20,
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'CircularStd-Medium',
    lineHeight: 20,
    maxWidth: cardWidth,
    overflow: 'hidden',
  },
  name: {
    fontSize: 16,
    paddingTop: 17,
    paddingBottom: 4,
    color: '#333333',
  },
  house: {
    fontSize: 12,
    color: '#C1C0C4',
  },
});
