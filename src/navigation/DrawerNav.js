import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
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
              flexDirection: "row",
              //backgroundColor: "#effdfe",
              alignSelf: "stretch",
              //width: width,
              justifyContent: "space-between",
              margin: 1,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
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
              <Avatar rounded source={require("../assets/left-arrow.png")} />
            </TouchableOpacity>

            <View />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              //alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <UserAvatar profilePic={baseAvatar} drawer={true} />

            <View
              style={{
                //flex: 1,
                alignSelf: "flex-start",
                right: 100,
                // top: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  color: colors.textColor,
                }}
              >
                Joe's
              </Text>
            </View>
          </View>
          {/* <DrawerItemList {...props} /> */}
          <DrawerItem
            style={{
              width: "80%",
              height: 50,
              borderWidth: 1,
              borderRadius: 0,
              borderColor: "gray",
            }}
            label="Active Jobs"
            labelStyle={{
              fontSize: 15,
              color: colors.textColor,
              fontWeight: "bold",
            }}
            onPress={() => props.navigation.navigate("ActiveJobs")}
          />

          <DrawerItem
            style={{
              width: "80%",
              height: 50,
              borderWidth: 1,
              borderRadius: 0,
              borderColor: "gray",
            }}
            label="Earning"
            labelStyle={{
              fontSize: 15,
              color: colors.textColor,
              fontWeight: "bold",
            }}
            //onPress={() => props.navigation.navigate("Earning")}
          />
          <DrawerItem
            style={{
              width: "80%",
              height: 50,
              borderWidth: 1,
              borderRadius: 0,
              borderColor: "gray",
            }}
            label="Account"
            labelStyle={{
              fontSize: 15,
              color: colors.textColor,
              fontWeight: "bold",
            }}
            onPress={() => props.navigation.navigate("AccountStack")}
          />
          <DrawerItem
            style={{
              width: "80%",
              height: 50,
              borderWidth: 1,
              borderRadius: 0,
              borderColor: "gray",
            }}
            label="Contact Us"
            labelStyle={{
              fontSize: 15,
              color: colors.textColor,
              fontWeight: "bold",
            }}
            //onPress={() => props.navigation.navigate("Settings")}
          />
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 50,
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "rgba(255, 0, 0, 0.4)",
          width: 56,
          height: 56,
          borderRadius: 56 / 2,
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
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Go Offline
        </Text>
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
            width: "100%",
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
