import React from "react";
import { Image } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Icon } from "react-native-elements";
import SvgImg from "../../assets/toggle-icon.svg";
import SvgArrow from "../../assets/right-arrow.svg";
import SvgLocation from "../../assets/location-icon.svg";
import SvgLocationRed from "../../assets/location-red.svg";
import SvgUserIcon from "../../assets/user-profile-image.svg";
import SvgMsgIcon from "../../assets/message-icon.svg";
import SvgLongArray from "../../assets/long-arrow.svg";

const ConfirmedUp = ({
  startTrip,
  jobDetailFunc,
  upArrowFunc,
  setStartTrip,
  setReachedView,
  endTripFunc,
}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            top: 4,
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("MENU PRESSED!")}
            onPress={jobDetailFunc}
            activeOpacity={0.1}
          >
            <SvgImg height={25} width={25} />
          </TouchableOpacity>

          {startTrip === true ? (
            <SvgLocationRed height={30} width={30} />
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgLocation height={30} width={30} />
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000DE",
                }}
              >
                Waiting
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={upArrowFunc}>
            <SvgArrow
              fill={"black"}
              height={25}
              width={30}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#000",
            opacity: 0.1,
            alignSelf: "center",
            marginTop: 18,
            marginBottom: 20,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              left: 10,
            }}
            onPress={() => console.log("MENU PRESSED!")}
            activeOpacity={0.1}
          >
            {startTrip === true ? (
              <SvgMsgIcon height={40} width={40} />
            ) : (
              <SvgUserIcon height={40} width={40} />
            )}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              right: 20,
            }}
          >
            <SvgUserIcon height={30} width={30} />
            <Text
              style={{
                fontSize: 15,
                color: "#000000DE",
              }}
            >
              Rider Name
            </Text>
          </View>

          <View />
        </View>

        <TouchableOpacity
          onPress={() => {
            if (!startTrip) {
              setReachedView(false);
              setStartTrip(true);
            } else {
              endTripFunc();
            }
          }}
          style={[
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: startTrip === true ? "#C8102E" : "#169B62",
              height: 50,
              // bottom: "1%"
            },
          ]}
        >
          <SvgLongArray height={30} width={70} />
          <Text
            style={{
              color: "white",
              fontSize: 19,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {startTrip === true ? "END TRIP" : "START TRIP"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmedUp;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    //borderRadius: 8,
    padding: 20,
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
    fontSize: 12,
  },
});
