import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import EventItem from '../components/EventItem';

class ConfigureEventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(() => {
        resolve([
          'Lodge',
          'Hike',
          'Eat',
        ]);
      }, ms));
    }

    try {
      const events = await timeout(2000);
      console.log('events: ', events);
      this.setState({ events });
    } catch (e) {
      // do nothing out of the oridinary
    }
  }

  render() {
    console.log('this.state: ', this.state);
    return (
      <View style={styles.container}>
        {this.state.events.length && this.state.events.map(event => (
          <EventItem name={event} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default ConfigureEventsScreen;
