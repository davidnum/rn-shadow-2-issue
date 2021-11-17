import React from 'react';
import {FlatList, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const data = Array.from(Array(1000).keys());

const WithShadow = () => {
  return (
    <FlatList
      contentContainerStyle={{paddingHorizontal: 16}}
      data={data}
      keyExtractor={item => item.toString()}
      renderItem={({item}) => (
        <Shadow
          distance={8}
          offset={[2, 2]}
          viewStyle={{
            backgroundColor: 'white',
            height: 200,
            marginBottom: 16,
            width: '100%',
            padding: 16,
            borderRadius: 16,
          }}>
          <Text style={{marginBottom: 16}}>Some item #{item}</Text>

          <Shadow
            viewStyle={{
              width: '100%',
              padding: 16,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
            distance={2}
            offset={[0, 0]}
            paintInside>
            <Text>Inner</Text>
          </Shadow>
        </Shadow>
      )}
    />
  );
};

export default WithShadow;
