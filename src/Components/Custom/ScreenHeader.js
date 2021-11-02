import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";

const ScreenHeader = (props) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            flex: 1,
            right: 15,
          }}
          onPress={props.backPress}
        >
          <Avatar
            rounded
            source={{
              uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{props.title}</Text>

        <View
          style={{
            flex: 1,
          }}
        />
      </View>

      <View style={styles.customView} />
    </>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    //fontWeight: "bold",
    color: "#212529",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 12,
    textShadowColor: "#000000DE",
  },
  customView: {
    height: 2,
    width: "70%",
    backgroundColor: "#000",
    opacity: 0.3,
    alignSelf: "center",
  },
});
