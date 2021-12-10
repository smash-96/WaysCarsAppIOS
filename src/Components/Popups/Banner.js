import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Icon } from "react-native-elements";
import { color } from "react-native-reanimated";
import GoOnlineIcon from "../../assets/buttons/online-button.svg";

const Banner = (props) => {
  const navigation = useNavigation();
  return (

      <View style={styles(props.colors).centeredView}>

      <TouchableOpacity
        style={styles(props.colors).menuButton}
        onPress={props.bannerMenu}
        //disabled={jobAcceptedView}
      >
        <Icon name="menu" size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles(props.colors).button2}
        onPress={() => navigation.navigate("ActiveJobs")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles(props.colors).btn2Text}>Jobs</Text>
        </View>
      </TouchableOpacity>

      <View style={styles(props.colors).modalView}>
        <Text style={styles(props.colors).modalText}>Hi Maisam Shah</Text>
        <Text
          style={{
            textAlign: "center",
            color: "#040B25A3",
            fontSize: 13,
          }}
        >
          {props.online === true ? "Go Offline?" : "Go Online?"}
        </Text>

        <TouchableOpacity
          style={styles(props.colors).button}
          activeOpacity={0.8}
          onPress={props.modalFunc}
        >
          <GoOnlineIcon width={68} height={68} />
          {/* <Text style={styles(props.colors).btnText}>Yes</Text> */}
        </TouchableOpacity>
      </View>
        </View>

  );
};

export default Banner;

const styles = (props) =>
  StyleSheet.create({
    centeredView: {
      // paddingLeft: 10,
      // paddingRight: 10,
      //paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    },
    modalView: {
      top: Dimensions.get("window").height * 0.34,
      width: 349,
      height: 168,
      backgroundColor: props.background,
      borderRadius: 5,
      paddingTop: 28,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      alignSelf:"center"
    },
    button: {
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 10,
      // backgroundColor: "#102FCC",
      // width: 56,
      // height: 56,
      // borderRadius: 56 / 2,
    },
    btnText: {
      textAlign: "center",
      color: "#FDFEFF",
      fontSize: 18,
      fontWeight: "bold",
    },
    modalText: {
      textAlign: "center",
      fontSize: 16,
      color: props.textColor,
      fontWeight: "bold",
    },
    // menuButton: {
    //   position: "absolute",
    //   justifyContent: "center",
    //   //alignItems: "center",
    //   top: -6,
    //   right: 10,
    //   //padding: 10,
    //   zIndex: 1,
    //   backgroundColor: "rgba(243, 244, 246, 100)",
    //   width: 54,
    //   height: 54,
    //   borderRadius: 54 / 2,
    // },
    menuButton: {
      position: "absolute",
      top: 63,
    left: 33,
      padding: 10,
      backgroundColor: "#FFFFFF",
      width: 54,
      height: 54,
      borderRadius: 54 / 2,
      zIndex: 1,
    },
    button2: {
      position: "absolute",
      top: 63,
    left: 315,
      backgroundColor: "#F0F1F2",
      width: 54,
      height: 54,
      borderRadius: 54 / 2,
    },
    btn2Text: {
      //textAlign: "center",
      color: "black",
      fontSize: 14,
      fontWeight: "600",
      //top: 6,
    },
  });
