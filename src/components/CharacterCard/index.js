import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styles from './styles';

const CharacterCard = ({ name, house, uri, isLast }) => {
  return (
    <View style={[styles.container, { paddingRight: isLast ? 0 : 16 }]}>
      <ImageBackground source={{ uri }} style={styles.image} />
      <View>
        <Text numberOfLines={1} style={[styles.text, styles.name]}>
          {name}
        </Text>
        <Text numberOfLines={1} style={[styles.text, styles.house]}>
          {house}
        </Text>
      </View>
    </View>
  );
};

export default CharacterCard;
