import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard';
import styles from './styles';

const ListCharacter = ({ title, data, heading, style }) => {
  return (
    <View style={[{ paddingTop: 52 }, style]}>
      <Text style={[styles.heading, styles[heading]]}>{title}</Text>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <CharacterCard isLast={index === data.length - 1} {...item} />
          )}
          keyExtractor={(item) => item.name}
        />
      </ScrollView>
    </View>
  );
};

ListCharacter.defaultProps = {
  data: [],
};

export default ListCharacter;
