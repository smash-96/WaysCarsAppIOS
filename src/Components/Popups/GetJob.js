import React, { useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import SvgUserIcon from "../../assets/user-profile-image.svg";

const CIRCLE_LENGTH = 283; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const GetJob = (props) => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    stroke: `rgba(255, 0, 0, ${progress.value > 0.1 ? progress.value : 0.1})`,
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  useEffect(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {
      duration: 30000,
    });
  }, []);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.modalText}>$340.00</Text>

          <View
            style={{
              height: 3.5,
              width: "30%",
              backgroundColor: "#000",
              opacity: 0.2,
              top: -20,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              position: "absolute",
              top: -20,
              left: 0,
            }}
          >
            <Image
              source={require("../../assets/location-icon.png")}
              style={{
                height: 30,
                width: 25,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "black",
                width: 80,
              }}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              LocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocationLocation
            </Text>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: 12,
              color: "black",
            }}
          >
            Executive
          </Text>
        </View>

        <View style={styles.imageBlock}>
          <Svg
            style={{
              position: "absolute",
              transform: [{ rotate: "270deg" }],
            }}
            width={Dimensions.get("window").width * 0.4}
            height={Dimensions.get("window").width * 0.4}
            viewBox="0 0 100 100"
          >
            <AnimatedCircle
              cx={50}
              cy={50}
              r={45}
              strokeWidth={10}
              strokeDasharray={CIRCLE_LENGTH}
              animatedProps={animatedProps}
              //strokeLinecap={"round"}
            />
          </Svg>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={props.getJobFunc}
            activeOpacity={0.9}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <View style={styles.image}>
                <SvgUserIcon />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  top: 10,
                }}
              >
                Rider Name
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              fontSize: 12,
              color: "black",
            }}
          >
            54 mins
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: 12,
              color: "black",
            }}
          >
            8.9 miles
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GetJob;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: height / 3,
  },
  modalView: {
    //alignItems: "center",
    width: "96%",
    height: "100%",
    //height: "100%",
    backgroundColor: "#ece8f8",
    borderRadius: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    //top: height / 3,
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    bottom: 20,
  },

  image: {
    top: 10,
    alignItems: "center",
  },
  imageBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    backgroundColor: "#ece8f8",
    elevation: 10,
    shadowColor: "#006",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    overflow: "hidden",
  },

  item: {
    position: "absolute",
    width: 100,
    height: 200, // this is the diameter of circle
  },
  dot: {
    width: "20%",
    height: 20,
    backgroundColor: "red",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
