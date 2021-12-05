// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { setAppData, selectAppData } from "../../../redux/slices/AppStateSlice";
// import SvgCheckIcon from "../../../assets/check_icon.svg";
// import ScreenHeader from "../../../Components/Custom/ScreenHeader";

// const AppSettings = (props) => {
//   const dispatch = useDispatch();
//   const [nightModePressed, setNightModePressed] = useState(false);
//   const [gmapsPressed, setGmapsPressed] = useState(true);
//   const [wazePressed, setWazePressed] = useState(false);
//   const appData = useSelector(selectAppData);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//       <ScreenHeader
//         title={"App settings"}
//         backPress={() => props.navigation.goBack()}
//       />
//       <View
//         style={{
//           flexDirection: "row",
//           width: "96%",
//           height: 70,
//           borderWidth: 1,
//           borderColor: "lightblue",
//           alignItems: "center",
//           alignSelf: "center",
//           backgroundColor: "white",
//           marginTop: Dimensions.get("window").height * 0.1,
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 3,
//           },
//           shadowOpacity: 0.27,
//           shadowRadius: 4.65,

//           elevation: 6,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 18,
//             color: "#000000DE",
//             left: 20,
//           }}
//         >
//           Navigation
//         </Text>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               if (!gmapsPressed) {
//                 setWazePressed(false);
//                 setGmapsPressed(true);
//               }
//             }}
//             activeOpacity={0.8}
//           >
//             <View
//               style={{
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: "#000000DE",
//                 }}
//               >
//                 Gmaps
//               </Text>

//               <View>
//                 {gmapsPressed ? (
//                   <SvgCheckIcon width={28} height={28} />
//                 ) : (
//                   <View />
//                 )}
//               </View>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => {
//               if (!wazePressed) {
//                 setGmapsPressed(false);
//                 setWazePressed(true);
//               }
//             }}
//             activeOpacity={0.8}
//           >
//             <View
//               style={{
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: "#000000DE",
//                 }}
//               >
//                 Waze
//               </Text>

//               <View>
//                 {wazePressed ? (
//                   <SvgCheckIcon width={28} height={28} />
//                 ) : (
//                   <View />
//                 )}
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <TouchableOpacity
//         onPress={() => {
//           if (appData?.theme) {
//             dispatch(
//               setAppData({
//                 ...appData,
//                 theme: false,
//               })
//             );
//           } else {
//             dispatch(
//               setAppData({
//                 ...appData,
//                 theme: true,
//               })
//             );
//           }
//           setNightModePressed(!nightModePressed);
//         }}
//         activeOpacity={0.8}
//         style={{
//           marginTop: 10,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             width: "96%",
//             height: 70,
//             borderWidth: 1,
//             borderColor: "lightblue",
//             justifyContent: "space-between",
//             alignItems: "center",
//             alignSelf: "center",
//             backgroundColor: nightModePressed ? "rgba(0,0,0, 0.65)" : "white",
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,

//             elevation: nightModePressed ? 0 : 6,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 18,
//               color: nightModePressed ? "dodgerblue" : "#000000DE",
//               left: 20,
//             }}
//           >
//             Night mode
//           </Text>
//           <View
//             style={{
//               right: 20,
//             }}
//           >
//             {nightModePressed ? (
//               <SvgCheckIcon width={28} height={28} />
//             ) : (
//               <View />
//             )}
//           </View>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => {
//           console.log("SIGN OUT!");
//         }}
//         activeOpacity={0.8}
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: "40%",
//             height: 50,
//             borderWidth: 1,
//             borderColor: "lightblue",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "black",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 18,
//               color: "white",
//             }}
//           >
//             Sign out
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default AppSettings;

// const styles = StyleSheet.create({});

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
  ScrollView,
  UIManager,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setAppData, selectAppData } from "../../../redux/slices/AppStateSlice";
import Line from "../../../Components/Custom/Line";
import SvgCheckIcon from "../../../assets/check_icon.svg";

import NavigationIcon from "../../../assets/buttons/navigation.svg";
import NightModeIcon from "../../../assets/buttons/night-mode.svg";
import ExpandIcon from "../../../assets/expand.svg";
import RetractIcon from "../../../assets/retract.svg";
import TickIcon from "../../../assets/buttons/checked-tick.svg";
import BlankTickIcon from "../../../assets/buttons/unchecked-tick.svg";
import ScreenHeader from "../../../Components/Custom/ScreenHeader";

const ExpandableComponent = ({
  index,
  item,
  onClickFunction,
  setSubValues,
}) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClickFunction}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {item.category_name === "Navigation" ? (
            <NavigationIcon />
          ) : (
            <NightModeIcon />
          )}
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 20,
            }}
          >
            {item.category_name}
          </Text>
        </View>

        <View>{item.isExpanded ? <RetractIcon /> : <ExpandIcon />}</View>
      </TouchableOpacity>

      <View
        style={{
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <Line
          lineColor={"#B2B4B8"}
          topSpace={Dimensions.get("screen").height * 0.02}
          bottomSpace={Dimensions.get("screen").height * 0.02}
        />
      </View>

      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((value, key) => {
          // console.log("SUB ITEM", value);
          return (
            <View key={key}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 66,
                  paddingRight: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: value.selected ? "black" : "#ADADAD",
                  }}
                >
                  {value.val}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSubValues(index, key)}
                >
                  {value.selected ? (
                    <TickIcon height={18} width={18} />
                  ) : (
                    <BlankTickIcon height={18} width={18} />
                  )}
                </TouchableOpacity>
              </View>

              {item?.subcategory?.length !== key + 1 ? (
                <View
                  style={{
                    paddingLeft: 60,
                    paddingRight: 40,
                  }}
                >
                  <Line
                    lineColor={"#D2D2D2"}
                    topSpace={Dimensions.get("screen").height * 0.01}
                    bottomSpace={Dimensions.get("screen").height * 0.01}
                  />
                </View>
              ) : (
                <View
                  style={{
                    marginBottom: 20,
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const AppSettings = (props) => {
  const dispatch = useDispatch();
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [nightModePressed, setNightModePressed] = useState(false);
  const [gmapsPressed, setGmapsPressed] = useState(true);
  const [wazePressed, setWazePressed] = useState(false);
  const appData = useSelector(selectAppData);

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );
    setListDataSource(array);
  };

  const setSubValues = (index, key) => {
    const array = [...listDataSource];

    array[index].subcategory.map((value, placeindex) =>
      placeindex === key
        ? (array[index].subcategory[key]["selected"] =
            !array[index].subcategory[key]["selected"])
        : (array[index].subcategory[key]["selected"] = false)
    );
    setListDataSource(array);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"App settings"}
        backPress={() => props.navigation.goBack()}
      />

      <View
        style={{
          marginTop: Dimensions.get("window").height * 0.1,
        }}
      >
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              index={key}
              onClickFunction={() => {
                updateLayout(key);
              }}
              setSubValues={setSubValues}
              item={item}
            />
          ))}
        </ScrollView>
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          width: "96%",
          height: 70,
          borderWidth: 1,
          borderColor: "lightblue",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "white",
          marginTop: Dimensions.get("window").height * 0.1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#000000DE",
            left: 20,
          }}
        >
          Navigation
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (!gmapsPressed) {
                setWazePressed(false);
                setGmapsPressed(true);
              }
            }}
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000DE",
                }}
              >
                Gmaps
              </Text>

              <View>
                {gmapsPressed ? (
                  <SvgCheckIcon width={28} height={28} />
                ) : (
                  <View />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (!wazePressed) {
                setGmapsPressed(false);
                setWazePressed(true);
              }
            }}
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000DE",
                }}
              >
                Waze
              </Text>

              <View>
                {wazePressed ? (
                  <SvgCheckIcon width={28} height={28} />
                ) : (
                  <View />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (appData?.theme) {
            dispatch(
              setAppData({
                ...appData,
                theme: false,
              })
            );
          } else {
            dispatch(
              setAppData({
                ...appData,
                theme: true,
              })
            );
          }
          setNightModePressed(!nightModePressed);
        }}
        activeOpacity={0.8}
        style={{
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "96%",
            height: 70,
            borderWidth: 1,
            borderColor: "lightblue",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: nightModePressed ? "rgba(0,0,0, 0.65)" : "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: nightModePressed ? 0 : 6,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: nightModePressed ? "dodgerblue" : "#000000DE",
              left: 20,
            }}
          >
            Night mode
          </Text>
          <View
            style={{
              right: 20,
            }}
          >
            {nightModePressed ? (
              <SvgCheckIcon width={28} height={28} />
            ) : (
              <View />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("SIGN OUT!");
        }}
        activeOpacity={0.8}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "40%",
            height: 50,
            borderWidth: 1,
            borderColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Sign out
          </Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default AppSettings;

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Navigation",
    subcategory: [
      { id: 1, val: "Google Maps", selected: true },
      { id: 2, val: "Waze", selected: false },
    ],
  },
  {
    isExpanded: false,
    category_name: "Night mode",
    subcategory: [
      { id: 3, val: "Auto", selected: false },
      { id: 4, val: "Off", selected: true },
      { id: 5, val: "Always on", selected: false },
    ],
  },
];
