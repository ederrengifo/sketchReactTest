// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable "txt"
type P = {
  txt: string,
  children?: any,
};
const RegularButton = ({txt, children}: P) => (
  <View style={{
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: designSystem.colors.Green,
    paddingLeft: 25,
    paddingRight: 25,
    padding: 10,
    marginTop: 10.5,
    borderBottomWidth: 3,
    borderColor: designSystem.colors.GreenDark,
    borderRadius: 4,
  }}>
    <Text style={ designSystem.fonts.ButtonText }>
      {txt}
    </Text>
  </View>
);

// Here we export the element as "regularButton"
export default RegularButton;
