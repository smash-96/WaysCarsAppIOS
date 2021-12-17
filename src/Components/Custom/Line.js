import React from "react";
import { View, Dimensions } from "react-native";

export default function Line({ topSpace, bottomSpace, lineColor }) {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: lineColor,
        width: "100%",
        // alignSelf: "center",
        marginTop: topSpace,
        marginBottom: bottomSpace,
      }}
    />
  );
}
