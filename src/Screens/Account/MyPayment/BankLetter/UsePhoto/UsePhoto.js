import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import ScreenHeader from "../../../../../Components/Custom/ScreenHeader";
import SingleButton from "../../../../../Components/Custom/SingleButton";
import SvgDocumentIcon from "../../../../../assets/document-text-outline.svg";

const UsePhoto = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"Use this photo?"}
        backPress={() => props.navigation.replace("BrowsePhotos")}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: Dimensions.get("window").height * 0.6,
          borderWidth: 4,
          borderColor: "gray",
          borderRadius: 12,
          alignSelf: "center",
          backgroundColor: "white",
          marginTop: "10%",
        }}
      >
        <SvgDocumentIcon
          height={Dimensions.get("window").height * 0.5}
          width={Dimensions.get("window").width}
          color={"gray"}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <SingleButton
          text={"Take again"}
          btnPressed={() => props.navigation.replace("BankLetter")}
        />

        <SingleButton
          text={"SUBMIT"}
          btnPressed={() => console.log("Photo Submitted")}
        />
      </View>
    </SafeAreaView>
  );
};

export default UsePhoto;

const styles = StyleSheet.create({});
