import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getScreenWidth } from '../components/constants';
import { connect } from 'react-redux';
import {  doLogin } from '../actions/login_actions';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

const SCREEN_WIDTH = getScreenWidth();

class AuthScreen extends Component {
  componentWillReceiveProps(newProps){
    if(newProps.token){
      this.props.navigation.navigate('hike');
    }
  }
  
  formTextChanged = text => {
    console.log(text);
  };

  emailSignIn = () => {
    this.props.doLogin('email');
  }

  facebookSignIn = () => {
    this.props.doLogin('facebook');
  }

  googleSignIn = () => {
    this.props.doLogin('google');
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
            onChangeText={this.formTextChanged}
            placeholder="Enter your email here"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={this.formTextChanged}
            placeholder="Enter your password here"
          />
        </View>

        <Button
          title="Sign In"
          buttonStyle={styles.button}
          backgroundColor="#9D961C"
          onPress={this.emailSignIn}
        />
        <Button
          title="Continue with Facebook"
          buttonStyle={styles.button}
          backgroundColor="#28726E"
          onPress={this.facebookSignIn}
        />
        <Button
          title="Continue with Google"
          buttonStyle={styles.button}
          backgroundColor="#943E0F"
          onPress={this.googleSignIn}
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
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
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

mapStateToProps = (state) => {
  return {token: state.facebookLogin.token};
}
export default connect(mapStateToProps, {doLogin}) (AuthScreen);
