import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SvgMsgIcon from "../../assets/message-icon.svg";
import SvgStarIcon from "../../assets/star-icon.svg";
import SvgScreenIcon from "../../assets/full-screen.svg";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Help = ({ jobDetailFunc, helpFunc }) => {
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "white", padding: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            helpFunc();
            jobDetailFunc();
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
            }}
            //source={require("../../../../assets/backChat.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            //fontWeight: "bold",
            color: "#212529",
            textShadowOffset: { width: 1, height: 4 },
            textShadowRadius: 12,
            textShadowColor: "#000000DE",
          }}
        >
          Contact us
        </Text>
        <View />
      </View>

      <View
        style={{
          //top: 40,
          height: 1,
          width: "90%",
          backgroundColor: "#000",
          opacity: 0.1,
          alignSelf: "center",
          marginTop: 30,
          marginBottom: 15,
        }}
      />

      <Text
        style={{
          fontSize: 14,
          //fontWeight: "bold",
          color: "#000000DE",
          textAlign: "center",
          //marginBottom: 15,
        }}
      >
        Pawan Kumar
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              //fontWeight: "bold",
              color: "#000000DE",
              marginRight: 10,
            }}
          >
            4.95
          </Text>
          <SvgStarIcon height={32} width={32} />
        </View>
      </View>

      <Text
        style={{
          fontSize: 14,
          //fontWeight: "bold",
          color: "#000000DE",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Any troubles ?{"\n"}
        <Text>Send us an email</Text>
      </Text>

      <View
        style={{
          width: "100%",
          height: 70,
          borderWidth: 1,
          borderColor: "gray",
          //opacity: 0.2,
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#000000DE",
              textAlign: "center",
            }}
          >
            Issue with the route
          </Text>
          <SvgScreenIcon height={25} width={25} fill={"gray"} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 70,
          borderWidth: 1,
          borderColor: "gray",
          marginTop: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#000000DE",
              textAlign: "center",
            }}
          >
            Safety issue
          </Text>
          <SvgScreenIcon height={25} width={25} fill={"red"} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 70,
          borderWidth: 1,
          borderColor: "gray",
          marginTop: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#000000DE",
              textAlign: "center",
            }}
          >
            Health issue
          </Text>
          <SvgScreenIcon height={25} width={25} fill={"red"} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 70,
          borderWidth: 1,
          borderColor: "gray",
          marginTop: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#000000DE",
              textAlign: "center",
            }}
          >
            Car issue
          </Text>
          <SvgScreenIcon height={25} width={25} fill={"yellow"} />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Help;

const styles = StyleSheet.create({});
