import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const RatingBar = () => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // // Filled Star. You can also give the path from local
  // const starImageFilled =
  //   "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  // // Empty Star. You can also give the path from local
  // const starImageCorner =
  //   "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            <Image
              style={styles.starImageStyle}
              source={
                item <= defaultRating
                  ? require("../assets/yellow-star.jpg")
                  : require("../assets/blank-star.png")
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RatingBar;

const styles = StyleSheet.create({
  customRatingBarStyle: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingLeft: 40,
    paddingRight: 40,
    //marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});
