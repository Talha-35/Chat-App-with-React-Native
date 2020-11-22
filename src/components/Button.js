import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {button, button_outline} from './styles';

const Button = (props) => {
  const style = props.noBorder ? button_outline : button
  // iki farklı tasarım için bu yöntem kulanılır. diğet ana sayfa da component içine noBorder yazılır ise o zaman farklı bir dizayn çıkar. styllerdeki button_outline aktif olur.
  return (
    <TouchableOpacity style={style.container} onPress={props.onPress}>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};