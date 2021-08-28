import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {FlatList, Pressable, Text, View} from 'react-native';
import Paragraph from '../components/ui/Paragraph';

export default function SearchResult({route}) {
  const [list, setList] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const url =
        'https://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json';
      axios
        .get(url, {
          params: {
            key: '2363f339334c482a526d952cdba548b3',
            peopleNm: route.params.peopleNm,
          },
        })
        .then(response => setList(response.data.peopleListResult.peopleList))
        .catch(console.warn);
    }, []),
  );
  return (
    <FlatList
      data={list}
      keyExtractor={item => item.peopleCd}
      renderItem={data => (
        <Pressable onPress={() => {}}>
          <View>
            <Paragraph>
              {data.item.peopleNm} ({data.item.repRoleNm})
            </Paragraph>
            <Text>{data.item.filmoNames}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}
