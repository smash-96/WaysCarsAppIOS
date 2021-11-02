import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SvgStarIcon from "../../assets/star.svg";
import SvgArrow from "../../assets/right-arrow.svg";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Cancel = ({ setCancelModal, finishRide }) => {
  const [buttonPressed, setButtonPressed] = useState(null);
  return (
    <SafeAreaProvider style={{ backgroundColor: "white", padding: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
          }}
          onPress={() => setCancelModal(false)}
        >
          <Avatar
            rounded
            source={{
              uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
            }}
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
          Cancellation
        </Text>

        <View
          style={{
            flex: 1,
          }}
        />
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

      <TouchableOpacity
        onPress={async () => {
          if (buttonPressed !== "b1") {
            setButtonPressed("b1");
            await new Promise((resolve) => setTimeout(resolve, 200));
            finishRide();
          } else {
            setButtonPressed(null);
          }
        }}
        activeOpacity={0.8}
      >
        <View
          style={{
            width: "100%",
            height: 70,
            borderWidth: 1,
            borderColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: buttonPressed === "b1" ? "black" : "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: buttonPressed === "b1" ? "white" : "#000000DE",
            }}
          >
            Too many riders
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          if (buttonPressed !== "b2") {
            setButtonPressed("b2");
            await new Promise((resolve) => setTimeout(resolve, 200));
            finishRide();
          } else {
            setButtonPressed(null);
          }
        }}
        activeOpacity={0.8}
      >
        <View
          style={{
            width: "100%",
            height: 70,
            borderWidth: 1,
            borderColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: buttonPressed === "b2" ? "black" : "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: buttonPressed === "b2" ? "white" : "#000000DE",
            }}
          >
            Minor person
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          if (buttonPressed !== "b3") {
            setButtonPressed("b3");
            await new Promise((resolve) => setTimeout(resolve, 200));
            finishRide();
          } else {
            setButtonPressed(null);
          }
        }}
        activeOpacity={0.8}
      >
        <View
          style={{
            width: "100%",
            height: 70,
            borderWidth: 1,
            borderColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: buttonPressed === "b3" ? "black" : "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: buttonPressed === "b3" ? "white" : "#000000DE",
            }}
          >
            Other
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          bottom: "2%",
          width: "100%",
          //height: "10%",
          //justifyContent: "center",
          alignSelf: "center",

          //bottom: -20,
        }}
      >
        <TouchableOpacity
          //   onPress={() => {
          //     setReachedView(false);
          //     setStartTrip(true);
          //   }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            height: 50,
            //bottom: 0,
          }}
          activeOpacity={1}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Cancel Trip
          </Text>

          <View
            style={{
              left: 2,
            }}
          >
            <SvgArrow
              fill={"white"}
              height={25}
              width={30}
              //style={{ transform: [{ rotate: "90deg" }] }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default Cancel;

const styles = StyleSheet.create({});
