import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import styles from './styles';

const SearchBox = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');
  useEffect(() => {}, []);

  const onChangeTerm = (text) => {
    setTerm(text);

    onSearchTermChange(text);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTerm}
        value={term}
        placeholder='Search for character ...'
      />
    </SafeAreaView>
  );
};

export default SearchBox;
