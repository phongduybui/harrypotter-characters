import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import CharacterList from '../../components/CharacterList';
import SearchBox from '../../components/SearchBox';
import harrypotterApi from '../../api/harrypotterApi';
import _ from 'lodash';

const HomeScreen = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [students, setStudents] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllCharacter = async () => {
    try {
      const { data } = await harrypotterApi.get('/characters');
      setAllCharacters(data);

      const studentsData = data.filter((figure) => figure.hogwartsStudent);
      const staffsData = data.filter((figure) => figure.hogwartsStaff);
      const gryffindorData = data.filter(
        (figure) => figure.house === 'Gryffindor'
      );
      const slytherinData = data.filter(
        (figure) => figure.house === 'Slytherin'
      );
      const ravenclawData = data.filter(
        (figure) => figure.house === 'Ravenclaw'
      );
      const hufflepuffData = data.filter(
        (figure) => figure.house === 'Hufflepuff'
      );
      setStudents(studentsData);
      setStaffs(staffsData);
      setGryffindor(gryffindorData);
      setSlytherin(slytherinData);
      setRavenclaw(ravenclawData);
      setHufflepuff(hufflepuffData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSearchTermChange = _.debounce((text) => {
    if (text) {
      const characterResult = allCharacters.filter((c) =>
        c?.name?.toLowerCase().includes(text.toLowerCase())
      );
      if (!characterResult.length) {
        setError('No matching results!');
      } else {
        setError(null);
      }
      setSearchResult(characterResult);
    } else {
      setSearchResult([]);
    }
  }, 200);

  useEffect(() => {
    fetchAllCharacter();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SearchBox onSearchTermChange={onSearchTermChange} />

      <View style={styles.contentWrapper}>
        {loading ? (
          <ActivityIndicator
            size='large'
            color='#0000ff'
            style={{ paddingTop: 52 }}
          />
        ) : error ? (
          <Text style={{ color: 'red' }}>{error}</Text>
        ) : (
          <>
            {searchResult.length > 0 ? (
              <CharacterList
                heading='heading1'
                title='Result'
                data={searchResult}
              />
            ) : (
              <>
                <CharacterList
                  heading='heading1'
                  title='All Characters'
                  data={allCharacters}
                />
                <CharacterList
                  heading='heading2'
                  title='Hogwarts Staff'
                  data={students}
                />
                <CharacterList
                  heading='heading2'
                  title='Hogwarts Staff'
                  data={staffs}
                />
                <CharacterList
                  heading='heading2'
                  title='Gryffindor House'
                  data={gryffindor}
                />
                <CharacterList
                  heading='heading2'
                  title='Slytherin House'
                  data={slytherin}
                />
                <CharacterList
                  heading='heading2'
                  title='Ravenclaw House'
                  data={ravenclaw}
                />
                <CharacterList
                  heading='heading2'
                  title='Hufflepuff House'
                  data={hufflepuff}
                />
              </>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
