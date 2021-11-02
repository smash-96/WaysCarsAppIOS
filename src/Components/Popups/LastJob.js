import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";
import SvgStarIcon from "../../assets/end-trip.svg";
import SvgStarIconRed from "../../assets/star-icon.svg";

const LastJob = ({ finishRide, timerEnded }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flex: 1,
            position: "absolute",
            flexDirection: "row",
            top: 6,
            left: 6,
            right: 6,
            // bottom: 0,
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 8,
            paddingRight: 38,

            //marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              alignContent: "center",
            }}
            onPress={finishRide}
          >
            <Icon name="close" 
            //type="antdesign" 
            size={30} />
          </TouchableOpacity>

          <View>
            {timerEnded ? (
              <SvgStarIconRed width={50} height={50} />
            ) : (
              <SvgStarIcon width={50} height={50} />
            )}
          </View>

          <View />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: timerEnded ? 14 : 19,
              color: "black",
            }}
          >
            {timerEnded ? "Cancellation charge" : "Last job"}
          </Text>

          <View
            style={{
              //top: 40,
              height: 2,
              width: timerEnded ? "38%" : "40%",
              backgroundColor: "black",
              //opacity: 0.1,
              //alignSelf: "center",
              marginTop: 10,
              marginBottom: 50,
            }}
          />

          {timerEnded ? (
            <View
              style={{
                width: "44%",
                height: "44%",
                //borderWidth: 1,
                borderColor: "gray",
                backgroundColor: "white",

                bottom: 34,
                elevation: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  //fontWeight: "bold",
                  //bottom: 20,
                }}
              >
                $6.00
              </Text>
            </View>
          ) : (
            <>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  //fontWeight: "bold",
                  bottom: 20,
                }}
              >
                $340.00
              </Text>

              <View
                style={{
                  height: 3,
                  width: "30%",
                  backgroundColor: "gray",
                  borderRadius: 2,
                  //opacity: 0.2,
                  top: -10,
                }}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default LastJob;

const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
  },
  modalView: {
    //flex: 1,
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
});
