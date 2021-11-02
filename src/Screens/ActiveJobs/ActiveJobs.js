import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { setAppData, selectAppData } from "../../redux/slices/AppStateSlice";
import SvgArrowIcon from "../../assets/right-arrow.svg";

import ActiveJobsView from "../../Components/Custom/ActiveJobsView";

const ActiveJobs = (props) => {
  const dispatch = useDispatch();
  const appData = useSelector(selectAppData);
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",

        //paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              //right: 15,
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
              props.navigation.goBack();
            }}
          >
            <Avatar
              rounded
              source={{
                uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#212529",
              // textShadowOffset: { width: 1, height: 4 },
              // textShadowRadius: 12,
              // textShadowColor: "#000000DE",
            }}
          >
            Active Jobs
          </Text>

          <View
            style={{
              flex: 1,
            }}
          />
        </View>

        <View
          style={{
            //top: 40,
            height: 2,
            width: "70%",
            backgroundColor: "#000",
            opacity: 0.3,
            alignSelf: "center",
            marginTop: 5,
            // marginBottom: 15,
          }}
        />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              RN/SCHQ jobs
            </ListItem.Title>

            <ActiveJobsView
              icon={"green"}
              iconText={"NOW"}
              bgColor={"white"}
              text={"Pickup"}
              topMargin={15}
              arrowColor={"black"}
            />
            <ActiveJobsView
              icon={"red"}
              iconText={"NW1"}
              bgColor={"white"}
              text={"Drop off"}
              topMargin={10}
              arrowColor={"black"}
            />

            <View
              style={{
                height: 2,
                width: "100%",
                backgroundColor: "#000",
                opacity: 0.1,
                marginTop: 20,
              }}
            />

            <ListItem.Title
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Scheduled (SCH/HR)
            </ListItem.Title>

            <ListItem.Subtitle
              style={{
                //alignSelf: "center",
                color: "black",
                left: 4,
              }}
            >
              Friday 21 April 21
            </ListItem.Subtitle>

            <ActiveJobsView
              icon={"green"}
              iconText={"SCH"}
              bgColor={"red"}
              text={"Pickup"}
              topMargin={10}
              arrowColor={"white"}
            />

            <ActiveJobsView
              icon={"red"}
              iconText={"W1"}
              bgColor={"white"}
              text={"Drop off"}
              topMargin={10}
              arrowColor={"black"}
            />

            <ActiveJobsView
              icon={"green"}
              iconText={"HR"}
              bgColor={"blue"}
              text={"Pickup"}
              topMargin={15}
              arrowColor={"white"}
            />

            <ActiveJobsView
              icon={"red"}
              iconText={"NW1"}
              bgColor={"white"}
              text={"Drop off"}
              topMargin={10}
              arrowColor={"black"}
            />
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveJobs;

const styles = StyleSheet.create({});
