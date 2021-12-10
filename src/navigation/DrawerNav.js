import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapScreen from "../Screens/MapScreen/MapScreen";
import { Avatar, colors } from "react-native-elements";
import ActiveJobs from "../Screens/ActiveJobs/ActiveJobs";
import UserAvatar from "../Components/Custom/UserAvatar/UserAvatar";
import AccountStack from "./AccountStack";
import { useSelector, useDispatch } from "react-redux";
import { setAppData, selectAppData } from "../redux/slices/AppStateSlice";
import { color } from "react-native-reanimated";
import LeftArrowIcon from "../assets/left-arrow.svg";
import ContactUsIcon from "../assets/buttons/contact-us.svg";
import ActiveJobsIcon from "../assets/buttons/active-jobs.svg";
import EarningIcon from "../assets/buttons/earnings.svg";
import AccountIcon from "../assets/buttons/account.svg";
import GoOfflineIcon from "../assets/buttons/offline-button.svg";
import PicStarIcon from "../assets/pic-star.svg";
import NavItem from "../Components/Custom/NavItem";
import Line from "../Components/Custom/Line";

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const appData = useSelector(selectAppData);
  const baseAvatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView
          // style={{ flex: 1 }}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <View
            style={{
              //flexDirection: "row",
              //backgroundColor: "#effdfe",
              //alignSelf: "stretch",
              //width: width,
              //justifyContent: "space-between",
              margin: 1,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                left:20,
                top: 20,
                zIndex:1
              }}
              onPress={() => {
                if (!appData?.online) {
                  dispatch(
                    setAppData({
                      ...appData,
                      modalOpen: true,
                    })
                  );
                }
                props.navigation.toggleDrawer();
              }}
            >
              <LeftArrowIcon />
              {/* <Avatar rounded source={require("../assets/left-arrow.png")} /> */}
            </TouchableOpacity>

            {/* <View /> */}
          </View>

          <View style={{ paddingTop: "8%", paddingBottom: "4%" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <UserAvatar profilePic={baseAvatar} drawer={true} />
              <Text
                style={{
                  top: 0,
                  color: "#040B25",
                  marginTop: "3%",
                  //fontFamily: "sans-serif-condensed",
                  fontSize: 18,
                  fontWeight: "400",
                }}
              >
                Jeo
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    right: 2,
                  }}
                >
                  <PicStarIcon />
                </View>

                <Text
                  style={{
                    color: "#8C97A3",
                    //fontFamily: "sans-serif-condensed",
                    fontSize: 15,
                    fontWeight: "500",
                    left: 2,
                  }}
                >
                  4.65
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: "#B2B4B8",
              width: "100%",
              marginBottom: 8,
            }}
          />
          <View
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <NavItem
              Icon={ActiveJobsIcon}
              text={"Active Jobs"}
              onClickFunction={() => props.navigation.navigate("ActiveJobs")}
              type={"drawer"}
            />
          </View>

          <View
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <NavItem
              Icon={EarningIcon}
              text={"Earning"}
              onClickFunction={() => console.log("EARNINGS")}
              type={"drawer"}
            />
          </View>

          <View
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <NavItem
              Icon={AccountIcon}
              text={"Account"}
              onClickFunction={() => props.navigation.navigate("AccountStack")}
              type={"drawer"}
            />
          </View>
          {/* <DrawerItem
            label={"Active Jobs"}
            onPress={() => props.navigation.navigate("ActiveJobs")}
            icon={({ focused, size }) => <NightModeIcon />}
            labelStyle={{ fontSize: 15, color: "#040B25" }}
          />
          <DrawerItem
            label={"Earning"}
            onPress={() => console.log("EARNINGS")}
            icon={({ focused, size }) => <NightModeIcon />}
            labelStyle={{ fontSize: 15, color: "#040B25" }}
          />
          <DrawerItem
            label={"Account"}
            onPress={() => props.navigation.navigate("AccountStack")}
            icon={({ focused, size }) => <NightModeIcon />}
            labelStyle={{ fontSize: 15, color: "#040B25" }}
          /> */}

          <View
            style={{
              marginTop: 35,
            }}
          >
            <Text
              style={{
                left: 20,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Help
            </Text>

            {/* <View
              style={{
                height: 0.8,
                backgroundColor: "#B2B4B8",
                width: "100%",
                //alignSelf: "center",
                marginTop: 10,
              }}
            /> */}
          </View>

          <Line
            lineColor={"#B2B4B8"}
            topSpace={Dimensions.get("screen").height * 0.01}
            bottomSpace={Dimensions.get("screen").height * 0.03}
          />

          <NavItem
            Icon={ContactUsIcon}
            text={"Contact Us"}
            onClickFunction={() => console.log("CONTACT US")}
            type={"drawer"}
          />

          {/* <DrawerItem
            label={"Contact Us"}
            onPress={() => console.log("CONTACT US")}
            icon={({ focused, size }) => <NightModeIcon />}
            labelStyle={{ fontSize: 15, color: "#040B25" }}
          /> */}
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          justifyContent: "center",
          alignSelf: "center",
          // backgroundColor: "#FE3434",
          // width: 68,
          // height: 68,
          // borderRadius: 68 / 2,
        }}
        activeOpacity={0.8}
        onPress={() => {
          dispatch(
            setAppData({
              ...appData,
              modalOpen: true,
              online: false,
            })
          );
          props.navigation.toggleDrawer();
        }}
      >
        <GoOfflineIcon />
        {/* <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Go Offline
        </Text> */}
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.background,
            width: "76%",
          },
        }}
      >
        <Drawer.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="ActiveJobs"
          component={ActiveJobs}
          options={{
            headerShown: false,
          }}
        />
        {/* <Drawer.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
          }}
        /> */}
        <Drawer.Screen
          name="AccountStack"
          component={AccountStack}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

export default DrawerNav;
