import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = Array.from(Array(1000).keys());

const WithView = () => {
  return (
    <FlatList
      contentContainerStyle={{paddingHorizontal: 16}}
      data={data}
      keyExtractor={item => item.toString()}
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: 'white',
            height: 200,
            marginBottom: 16,
            width: '100%',
            padding: 16,
            borderRadius: 16,
            borderWidth: 1,
          }}>
          <Text style={{marginBottom: 16}}>Some item #{item}</Text>

          <View
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 16,
              backgroundColor: 'white',
              borderWidth: 1,
            }}>
            <Text>Inner</Text>
          </View>
        </View>
      )}
    />
  );
};

export default WithView;
