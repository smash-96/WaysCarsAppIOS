import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import RatingBar from "../RatingBar";

const Rating = ({ setLastJob, setEndTrip }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            You drove for
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Rider Name
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RatingBar />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setEndTrip(false);
              setLastJob(true);
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0D60D0",
              width: "96%",
              height: "75%",
            }}
            activeOpacity={0.1}
          >
            <Text
              style={{
                color: "white",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              RATE TRIP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
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
