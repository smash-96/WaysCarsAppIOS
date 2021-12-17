import React from 'react';
import {View} from 'react-native';

const BottomView = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopColor:"lightgray",
        borderTopWidth:1,
        width: '100%',
        height: 34,
        bottom:0,
        zIndex:999
      }}
    />
  );
};
const AppWrapper = MainComponent => {
  const Component = props => {
    return (
      <View style={{flex: 1}}>
        <MainComponent />
        <BottomView />
      </View>
    );
  };
  return Component;
};

export default AppWrapper;
