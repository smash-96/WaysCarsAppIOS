import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import ImageView from "react-native-image-viewing";
import FastImage from "react-native-fast-image";
import ScreenHeader from "../../../../../Components/Custom/ScreenHeader";
import SingleButton from "../../../../../Components/Custom/SingleButton";
import SvgDocumentIcon from "../../../../../assets/document-text-outline.svg";

//const Image = FastImage;

const { height } = Dimensions.get("window");
const imageSize = height * 0.12;
const photoIconSize = imageSize * 0.27;
const BrowsePhotos = (props) => {
  const [image, setImage] = useState(null);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [tappedImage, setTappedImage] = useState([]);
  // const handleProfilePictureClick = () => {
  //   if (image === baseAvatar && !props.drawer) {
  //     console.log("Image Selector Opened");
  //     showActionSheet();
  //   } else if (image !== baseAvatar) {
  //     const imageView = [
  //       {
  //         uri: image,
  //       },
  //     ];
  //     setTappedImage(imageView);
  //     setIsImageViewerVisible(true);
  //   }
  // };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then((image) => {
        setImage(Platform.OS === "ios" ? image.sourceURL : image.path);
        // props.setProfilePicture(
        //   Platform.OS === "ios" ? image.sourceURL : image.path
        // );
      })
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"Browse Photos"}
        backPress={() => props.navigation.replace("BankLetter")}
      />

      <TouchableWithoutFeedback
        onPress={choosePhotoFromLibrary}
        style={{
          flex: 1,
          //width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            // justifyContent: "center",
            // alignItems: "center",
            width: "90%",
            height: Dimensions.get("window").height * 0.6,
            borderWidth: 4,
            borderColor: "gray",
            borderRadius: 12,
            alignSelf: "center",
            //backgroundColor: "white",
            marginTop: "10%",
          }}
        >
          {/* <SvgDocumentIcon
            height={Dimensions.get("window").height * 0.5}
            width={Dimensions.get("window").width}
            color={"gray"}
          /> */}
          <Image
            style={[styles.image]}
            source={{ uri: image }}
            resizeMode="cover"
            //onError={onImageError}
          />
        </View>
      </TouchableWithoutFeedback>

      <View
        style={{
          //flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <SingleButton
          text={"Use photo"}
          btnPressed={() => props.navigation.replace("UsePhoto")}
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

export default BrowsePhotos;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
