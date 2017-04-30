/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import PropTypes from 'prop-types';
import { render, StyleSheet, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import LoginBox from '../components/login/loginBox';

const Login = () => {
  return (
    <Artboard name="login" style={{
      width: 1440,
      height: 900,
      marginBottom: designSystem.spacing * 4,
      backgroundColor: designSystem.colors.Sur,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <LoginBox
        title="Hello!"
        description="Please, before to continue login with your account. If you don't have an account Sign In here."
      >
        <Text>Hello</Text>
      </LoginBox>
    </Artboard>
  );
}

export default Login;
