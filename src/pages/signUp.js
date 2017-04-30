/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import PropTypes from 'prop-types';
import { render, StyleSheet, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import SignUpBox from '../components/signup/signUpBox';

const SignUp = () => {
  return (
    <Artboard name="SignUp" style={{
      width: 1440,
      height: 900,
      marginBottom: designSystem.spacing * 4,
      backgroundColor: designSystem.colors.Sur,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SignUpBox
        title="Welcome!"
        description="Hello stranger, do you want to continue? Please fill the following fields. Thanks!"
      >
      </SignUpBox>
    </Artboard>
  );
}

export default SignUp;
