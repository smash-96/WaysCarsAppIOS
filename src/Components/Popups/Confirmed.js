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
import SvgCrossIcon from "../../assets/wrong_icon.svg";

const Confirmed = ({
  driving,
  reachedView,
  jobDetailFunc,
  upArrowFunc,
  startTrip,
  lastJob,
  timerEnded,
}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            //top: 4,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {lastJob || timerEnded ? (
            <View
              style={{
                flex: 1,
              }}
            />
          ) : (
            <TouchableOpacity
              style={{
                flex: 1,
              }}
              onPress={jobDetailFunc}
              activeOpacity={0.1}
            >
              <SvgImg height={25} width={25} />
            </TouchableOpacity>
          )}

          {reachedView === true || startTrip === true ? (
            <>
              {reachedView === false && startTrip === true ? (
                <View>
                  <SvgLocationRed height={30} width={30} />
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#212529",
                      textAlign: "center",
                    }}
                  >
                    Arrived @pickup/Timer started
                  </Text>
                </View>
              )}
            </>
          ) : (
            <>
              {driving === true ? (
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      //fontWeight: "bold",
                      color: "#212529",
                      textAlign: "center",
                    }}
                  >
                    Driving to pickup
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  {timerEnded ? (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 26,
                          width: 26,
                          borderRadius: 13,
                          borderWidth: 1,
                          borderColor: "red",
                          //backgroundColor: "green",
                          //overflow: "hidden",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 6,
                        }}
                      >
                        <SvgCrossIcon height={15} width={15} />
                      </View>

                      <Text
                        style={{
                          fontSize: 15,
                          //fontWeight: "bold",
                          color: "#C8102E",
                          //textAlign: "center",
                          marginLeft: 6,
                        }}
                      >
                        JOB Cancelled
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#212529",
                        textAlign: "center",
                      }}
                    >
                      {lastJob ? "Trip Ended" : "You Confirm"}
                    </Text>
                  )}
                </View>
              )}
            </>
          )}
          {reachedView === true || startTrip === true ? (
            <TouchableOpacity
              style={{
                flex: 1,
                right: reachedView === false && startTrip === true ? -140 : -50,
              }}
              activeOpacity={0.1}
              onPress={upArrowFunc}
            >
              <SvgArrow
                fill={"black"}
                height={25}
                width={30}
                style={{ transform: [{ rotate: "270deg" }] }}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flex: 1,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Confirmed;

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
