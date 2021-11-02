import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SvgLocationPickIcon from "../../assets/location-icon.svg";
import SvgLocationDropIcon from "../../assets/location-red.svg";
import SvgArrowIcon from "../../assets/right-arrow.svg";

const ActiveJobsView = ({
  icon,
  iconText,
  bgColor,
  text,
  topMargin,
  arrowColor,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 90,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: topMargin,
        backgroundColor: bgColor,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          //alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: arrowColor,
            textAlign: "center",
            left: -20,
          }}
        >
          {text}
        </Text>

        <View
          style={{
            flexDirection: "row",
            top: -20,
          }}
        >
          {icon === "green" ? (
            <SvgLocationPickIcon width={25} height={25} />
          ) : (
            <SvgLocationDropIcon width={25} height={25} />
          )}

          <Text
            style={{
              fontSize: 14,
              color: arrowColor,
            }}
          >
            {iconText}
          </Text>
        </View>

        <View />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          //alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: arrowColor,
            textAlign: "center",
          }}
        >
          James
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: arrowColor,
            textAlign: "center",
          }}
        >
          Executive
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          right: 10,
        }}
      >
        <View>
          <SvgArrowIcon fill={arrowColor} width={25} height={25} />
        </View>
      </View>
    </View>
  );
};

export default ActiveJobsView;

const styles = StyleSheet.create({});
