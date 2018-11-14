import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../common/common_styles";
import { MapView } from "expo";

class HikeCreateScreen extends Component {
  state = { date: null };
  render() {
    return (
      <View style={commonStyles.textContainer}>
        <Text>Start Date</Text>
        <Text>Hike type: ultra-light, standard, budget</Text>
        <Text>Anticipated end date</Text>
        <Text>NB or SB</Text>
        <MapView
          style={{ height: 300, width: 300 }}
          // initialRegion={{
          //   latitude: 32.6083309,
          //   longitude: -116.469831454,
          //   latitudeDelta: 0.00922,
          //   longitudeDelta: 0.0421
          // }}
          // zoomEnabled={false}
          showsBuildings={false}
          showsTraffic={false}
          showsIndoors={false}
          // kmlSrc="file:///Users/johnwilliams/workspace/hikeJournal/assets/PCT_kml.kml"
        />
        />
        <Text>Save</Text>
      </View>
    );
  }
}

export default HikeCreateScreen;
