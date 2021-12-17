import React, {useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

import SvgGreenLocation from '../../assets/buttons/green-location-icon.svg';
import SvgRedLocation from '../../assets/buttons/red-location-icon.svg';
import SvgUserIcon from '../../assets/user-profile-image.svg';
import GreenCircleIcon from '../../assets/green-circle.svg';
import RedCircleIcon from '../../assets/red-circle.svg';
import DottedDownArrowIcon from '../../assets/down-arrow-line.svg';
import DottedRightArrowIcon from '../../assets/right-arrow-line.svg';
import SmallSquareIcon from '../../assets/square.svg';
import PicStarIcon from '../../assets/pic-star.svg';

const CIRCLE_LENGTH = 350; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const GetJob = props => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    stroke: `rgba(255, 0, 0, ${progress.value > 0.1 ? progress.value : 0.1})`,
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  useEffect(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {
      duration: 20000,
    });
  }, []);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            bottom: 20,
          }}>
          

          <View
            style={{
              flex: 1,
              //paddingRight: 10,
            }}>
            <Text
              style={{
                // position: "absolute",
                // top: 0,
                right: 6,
                fontSize: 15,
                color: 'black',
                fontWeight: '400',
                //paddingRight: 10,
              }}>
              Executive
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              //paddingRight: 30,
            }}>
            <Text style={styles.modalText}>$340.00</Text>
          </View>

          <View
            style={{
              flex: 1,
              //paddingRight: 30,
            }}
          />

          {/* <View
            style={{
              height: 3.5,
              width: "30%",
              backgroundColor: "#000",
              opacity: 0.2,
              top: -20,
            }}
          /> */}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            //alignItems: "center",
            alignContent: 'center',
          }}>
          <View
            style={{
              left: 1,
              bottom: 2,
              //flex: 1,
              // position: "absolute",
              // justifyContent: "center",
              // alignItems: "center",
            }}>
            <SmallSquareIcon />
          </View>
          <View
          // style={{
          //   flex: 1,
          //   // position: "absolute",
          //   // justifyContent: "center",
          //   // alignItems: "center",
          // }}
          >
            <DottedDownArrowIcon />
          </View>

          <Text
            style={{
              right: 16,
              top: 10,
              fontWeight: '400',
            }}>
            12 min
          </Text>
        </View>

        <View style={styles.imageBlock}>
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View> */}
          <Svg
            style={{
              position: 'absolute',
              transform: [{rotate: '270deg'}],
            }}
            // width={Dimensions.get('window').width * 0.38}
            // height={Dimensions.get('window').height * 0.38}
            width={1100}
            height={1100}
            viewBox={`-350 -350 800 800`}>
            <Circle cx="50" cy="50" r="50" strokeWidth="10" stroke="white" />
            <AnimatedCircle
              cx={50}
              cy={50}
              r={50}
              strokeWidth={10}
              strokeDasharray={CIRCLE_LENGTH}
              animatedProps={animatedProps}
              //strokeLinecap={'round'}
            />
          </Svg>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={props.getJobFunc}
            activeOpacity={0.9}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.image}>
                <SvgUserIcon width={50} height={50} />
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    right: 2,
                  }}>
                  <PicStarIcon />
                </View>

                <Text
                  style={{
                    color: '#040B25FC',
                    //fontFamily: "sans-serif-condensed",
                    fontSize: 14,
                    fontWeight: '400',
                    left: 2,
                  }}>
                  4.65
                </Text>
              </View> */}
              <Text
                style={{
                  textAlign: 'center',
                  color: '#040B25FC',
                  top: 10,
                }}>
                Marry
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: '5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                bottom: 4,
              }}>
              <SvgGreenLocation />
            </View>

            <Text
              style={{
                left: 8,
                fontWeight: '400',
              }}>
              WC1 A
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <DottedRightArrowIcon />
            <Text
              style={{
                left: 6,
                fontWeight: '400',
                fontSize: 14,
              }}>
              17 mls
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //left:6
            }}>
            <View
              style={{
                bottom: 4,
              }}>
              <SvgRedLocation />
            </View>

            <Text
              style={{
                left: 6,
                fontSize: 14,
                fontWeight: '400',
              }}>
              TW6
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetJob;

const styles = StyleSheet.create({
  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0707074D',
    height: '100%',

    //paddingTop: height / 3,
  },
  modalView: {
    top: Dimensions.get('window').height * 0.32,
    //alignItems: "center",
    width: 355,
    height: 250,
    //height: "100%",
    // backgroundColor: "#ece8f8",
    backgroundColor: '#F0F0FD',
    borderRadius: 3,
    padding: 25,
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
    //top: height / 3,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    //bottom: 20,
  },

  image: {
    //top: 10,
    alignItems: 'center',
  },
  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10%',
  },
  imageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    // backgroundColor: "#ece8f8",
    backgroundColor: '#F0F0FD',
    // elevation: 10,
    shadowColor: '#006',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    overflow: 'hidden',
  },

  item: {
    position: 'absolute',
    width: 100,
    height: 200, // this is the diameter of circle
  },
  dot: {
    width: '20%',
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
