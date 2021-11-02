import React from "react";
import { Image } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Timer from "../Timer";
import SvgLocationIcon from "../../assets/location-icon.svg";

import SvgUserIcon from "../../assets/user-profile-image.svg";

const Reached = ({ setCancelModal }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 6,
            left: 6,
            right: 6,
            // bottom: 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="close"
              type="antdesign"
              size={30}
              onPress={() => setCancelModal(true)}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              //fontWeight: "bold",
              color: "#212529",
              textAlign: "center",
              alignSelf: "center",
              textShadowOffset: { width: 1, height: 4 },
              textShadowRadius: 12,
              textShadowColor: "#000000DE",
            }}
          >
            Pickup location
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 40,
          }}
        >
          <TouchableOpacity
            style={{
              top: 5,
            }}
          >
            <SvgUserIcon height={30} width={30} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              //fontWeight: "bold",
              color: "#000000DE",
              //marginRight: 15,

              alignSelf: "center",
            }}
          >
            Rider Name
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bottom: 7,
            }}
          >
            <Avatar
              size={20}
              //rounded
              source={require("../../assets/clock.png")}
            />
            <Timer />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 20,
            left: 14,
          }}
        >
          <SvgLocationIcon />
          <Text
            style={{
              fontSize: 15,
              //fontWeight: "bold",
              color: "#212529",
              textAlign: "center",
              alignSelf: "center",
              left: 10,
            }}
          >
            Sahibzada Ajit Singh Nagar, Punjab, India
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reached;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    //borderRadius: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "blue",
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  modalText: {
    //textAlign: "center",
    fontSize: 14,
    color: "#000000",
  },
});
