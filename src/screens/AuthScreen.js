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
import { blue, green, red } from '../common/common_colors';
import {
  doEmailLogin,
  doFacebookLogin,
  doGoogleLogin,
  signInTextUpdate,
} from '../actions';
import commonStyles from '../common/common_styles';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  signInButton: {
    backgroundColor: green,
  },
  facebookButton: {
    backgroundColor: blue,
  },
  googleButton: {
    backgroundColor: red,
  },
  text: {
    fontSize: 18,
  },
});

class AuthScreen extends Component {
  constructor() {
    super();
    this.verificationError = this.verificationError.bind(this);
  }

  verificationError() {
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
      signInTextUpdate: updateText,
      doEmailLogin: emailLogin,
      doFacebookLogin: facebookLogin,
      doGoogleLogin: googleLogin,
    } = this.props;
    return (
      <View style={styles.background}>
        <View style={commonStyles.container}>
          <View style={commonStyles.textContainer}>
            <Text style={styles.text}>Hike Journal</Text>
          </View>

          <View style={commonStyles.inputForm}>
            <FormLabel>Email</FormLabel>
            <FormInput
              autoCapitalize="none"
              onChangeText={value => updateText({ prop: 'email', value })}
              placeholder="Enter your email here"
              value={email}
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry
              autoCapitalize="none"
              onChangeText={value => updateText({ prop: 'password', value })}
              placeholder="Enter your password here"
              value={password}
            />
          </View>
          {this.verificationError()}
          <Button
            title="Sign In"
            buttonStyle={[commonStyles.button, styles.signInButton]}
            onPress={() => emailLogin(email, password)}
          />
          <Button
            title="Continue with Facebook"
            buttonStyle={[commonStyles.button, styles.facebookButton]}
            onPress={facebookLogin}
          />
          <Button
            title="Continue with Google"
            buttonStyle={[commonStyles.button, styles.googleButton]}
            onPress={googleLogin}
          />
        </View>
      </View>
    );
  }
}

AuthScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string,
  signInTextUpdate: PropTypes.func.isRequired,
  doEmailLogin: PropTypes.func.isRequired,
  doFacebookLogin: PropTypes.func.isRequired,
  doGoogleLogin: PropTypes.func.isRequired,
};

AuthScreen.defaultProps = { error: '' };

const mapStateToProps = state => ({
  email: state.signInForm.email,
  password: state.signInForm.password,
  error: state.signInForm.error,
});

export default connect(mapStateToProps, {
  doFacebookLogin,
  doEmailLogin,
  doGoogleLogin,
  signInTextUpdate,
})(AuthScreen);
