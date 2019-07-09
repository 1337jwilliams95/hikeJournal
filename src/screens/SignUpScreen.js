import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailSignUp, signUpTextUpdate } from '../actions';
import { blue } from '../common/common_colors';
import commonStyles from '../common/common_styles';

const styles = StyleSheet.create({
  signUpColor: {
    backgroundColor: blue,
  },
});

class SignUpScreen extends Component {
  constructor() {
    super();
    this.validationError = this.validationError.bind(this);
  }

  validationError() {
    const { error } = this.props;
    if (error) {
      return <FormValidationMessage>{error}</FormValidationMessage>;
    }

    return null;
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      signUpTextUpdate: updateText,
      emailSignUp: signUp,
    } = this.props;

    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.textContainer}>
          <Text style={{ fontSize: 20 }}>Hike Journal Sign Up</Text>
        </View>
        <View style={commonStyles.inputForm}>
          <FormLabel>Email</FormLabel>
          <FormInput
            autoCapitalize="none"
            placeholder="Enter your email here"
            value={email}
            onChangeText={value => updateText({ prop: 'email', value })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            autoCapitalize="none"
            secureTextEntry
            placeholder="Enter your password here"
            value={password}
            onChangeText={value => updateText({ prop: 'password', value })}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            autoCapitalize="none"
            secureTextEntry
            placeholder="Enter your password again here"
            value={confirmPassword}
            onChangeText={value => updateText({ prop: 'confirmPassword', value })}
          />
          {this.validationError()}
        </View>
        <Button
          title="Sign Up"
          buttonStyle={[commonStyles.button, styles.signUpColor]}
          backgroundColor={blue}
          onPress={signUp({ email, password, confirmPassword })}
        />
      </View>
    );
  }
}

SignUpScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  signUpTextUpdate: PropTypes.func.isRequired,
  emailSignUp: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SignUpScreen.defaultProps = { error: '' };

const mapStateToProps = state => ({
  email: state.signUpForm.email,
  password: state.signUpForm.password,
  confirmPassword: state.signUpForm.confirmPassword,
  error: state.signUpForm.error,
});

export default connect(mapStateToProps, { emailSignUp, signUpTextUpdate })(
  SignUpScreen,
);
