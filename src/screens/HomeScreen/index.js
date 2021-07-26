import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './styles';
import SvgUri from 'react-native-svg-uri';
import CharacterList from '../../components/CharacterList';
import harrypotterApi from '../../api/harrypotterApi';

const HomeScreen = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [students, setStudents] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
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

  useEffect(() => {
    fetchAllCharacter();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableHighlight>
          <SvgUri source={require('../../assets/icons/menu.svg')} />
        </TouchableHighlight>
        <TouchableHighlight>
          <SvgUri source={require('../../assets/icons/search.svg')} />
        </TouchableHighlight>
      </View>

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
            <CharacterList title='All Characters' data={allCharacters} />
            <CharacterList title='Hogwarts Staff' data={students} />
            <CharacterList title='Hogwarts Staff' data={staffs} />
            <CharacterList title='Gryffindor House' data={gryffindor} />
            <CharacterList title='Slytherin House' data={slytherin} />
            <CharacterList title='Ravenclaw House' data={ravenclaw} />
            <CharacterList title='Hufflepuff House' data={hufflepuff} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
