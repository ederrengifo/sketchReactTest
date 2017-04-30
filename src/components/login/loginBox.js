// Dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../designSystem';
import type { DesignSystem } from '../../designSystem';
import Input from '../elements/form/input';
import RegularButton from '../elements/form/regularButton';

// Component design
type P = {
  title: string,
  description: string,
  children?: any,
};

const LoginBox = ({ title, description, children }: P) => (
  <View style={{
    width: 520,
    backgroundColor: designSystem.colors.White,
    padding: 60,
    borderRadius: 5,
  }}>
    <Text style={[designSystem.fonts.Headline,{
      marginBottom: 20,
      }]}>
        {title}
    </Text>
    <Text style={designSystem.fonts.Body}>
      {description}
    </Text>
    <Input placeholder="Email address"></Input>
    <Input placeholder="Password"></Input>
    <RegularButton txt="Confirm Login"></RegularButton>
  </View>
);

// Exporting
export default LoginBox;
