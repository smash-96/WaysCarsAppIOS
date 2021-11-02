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
import SvgStarIcon from "../../assets/star.svg";
import SvgLocationIcon from "../../assets/location-icon.svg";
import SvgLocationIconRed from "../../assets/location-red.svg";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const JobDetails = ({ jobDetailFunc, helpFunc, startTrip }) => {
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
        <TouchableOpacity onPress={jobDetailFunc}>
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
          Job Details
        </Text>

        <TouchableOpacity
          onPress={() => {
            jobDetailFunc();
            helpFunc();
          }}
        >
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
            Help
          </Text>
        </TouchableOpacity>
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
        Rider Name
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity>
          <SvgMsgIcon height={30} width={30} />
        </TouchableOpacity>

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
              marginRight: 15,
            }}
          >
            4.95
          </Text>
          <SvgStarIcon height={30} width={30} />
        </View>
        <TouchableOpacity style={{ right: 10 }}>
          <Avatar size={25} rounded source={require("../../assets/call.png")} />
        </TouchableOpacity>
      </View>

      {startTrip === false && (
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 1,
            borderColor: "gray",
            //opacity: 0.2,
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: 10,
              left: 45,
              fontSize: 14,
              //fontWeight: "bold",
              color: "#169B62",
            }}
          >
            Pickup:
          </Text>
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              top: 50,
              left: 38,
            }}
          >
            <SvgLocationIcon height={25} width={25} />
            <Text
              style={{
                fontSize: 14,
                color: "#000000DE",
                textAlign: "center",
                left: 50,
              }}
            >
              {` Sahibzada Ajit Singh 
Nagar, Punjab, India `}
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          width: "100%",
          height: 100,
          borderWidth: 1,
          borderColor: "gray",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 10,
            left: 45,
            fontSize: 14,
            //fontWeight: "bold",
            color: "#000000DE",
          }}
        >
          Drop off:
        </Text>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 50,
            left: 38,
          }}
        >
          <SvgLocationIconRed height={25} width={25} />
          {/* <Image
            source={require("../../assets/location-icon-drop.png")}
            style={{ height: 35, width: 22 }}
          /> */}
          <Text
            style={{
              fontSize: 14,
              color: "#000000DE",
              textAlign: "center",
              //left: 50,
            }}
          >
            {`  Chandigarh,Chandigarh, 
India  `}
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default JobDetails;

const styles = StyleSheet.create({});
