import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { blue, green, red } from '../common/common_colors';
import {
  doEmailLogin,
  doFacebookLogin,
  doGoogleLogin,
  signInTextUpdate
} from '../actions';
import { commonStyles } from '../common/common_styles';

class AuthScreen extends Component {
  verificationError() {
    if (this.props.error) {
      return (
        <FormValidationMessage>
          {this.props.error}
        </FormValidationMessage>
      );
    }
  }

  render() {
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
              onChangeText={value =>
                this.props.signInTextUpdate({ prop: 'email', value })}
              placeholder="Enter your email here"
              value={this.props.email}
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry
              autoCapitalize="none"
              onChangeText={value =>
                this.props.signInTextUpdate({ prop: 'password', value })}
              placeholder="Enter your password here"
              value={this.props.password}
            />
          </View>
          {this.verificationError()}
          <Button
            title="Sign In"
            buttonStyle={[commonStyles.button, styles.signInButton]}
            onPress={() =>
              this.props.doEmailLogin(this.props.email, this.props.password)}
          />
          <Button
            title="Continue with Facebook"
            buttonStyle={[commonStyles.button, styles.facebookButton]}
            onPress={this.props.doFacebookLogin}
          />
          <Button
            title="Continue with Google"
            buttonStyle={[commonStyles.button, styles.googleButton]}
            onPress={this.props.doGoogleLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    flex: 1
  },
  signInButton: {
    backgroundColor: green
  },
  facebookButton: {
    backgroundColor: blue
  },
  googleButton: {
    backgroundColor: red
  },
  text: {
    fontSize: 18
  }
});

const mapStateToProps = state => ({
  email: state.signInForm.email,
  password: state.signInForm.password,
  error: state.signInForm.error
});

export default connect(mapStateToProps, {
  doFacebookLogin,
  doEmailLogin,
  doGoogleLogin,
  signInTextUpdate
})(AuthScreen);
