import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const CharacterCard = (props) => {
  const { name, house, image, isLast } = props;
  const navigation = useNavigation();
  const handleCardClick = (props) => {
    navigation.navigate('Detail', { item: props });
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleCardClick(props)}>
      <View style={[styles.container, { paddingRight: isLast ? 0 : 16 }]}>
        <ImageBackground source={{ uri: image }} style={styles.image} />
        <View>
          <Text numberOfLines={1} style={[styles.text, styles.name]}>
            {name}
          </Text>
          <Text numberOfLines={1} style={[styles.text, styles.house]}>
            {house}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterCard;
