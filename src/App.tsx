import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';
import WithShadow from './WithShadow';
import WithView from './WithView';

export default () => {
  const [withShadow, toggleShadow] = useReducer(value => !value, false);
  const [isVisible, toggleVisibility] = useReducer(value => !value, false);

  const Component = withShadow ? WithShadow : WithView;

  return (
    <View style={{marginTop: 50, padding: 16}}>
      <Button title={isVisible ? 'Hide' : 'Show'} onPress={toggleVisibility} />
      <Button title="Toggle shadow" onPress={toggleShadow} />
      <Text style={{marginBottom: 16}}>
        Component to render: {withShadow ? 'Shadow' : 'View'}
      </Text>
      {isVisible && <Component />}
    </View>
  );
};
