import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import ImageView from "react-native-image-viewing";
import ScreenHeader from "../../../../Components/Custom/ScreenHeader";
import SingleButton from "../../../../Components/Custom/SingleButton";

import SvgDocumentIcon from "../../../../assets/document-text-outline.svg";
const BankLetter = (props) => {
  const [image, setImage] = useState(null);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [tappedImage, setTappedImage] = useState([]);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then((image) => {
        setImage(Platform.OS === "ios" ? image.sourceURL : image.path);
        // props.setProfilePicture(
        //   Platform.OS === "ios" ? image.sourceURL : image.path
        // ); // calling the function from parent to set state in parent
      })
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"Bank Letter"}
        backPress={() => props.navigation.goBack()}
      />

      <View
        style={{
          //flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <SingleButton
          text={"Submit"}
          btnPressed={() => console.log("Button Pressed")}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: Dimensions.get("window").height * 0.54,
          borderWidth: 6,
          borderColor: "gray",
          borderRadius: 12,
          alignSelf: "center",
          backgroundColor: "white",
          marginTop: "5%",
        }}
      >
        {image !== null ? (
          <Image
            style={[styles.image]}
            source={{ uri: image }}
            resizeMode="cover"
            //onError={onImageError}
          />
        ) : (
          <SvgDocumentIcon
            height={Dimensions.get("window").height * 0.5}
            width={Dimensions.get("window").width}
            color={"gray"}
          />
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <SingleButton text={"Take photo"} btnPressed={takePhotoFromCamera} />

        <SingleButton
          text={"Browse"}
          btnPressed={() => props.navigation.replace("BrowsePhotos")}
        />
      </View>

      <ImageView
        images={tappedImage}
        imageIndex={0}
        visible={isImageViewerVisible}
        onRequestClose={() => setIsImageViewerVisible(false)}
      />
    </SafeAreaView>
  );
};

export default BankLetter;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
