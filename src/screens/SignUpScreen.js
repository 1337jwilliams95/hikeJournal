import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getScreenWidth } from '../components/constants';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

const SCREEN_WIDTH = getScreenWidth();


class SignUpScreen extends Component {
  
  emailSignUp = (text) => {
    this.props.navigation.navigate('hike');
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 20}}>Hike Journal Sign Up</Text>
      </View>
        <View style={styles.inputForm}>
        <FormLabel>Trail Name</FormLabel>
          <FormInput
            onChangeText={this.formTextChanged}
            placeholder="(Optional) Enter your trail name here"
          />
          <FormLabel>Email</FormLabel>
          <FormInput
            onChangeText={this.formTextChanged}
            placeholder="Enter your email here"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={this.formTextChanged}
            placeholder="Enter your password here"
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            onChangeText={this.formTextChanged}
            placeholder="Enter your password again here"
          />
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
export default SignUpScreen;
