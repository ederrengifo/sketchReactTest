// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable placeholder
type P = {
  placeholder: string,
  children?: any,
};
const Input = ({placeholder, children}: P) => (
  <View style={{
    borderStyle: 'solid',
    borderColor: designSystem.colors.Gray,
    borderRadius: 3,
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    marginBottom: 10.5,
    marginTop: 5.5,
  }}>
    <Text style={{
      color: designSystem.colors.GrayStrong,
    }}>
      {placeholder}
    </Text>
  </View>
);

// Here we export the element as "Input"
export default Input;
