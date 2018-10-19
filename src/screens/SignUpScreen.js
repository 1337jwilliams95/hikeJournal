import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { emailSignUp, signUpTextUpdate } from "../actions";
import { getScreenWidth } from "../common";

const SCREEN_WIDTH = getScreenWidth();

class SignUpScreen extends Component {
  emailSignUp = () => {
    this.props.emailSignUp({
      email: this.props.email,
      password: this.props.password,
      confirmPassword: this.props.confirmPassword
    });
  };

  validationError = () => {
    if(this.props.error){
      return <FormValidationMessage>{this.props.error}</FormValidationMessage>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20 }}>Hike Journal Sign Up</Text>
        </View>
        <View style={styles.inputForm}>
          <FormLabel>Email</FormLabel>
          <FormInput
            autoCapitalize='none'
            placeholder="Enter your email here"
            value={this.props.email}
            onChangeText={value =>
              this.props.signUpTextUpdate({ prop: "email", value })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            autoCapitalize='none'
            secureTextEntry
            placeholder="Enter your password here"
            value={this.props.password}
            onChangeText={value =>
              this.props.signUpTextUpdate({ prop: "password", value })}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            autoCapitalize='none'
            secureTextEntry
            placeholder="Enter your password again here"
            value={this.props.confirmPassword}
            onChangeText={value =>
              this.props.signUpTextUpdate({ prop: "confirmPassword", value })}
          />
          {this.validationError()}
        </View>
        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          backgroundColor="#28726E"
          onPress={this.emailSignUp}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputForm: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    width: SCREEN_WIDTH - 20
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

mapStateToProps = state => {
  return {
    email: state.signUpForm.email,
    password: state.signUpForm.password,
    confirmPassword: state.signUpForm.confirmPassword,
    error: state.signUpForm.error
  };
};

export default connect(mapStateToProps, {emailSignUp, signUpTextUpdate})(SignUpScreen);
