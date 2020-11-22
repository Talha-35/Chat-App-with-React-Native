import React from 'react';
import {View, TextInput} from 'react-native';

import {input} from './styles'

const Input = (props) => {
  return (
    <View style={input.container}>
      <TextInput 
        style={input.textInput}
        {...props.inputProps}
        // ana sayfadaki componet kontrol edilir ise bir den fazla özellik göndermek için bu yöntem kullanılabilir.
        onChangeText={props.onType}
      />
    </View>
  );
};

export {Input};
