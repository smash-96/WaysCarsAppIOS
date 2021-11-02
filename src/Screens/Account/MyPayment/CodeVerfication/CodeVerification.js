import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import ScreenHeader from "../../../../Components/Custom/ScreenHeader";
import SingleButton from "../../../../Components/Custom/SingleButton";

const CodeVerification = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"Code verification"}
        backPress={() => props.navigation.goBack()}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        {["1", "2", "3", "4"].map((element, i) => (
          <TextInput
            key={i}
            style={styles.txtInput}
            placeholder={element}
            placeholderTextColor="gray"
            textAlign={"center"}
            maxLength={1}
            // onChangeText={formikProps.handleChange(element)}
            // onBlur={formikProps.handleBlur(element)}
            //value={formikProps.values.name}
            keyboardType="number-pad"
          />
        ))}
      </View>

      <View
        style={{
          position: "absolute",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          bottom: "6%",
        }}
      >
        <SingleButton
          text={"Submit"}
          btnPressed={() => props.navigation.navigate("AccountDetails")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CodeVerification;

const styles = StyleSheet.create({
  txtInput: {
    borderBottomWidth: 1.4,
    width: "14%",
    paddingVertical: 14,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 18,
  },
});
