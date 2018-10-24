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
import { commonStyles } from "../common/common_styles";
import { blue } from "../common/common_colors";

class SignUpScreen extends Component {
  emailSignUp = () => {
    this.props.emailSignUp({
      email: this.props.email,
      password: this.props.password,
      confirmPassword: this.props.confirmPassword
    });
  };

  validationError = () => {
    if (this.props.error) {
      return (
        <FormValidationMessage>
          {this.props.error}
        </FormValidationMessage>
      );
    }
  };

  render() {
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
            value={this.props.email}
            onChangeText={value =>
              this.props.signUpTextUpdate({ prop: "email", value })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            autoCapitalize="none"
            secureTextEntry
            placeholder="Enter your password here"
            value={this.props.password}
            onChangeText={value =>
              this.props.signUpTextUpdate({ prop: "password", value })}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            autoCapitalize="none"
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
          buttonStyle={[commonStyles.button, styles.signUpColor]}
          backgroundColor={blue}
          onPress={this.emailSignUp}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signUpColor: {
    backgroundColor: blue
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

export default connect(mapStateToProps, { emailSignUp, signUpTextUpdate })(
  SignUpScreen
);
