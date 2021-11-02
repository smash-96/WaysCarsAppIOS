import React from "react";
import { View, Text } from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import dynamicStyles from "./styles";

const TNActivityIndicator = (props) => {
  const styles = dynamicStyles();

  return (
    <View style={styles.container}>
      <View>
        <BallIndicator color="blue" size={50} animationDuration={400} />
        {props.text && props.text.length > 1 && (
          <Text style={styles.text}>{props.text}</Text>
        )}
      </View>
    </View>
  );
};

export default TNActivityIndicator;
