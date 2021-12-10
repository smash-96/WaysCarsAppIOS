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
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LicenseIcon from "../../assets/buttons/license.svg";
import PaymentIcon from "../../assets/buttons/payment.svg";
import SettingsIcon from "../../assets/buttons/settings.svg";
import NavItem from "../../Components/Custom/NavItem";

const Account = (props) => {
  const dispatch = useDispatch();
  const appData = useSelector(selectAppData);
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0, }}>
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
          //padding: 30,
          marginTop: Dimensions.get("window").height * 0.15,
        }}
      >
        <NavItem
          Icon={LicenseIcon}
          text={"Licence Status"}
          onClickFunction={() => console.log("Account Button Pressed")}
        />

        <NavItem
          Icon={PaymentIcon}
          text={"My Payment"}
          onClickFunction={() => props.navigation.navigate("MyPayment")}
        />

        <NavItem
          Icon={SettingsIcon}
          text={"App Settings"}
          onClickFunction={() => props.navigation.navigate("AppSettings")}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
