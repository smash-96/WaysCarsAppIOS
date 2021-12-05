// import React from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { Avatar, Icon } from "react-native-elements";

// const ScreenHeader = (props) => {
//   return (
//     <>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             right: 15,
//           }}
//           onPress={props.backPress}
//         >
//           <Avatar
//             rounded
//             source={{
//               uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
//             }}
//           />
//         </TouchableOpacity>
//         <Text style={styles.titleText}>{props.title}</Text>

//         <View
//           style={{
//             flex: 1,
//           }}
//         />
//       </View>

//       <View style={styles.customView} />
//     </>
//   );
// };

// export default ScreenHeader;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 20,
//   },
//   titleText: {
//     fontSize: 18,
//     //fontWeight: "bold",
//     color: "#212529",
//     textShadowOffset: { width: 1, height: 4 },
//     textShadowRadius: 12,
//     textShadowColor: "#000000DE",
//   },
//   customView: {
//     height: 2,
//     width: "70%",
//     backgroundColor: "#000",
//     opacity: 0.3,
//     alignSelf: "center",
//   },
// });

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import LeftArrowIcon from "../../assets/left-arrow.svg";

const ScreenHeader = (props) => {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={props.backPress}>
        <LeftArrowIcon />
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.titleText}>{props.title}</Text>

        <View style={styles.customView} />
      </View>
    </View>
    // <>
    //   <View style={styles.container}>
    //     <TouchableOpacity
    //       style={{
    //         flex: 1,
    //         right: 15,
    //       }}
    //       onPress={props.backPress}
    //     >
    //       <LeftArrowIcon />
    //       {/* <Avatar
    //         rounded
    //         source={{
    //           uri: "https://img.icons8.com/ios/452/long-arrow-left.png",
    //         }}
    //       /> */}
    //     </TouchableOpacity>
    //     <Text style={styles.titleText}>{props.title}</Text>

    //     <View
    //       style={{
    //         flex: 1,
    //       }}
    //     />
    //   </View>

    //   <View style={styles.customView} />
    // </>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  titleText: {
    fontSize: 26,
    fontWeight: "500",
    // color: "#212529",
    // textShadowOffset: { width: 1, height: 4 },
    // textShadowRadius: 12,
    // textShadowColor: "#000000DE",
  },
  customView: {
    height: 1,
    width: "50%",
    backgroundColor: "#000",
    opacity: 0.3,
    alignSelf: "center",
    shadowOffset: { width: 1, height: 4 },
    shadowRadius: 12,
    shadowColor: "#000000DE",
    elevation: 10,
    top: 6,
  },
});
