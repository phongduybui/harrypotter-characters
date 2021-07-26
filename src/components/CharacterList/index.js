import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard';
import styles from './styles';

const ListCharacter = ({ title, data = [], style }) => {
  return (
    <View style={[style, { paddingTop: 52 }]}>
      <Text style={[styles.heading, styles.heading1]}>{title}</Text>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <CharacterCard
              isLast={index === data.length - 1}
              name={item.name}
              house={item.house}
              uri={item.image}
            />
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
