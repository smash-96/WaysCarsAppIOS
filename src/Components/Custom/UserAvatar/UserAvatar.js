import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import dynamicStyles from "./styles";
//import { Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";


import ImagePicker from "react-native-image-crop-picker";
import ImageView from "react-native-image-viewing";
import FastImage from "react-native-fast-image";

const Image = FastImage;

const UserAvatar = (props) => {
  const styles = dynamicStyles();
  const baseAvatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const [image, setImage] = useState(props.profilePic || baseAvatar || "");

  const originalProfilePictureURL = useRef(props.profilePic || "");
  if (originalProfilePictureURL.current !== (props.profilePic || "")) {
    originalProfilePictureURL.current = props.profilePic || "";
    setImage(props.profilePic || baseAvatar || "");
  }

  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [tappedImage, setTappedImage] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleProfilePictureClick = () => {
    if (image === baseAvatar && !props.drawer) {
      console.log("Image Selector Opened");
    } else if (image !== baseAvatar) {
      const imageView = [
        {
          uri: image,
        },
      ];
      setTappedImage(imageView);
      setIsImageViewerVisible(true);
    }
  };

  const onImageError = () => {
    console.log("Error loading profile photo at url " + image);
    setImage(baseAvatar);
  };

  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   })
  //     .then((image) => {
  //       setImage(Platform.OS === "ios" ? image.sourceURL : image.path);
  //       props.setProfilePicture(
  //         Platform.OS === "ios" ? image.sourceURL : image.path
  //       ); // calling the function from parent to set state in parent
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   })
  //     .then((image) => {
  //       setImage(Platform.OS === "ios" ? image.sourceURL : image.path);
  //       props.setProfilePicture(
  //         Platform.OS === "ios" ? image.sourceURL : image.path
  //       );
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const closeButton = () => (
  //   <TouchableOpacity
  //     style={styles.closeButton}
  //     onPress={() => setIsImageViewerVisible(false)}
  //   >
  //     <Image style={styles.closeIcon} source={appStyles.iconSet.close} />
  //   </TouchableOpacity>
  // );

  return (
    <>
      <View style={styles.imageBlock}>
        <TouchableHighlight
          style={styles.imageContainer}
          onPress={handleProfilePictureClick}
        >
          <Image
            style={[styles.image, { opacity: image !== baseAvatar ? 1 : 0.3 }]}
            source={{ uri: image }}
            resizeMode="cover"
            onError={onImageError}
          />
        </TouchableHighlight>

        <View></View>
        
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>

      </ScrollView> */}
      {/* <ImageView
          images={tappedImage}
          isVisible={isImageViewerVisible}
          onClose={() => setIsImageViewerVisible(false)}
          controls={{ close: closeButton }}
        /> */}

      <ImageView
        images={tappedImage}
        imageIndex={0}
        visible={isImageViewerVisible}
        onRequestClose={() => setIsImageViewerVisible(false)}
      />
    </>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({});
