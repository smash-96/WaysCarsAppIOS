import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../Components/Custom/ScreenHeader";
import { setAppData, selectAppData } from "../../redux/slices/AppStateSlice";
import SvgArrowIcon from "../../assets/right-arrow.svg";

const Account = (props) => {
  const dispatch = useDispatch();
  const appData = useSelector(selectAppData);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"My Account"}
        backPress={() => {
          if (!appData?.online) {
            dispatch(
              setAppData({
                ...appData,
                modalOpen: true,
              })
            );
          }
          props.navigation.goBack();
        }}
      />

      <View
        style={{
          padding: 30,
          marginTop: "50%",
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("Account Button Pressed")}
          activeOpacity={0.8}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 70,
              borderWidth: 1.5,
              borderColor: "black",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#000000DE",
              }}
            >
              Licences Status
            </Text>
            <View>
              <SvgArrowIcon fill={"black"} width={25} height={25} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("MyPayment")}
          activeOpacity={0.8}
          style={{
            marginTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 70,
              borderWidth: 1.5,
              borderColor: "black",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#000000DE",
              }}
            >
              My Payment
            </Text>
            <View>
              <SvgArrowIcon fill={"black"} width={25} height={25} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("AppSettings")}
          activeOpacity={0.8}
          style={{
            marginTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 70,
              borderWidth: 1.5,
              borderColor: "black",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#000000DE",
              }}
            >
              App Settings
            </Text>
            <View>
              <SvgArrowIcon fill={"black"} width={25} height={25} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
