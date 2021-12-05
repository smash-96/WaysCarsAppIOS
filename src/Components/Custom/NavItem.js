import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Line from "./Line";
import ExpandIcon from "../../assets/expand.svg";
const NavItem = ({ Icon, text, onClickFunction, type }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: type === "drawer" ? 20 : 40,
          paddingRight: type === "drawer" ? 20 : 40,
          //marginTop: Dimensions.get("window").height * 0.02,
          //marginBottom: Dimensions.get("window").height * 0.04,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon height={20} width={20} />
          <Text
            style={{
              fontSize: type === "drawer" ? 15 : 18,
              paddingLeft: 20,
              fontWeight: "400",
            }}
          >
            {text}
          </Text>
        </View>

        <View>
          <ExpandIcon />
        </View>
      </TouchableOpacity>

      {type !== "drawer" && (
        <View
          style={{
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <Line
            lineColor={"#B2B4B8"}
            topSpace={Dimensions.get("screen").height * 0.0182}
            bottomSpace={Dimensions.get("screen").height * 0.0182}
          />
        </View>
        // <View
        //   style={{
        //     height: 0.8,
        //     backgroundColor: "#B2B4B8",
        //     width: "95%",
        //     alignSelf: "center",

        //     marginTop: 8,
        //     //marginBottom: Dimensions.get("window").height * 0.04,
        //   }}
        // />
      )}
    </View>
  );
};

export default NavItem;

const styles = StyleSheet.create({});
