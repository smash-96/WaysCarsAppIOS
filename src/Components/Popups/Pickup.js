import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";
import SvgLocationIcon from "../../assets/location-icon.svg";
import SvgLocationRed from "../../assets/location-red.svg";
const Pickup = (props) => {
  return (
    <View style={styles(props.colors).centeredView}>
      <View style={styles(props.colors).modalView}>
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
            zIndex: 1,
          }}
        >
          <TouchableOpacity onPress={() => props.setCancelModal(true)}>
            <Icon
              name="close"
              type="antdesign"
              size={30}
              color={props.colors.textColor}
            />
          </TouchableOpacity>
          {props.startTrip === true ? (
            <Text
              style={{
                fontSize: 18,
                //fontWeight: "bold",
                //color: "#212529",
                color: props.colors.textColor,
                textAlign: "center",
                alignSelf: "center",
                textShadowOffset: { width: 1, height: 4 },
                textShadowRadius: 12,
                textShadowColor: "#000000DE",
              }}
            >
              Drop off
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                //color: "#212529",
                color: props.colors.textColor,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Go to pickup
            </Text>
          )}
          <TouchableOpacity
            style={{
              backgroundColor: props.startTrip === true ? "#C8102E" : "#129A61",
              height: 30,
              width: 100,
              borderRadius: 50,
              padding: 4,
            }}
            activeOpacity={0.8}
            onPress={props.navigate}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Navigate
            </Text>
          </TouchableOpacity>
        </View>

        {props.startTrip === true ? (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 26,
              right: 0,
              bottom: 0,
              justifyContent: "center",
            }}
          >
            <Text style={styles(props.colors).modalText}>18 min</Text>
            <Text style={styles(props.colors).modalText}>5.4 miles</Text>
          </View>
        ) : (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 26,
              right: 0,
              bottom: 0,
              justifyContent: "center",
            }}
          >
            <Text style={styles(props.colors).modalText}>15 min</Text>
            <Text style={styles(props.colors).modalText}>15 mls</Text>
          </View>
        )}

        {props.startTrip === true ? (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 20,
              left: 14,
            }}
          >
            <SvgLocationRed width={30} height={30} />
            <Text
              style={{
                fontSize: 15,
                //fontWeight: "bold",
                //color: "#212529",
                color: props.colors.textColor,
                textAlign: "center",
                alignSelf: "center",
                left: 10,
              }}
            >
              Chandigarh, Chandigarh, India
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 20,
              left: 14,
            }}
          >
            <SvgLocationIcon width={30} height={30} />
            <Text
              style={{
                fontSize: 15,
                //fontWeight: "bold",
                //color: "#212529",
                color: props.colors.textColor,
                textAlign: "center",
                alignSelf: "center",
                left: 10,
              }}
            >
              Sahibzada Ajit Singh Nagar, Punjab, India
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Pickup;

const styles = (props) =>
  StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    modalView: {
      //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      width: "100%",
      height: "100%",
      backgroundColor: props.background,
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
    modalText: {
      //textAlign: "center",
      fontSize: 14,
      color: props.textColor,
    },
  });
