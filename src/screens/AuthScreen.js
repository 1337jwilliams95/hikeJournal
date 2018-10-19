import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getScreenWidth } from "../common";
import { connect } from "react-redux";
import {
  doGoogleLogin,
  doFacebookLogin,
  doEmailLogin,
  signInTextUpdate
} from "../actions";
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

const SCREEN_WIDTH = getScreenWidth();

class AuthScreen extends Component {
  verificationError() {
    if(this.props.error){
      return <FormValidationMessage>{this.props.error}</FormValidationMessage>
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hike Journal</Text>
          </View>

          <View style={styles.inputForm}>
            <FormLabel>Email</FormLabel>
            <FormInput
            autoCapitalize='none'
              onChangeText={value =>
                this.props.signInTextUpdate({ prop: "email", value })}
              placeholder="Enter your email here"
              value={this.props.email}
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry
              autoCapitalize='none'
              onChangeText={value =>
                this.props.signInTextUpdate({ prop: "password", value })}
              placeholder="Enter your password here"
              value={this.props.password}
            />
          </View>
          {this.verificationError()}
          <Button
            title="Sign In"
            buttonStyle={styles.button}
            backgroundColor="#9D961C"
            onPress={() =>
              this.props.doEmailLogin(this.props.email, this.props.password)}
          />
          <Button
            title="Continue with Facebook"
            buttonStyle={styles.button}
            backgroundColor="#28726E"
            onPress={this.props.doFacebookLogin}
          />
          <Button
            title="Continue with Google"
            buttonStyle={styles.button}
            backgroundColor="#943E0F"
            onPress={this.props.doGoogleLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    width: SCREEN_WIDTH - 20
  },
  inputForm: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  text: {
    fontSize: 18
  }
});

mapStateToProps = state => {
  return {
    email: state.signInForm.email,
    password: state.signInForm.password,
    error: state.signInForm.error
  };
};
export default connect(mapStateToProps, {
  doFacebookLogin,
  doEmailLogin,
  doGoogleLogin,
  signInTextUpdate
})(AuthScreen);
