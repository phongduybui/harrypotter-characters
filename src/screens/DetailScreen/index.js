import React from 'react';
import { View, ScrollView, Text, ImageBackground } from 'react-native';
import styles from './styles';

const DetailScreen = ({ route }) => {
  const character = route.params.item;
  const { name, dateOfBirth, actor, ancestry, house, image } = character;
  console.log(character);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.test}>
        <ImageBackground source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, styles.name]}>{name}</Text>
        {!!dateOfBirth && (
          <Text style={styles.text}>Date of Birth: {dateOfBirth}</Text>
        )}
        {!!actor && <Text style={styles.text}>Actor: {actor}</Text>}
        {!!ancestry && <Text style={styles.text}>Ancestry: {ancestry}</Text>}
        {!!house && <Text style={styles.text}>House: {house}</Text>}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
