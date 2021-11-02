import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-reanimated";

const Banner = (props) => {
  return (
    <SafeAreaView style={styles(props.colors).centeredView}>
      <View style={styles(props.colors).modalView}>
        <View>
          <TouchableOpacity
            style={styles(props.colors).menuButton}
            onPress={props.bannerMenu}
          >
            <Icon name="menu" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles(props.colors).modalText}>Hi Maisam Shah</Text>
        <Text style={styles(props.colors).modalText}>
          {props.online === true
            ? "Do you want to go offline?"
            : "Are you working?"}
        </Text>

        <TouchableOpacity
          style={styles(props.colors).button}
          activeOpacity={0.8}
          onPress={props.modalFunc}
        >
          <Text style={styles(props.colors).btnText}>
            {props.online === true ? "Go Offline" : "Go Online"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Banner;

const styles = (props) =>
  StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      //paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    },
    modalView: {
      width: "100%",
      height: 200,
      backgroundColor: props.background,
      //borderRadius: 10,
      paddingTop: 28,
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
      backgroundColor: "#4F75FF",
      width: 56,
      height: 56,
      borderRadius: 56 / 2,
    },
    btnText: {
      textAlign: "center",
      color: "white",
    },
    modalText: {
      textAlign: "center",
      fontSize: 16,
      color: props.textColor,
    },
    menuButton: {
      position: "absolute",
      justifyContent: "center",
      //alignItems: "center",
      top: 0,
      right: 10,
      //padding: 10,
      zIndex: 1,
      backgroundColor: "rgba(243, 244, 246, 100)",
      width: 54,
      height: 54,
      borderRadius: 54 / 2,
    },
  });
