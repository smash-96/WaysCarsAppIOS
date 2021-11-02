import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon } from "react-native-elements";
import ScreenHeader from "../../../../Components/Custom/ScreenHeader";

const PaymentMethod = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"Edit Payment"}
        backPress={() => props.navigation.goBack()}
      />

      <View
        style={{
          flexDirection: "row",
          width: "94%",
          height: 200,
          borderWidth: 1,
          borderColor: "black",
          justifyContent: "space-between",
          alignSelf: "center",
          padding: 40,
          marginTop: "30%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Icon name="bank"
          //type="font-awesome" 
          size={50} color={"gray"} />

          <Text
            style={{
              fontSize: 18,
              color: "#000000DE",
              fontWeight: "bold",
              marginTop: 8,
            }}
          >
            ***567
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("CodeVerification")}
        >
          <Icon
            name="pencil"
            type="simple-line-icon"
            size={40}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
