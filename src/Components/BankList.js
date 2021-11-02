import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import SingleButton from "./Custom/SingleButton";
const BankList = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selectedVal, setSelectedVal] = useState(null);

  const banks = [
    "Lloyds",
    "HSBC",
    "Barclays",
    "RBS",
    "Santander",
    "NatWest",
    "Clydesdale",
    "Nationwide",
    "ING direct",
    "Halifax",
    "Coutts",
    "Alpha Bank",
  ];
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Select Bank
        </Text>
        <View
          style={{
            marginTop: 20,
            height: "70%",
            width: "50%",
          }}
        >
          <FlatList
            data={banks}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (!clicked) {
                    setClicked(true);
                    setSelectedVal(item);
                  } else {
                    setClicked(false);
                    setSelectedVal(null);
                  }
                  console.log("SELECTED ITEM", selectedVal);
                }}
              >
                <View style={styles.txtInput}>
                  <Text
                    style={{
                      backgroundColor:
                        selectedVal !== null && selectedVal === item
                          ? "dodgerblue"
                          : "lightgray",
                      color: "black",
                      fontSize: 19,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            width: "100%",
          }}
        >
          <SingleButton
            text={"Select"}
            btnPressed={() => {
              if (selectedVal !== null) {
                props.setBankVal(selectedVal);
              }
              setClicked(false);
              props.setModalOpen(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BankList;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    width: "96%",
    height: "100%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },
  txtInput: {
    marginBottom: 10,
    marginTop: 4,
    borderBottomWidth: 1.4,
    width: "100%",
    paddingVertical: 8,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 19,
    paddingLeft: "2%",
  },
});
