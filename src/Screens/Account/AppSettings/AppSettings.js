import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setAppData, selectAppData } from "../../../redux/slices/AppStateSlice";
import SvgCheckIcon from "../../../assets/check_icon.svg";
import ScreenHeader from "../../../Components/Custom/ScreenHeader";

const AppSettings = (props) => {
  const dispatch = useDispatch();
  const [nightModePressed, setNightModePressed] = useState(false);
  const [gmapsPressed, setGmapsPressed] = useState(true);
  const [wazePressed, setWazePressed] = useState(false);
  const appData = useSelector(selectAppData);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"App settings"}
        backPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          flexDirection: "row",
          width: "96%",
          height: 70,
          borderWidth: 1,
          borderColor: "lightblue",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "white",
          marginTop: Dimensions.get("window").height * 0.1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#000000DE",
            left: 20,
          }}
        >
          Navigation
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (!gmapsPressed) {
                setWazePressed(false);
                setGmapsPressed(true);
              }
            }}
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000DE",
                }}
              >
                Gmaps
              </Text>

              <View>
                {gmapsPressed ? (
                  <SvgCheckIcon width={28} height={28} />
                ) : (
                  <View />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (!wazePressed) {
                setGmapsPressed(false);
                setWazePressed(true);
              }
            }}
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000DE",
                }}
              >
                Waze
              </Text>

              <View>
                {wazePressed ? (
                  <SvgCheckIcon width={28} height={28} />
                ) : (
                  <View />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (appData?.theme) {
            dispatch(
              setAppData({
                ...appData,
                theme: false,
              })
            );
          } else {
            dispatch(
              setAppData({
                ...appData,
                theme: true,
              })
            );
          }
          setNightModePressed(!nightModePressed);
        }}
        activeOpacity={0.8}
        style={{
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "96%",
            height: 70,
            borderWidth: 1,
            borderColor: "lightblue",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: nightModePressed ? "rgba(0,0,0, 0.65)" : "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: nightModePressed ? 0 : 6,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: nightModePressed ? "dodgerblue" : "#000000DE",
              left: 20,
            }}
          >
            Night mode
          </Text>
          <View
            style={{
              right: 20,
            }}
          >
            {nightModePressed ? (
              <SvgCheckIcon width={28} height={28} />
            ) : (
              <View />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("SIGN OUT!");
        }}
        activeOpacity={0.8}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "40%",
            height: 50,
            borderWidth: 1,
            borderColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Sign out
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppSettings;

const styles = StyleSheet.create({});
