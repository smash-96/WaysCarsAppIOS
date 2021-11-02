import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  Dimensions,
  Animated,
  Easing,
  SafeAreaView,
} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import Map from '../../Components/Map';
import TNActivityIndicator from '../../Components/TNActivityIndicator/TNActivityIndicator';
import Banner from '../../Components/Popups/Banner';
import GetJob from '../../Components/Popups/GetJob';
import Pickup from '../../Components/Popups/Pickup';
import Confirmed from '../../Components/Popups/Confirmed';
import Reached from '../../Components/Popups/Reached';
import JobDetails from '../JobDetails/JobDetails';
import Help from '../Help/Help';
import Cancel from '../Cancel/Cancel';
import SvgInfoIcon from '../../assets/information-button.svg';
import ConfirmedUp from '../../Components/Popups/ConfirmedUp';
import Rating from '../../Components/Popups/Rating';
import LastJob from '../../Components/Popups/LastJob';
import {useSelector, useDispatch} from 'react-redux';
import {setUserData, selectUserData} from '../../redux/slices/UserInfoSlice';
import {setAppData, selectAppData} from '../../redux/slices/AppStateSlice';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 31.552094953842936;
const LONGITUDE = 74.34618461877108;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapScreen = props => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const appData = useSelector(selectAppData);
  const {colors} = useTheme();

  //const [appData?.online, setOnline] = useState(false); // Make this global
  const [loading, setLoading] = useState(false);
  //const [modalOpen, setModalOpen] = useState(false); // Make this global
  //const [drawerOpen, setDrawerOpen] = useState(false);
  const [getJobModal, setGetJobModal] = useState(false);
  const [jobDetailsModel, setJobDetailsModel] = useState(false); //screen-modal
  const [helpModel, setHelpModal] = useState(false); //screen-modal
  const [cancelModel, setCancelModal] = useState(false); //screen-modal
  const [jobAcceptedView, setJobAcceptedView] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [upArrow, setUpArrow] = useState(false);
  const [driving, setDriving] = useState(false);
  const [reachedView, setReachedView] = useState(false);
  const [startTrip, setStartTrip] = useState(false);
  const [endTrip, setEndTrip] = useState(false);
  const [lastJob, setLastJob] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  const animated = useRef(new Animated.Value(0));

  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  const rotate = animated.current.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  const rotateOpposit = animated.current.interpolate({
    inputRange,
    outputRange,
  });

  const transform = [{rotate: rotate}];
  const transform1 = [{rotate: rotateOpposit}];

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    animated.current.setValue(0);
    Animated.loop(
      Animated.timing(animated.current, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };

  const modalFunc = async () => {
    //setModalOpen(false);

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (appData?.online) {
      setGetJobModal(false);
      setJobAcceptedView(false);
      setConfirmed(false);
    }
    dispatch(
      setAppData({
        ...appData,
        modalOpen: false,
        online: !appData?.online,
      }),
    );

    setLoading(false);
  };

  const bannerMenu = async () => {
    dispatch(
      setAppData({
        ...appData,
        modalOpen: false,
      }),
    );
    props.navigation.toggleDrawer();
  };

  const getJobFunc = async () => {
    setGetJobModal(false);

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);

    setJobAcceptedView(true);
    setConfirmed(true);
  };

  const jobDetailFunc = async () => {
    setJobDetailsModel(!jobDetailsModel);
  };
  const helpFunc = async () => {
    setHelpModal(!helpModel);
  };
  const upArrowFunc = async () => {
    setUpArrow(!upArrow);
  };
  const endTripFunc = async () => {
    setGetJobModal(false);
    setJobAcceptedView(false);
    setConfirmed(false);
    setUpArrow(false);
    setDriving(false);
    setStartTrip(false);

    dispatch(
      setUserData({
        ...userData,
        pickupLocation: null,

        dropoffLocation: null,
      }),
    );

    setEndTrip(true);
  };

  const finishRide = async () => {
    setJobDetailsModel(false);
    setHelpModal(false);
    setCancelModal(false);
    setGetJobModal(false);
    setJobAcceptedView(false);
    setConfirmed(false);
    setUpArrow(false);
    setDriving(false);
    setStartTrip(false);
    setEndTrip(false);
    setLastJob(false);
    dispatch(setUserData(null));
  };

  const navigate = () => {
    dispatch(
      setUserData({
        ...userData,
        pickupLocation: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },

        dropoffLocation: {
          latitude: 31.56192,
          longitude: 74.34808,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      }),
    );

    setDriving(true);
  };
  return (
    <SafeAreaView>
      <View>
        <Modal transparent={true} visible={appData?.modalOpen}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Banner
              online={appData?.online}
              modalFunc={modalFunc}
              bannerMenu={bannerMenu}
              colors={colors}
            />
          </View>
        </Modal>

        <Modal visible={jobDetailsModel} animationType={'slide'}>
          <JobDetails
            jobDetailFunc={jobDetailFunc}
            helpFunc={helpFunc}
            startTrip={startTrip}
            colors={colors}
          />
        </Modal>

        <Modal visible={helpModel} animationType={'slide'}>
          <Help
            helpFunc={helpFunc}
            jobDetailFunc={jobDetailFunc}
            colors={colors}
          />
        </Modal>

        <Modal visible={cancelModel} animationType={'slide'}>
          <Cancel
            setCancelModal={setCancelModal}
            finishRide={finishRide}
            colors={colors}
          />
        </Modal>

        <View style={tw`h-full`}>
          <Map online={appData?.online} />
        </View>

        {/* Get job Modal */}
        {appData?.online && getJobModal === true && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '34%',
              top: '33%',
            }}>
            <GetJob getJobFunc={getJobFunc} colors={colors} />
          </View>
        )}

        {appData?.online && (jobAcceptedView === true || startTrip === true) && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '25%',
              //padding: 65,
            }}>
            <Pickup
              navigate={navigate}
              startTrip={startTrip}
              setCancelModal={setCancelModal}
              colors={colors}
            />
          </View>
        )}

        {appData?.online && (confirmed === true || lastJob === true) && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '10%',
              bottom: 6,
            }}>
            <Confirmed
              driving={driving}
              reachedView={reachedView}
              startTrip={startTrip}
              jobDetailFunc={jobDetailFunc}
              upArrowFunc={upArrowFunc}
              lastJob={lastJob}
              timerEnded={timerEnded}
              colors={colors}
            />
          </View>
        )}

        {appData?.online && upArrow === true && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '27%',
              bottom: 0,
            }}>
            <ConfirmedUp
              startTrip={startTrip}
              jobDetailFunc={jobDetailFunc}
              upArrowFunc={upArrowFunc}
              setStartTrip={setStartTrip}
              setReachedView={setReachedView}
              endTripFunc={endTripFunc}
              colors={colors}
            />
          </View>
        )}

        {appData?.online && reachedView === true && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '25%',
              //padding: 65,
            }}>
            <Reached setCancelModal={setCancelModal} colors={colors} />
          </View>
        )}

        {appData?.online && endTrip === true && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '25%',
              bottom: 0,
            }}>
            <Rating
              setLastJob={setLastJob}
              setEndTrip={setEndTrip}
              colors={colors}
            />
          </View>
        )}

        {appData?.online && lastJob === true && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '25%',
            }}>
            <LastJob
              finishRide={finishRide}
              timerEnded={timerEnded}
              colors={colors}
            />
          </View>
        )}

        {jobAcceptedView === false && endTrip === false && lastJob === false && (
          <>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => props.navigation.toggleDrawer()}
              disabled={jobAcceptedView}>
              <Icon name="menu" size={30} />
            </TouchableOpacity>

            <View
              style={{
                position: 'absolute',
                top: 28,
                right: 0,
                left: 0,
                //bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => console.log('Info Button Pressed')}
                disabled={jobAcceptedView}>
                <SvgInfoIcon height={54} width={54} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => props.navigation.navigate('ActiveJobs')}>
              <View>
                <Text style={styles.btn2Text}>Active Jobs</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

        {jobAcceptedView === false && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 300,
              right: 20,
            }}
            onPress={() => {
              if (appData?.online) {
                setGetJobModal(true);

                // setReachedView(true);
                // setConfirmed(true);
              }
              //props.navigation.navigate("Help");
            }}>
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/918/46/png-transparent-pegman-google-maps-google-street-view-google-goggles-google-thumbnail.png',
              }}
              style={{height: 60, width: 30}}
            />
          </TouchableOpacity>
        )}

        {driving && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 300,
              right: 20,
              backgroundColor: 'lightgreen',
            }}
            onPress={() => {
              if (appData?.online) {
                //setJobAcceptedView(false);
                setReachedView(true);
              }
            }}>
            <Image
              source={{
                uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-c2a5a289f83212124d5d2925e62afb8a.png',
              }}
              style={{height: 60, width: 60}}
            />
          </TouchableOpacity>
        )}

        {jobAcceptedView === false && (
          <>
            {appData?.online === true ? (
              <View
                style={[
                  styles.button,
                  {
                    backgroundColor: 'rgba(0, 0, 255, 0.4)',
                    //backgroundColor: "lightblue",
                    height:
                      jobAcceptedView === true ||
                      endTrip === true ||
                      lastJob === true
                        ? '1%'
                        : '10%',
                  },
                ]}
                activeOpacity={0.8}
                //onPress={() => setModalOpen(true)}
                // disabled={
                //   jobAcceptedView === true || endTrip === true || lastJob === true
                // }
              >
                {jobAcceptedView === false &&
                  endTrip === false &&
                  lastJob === false && <Text style={styles.text}>Online</Text>}
              </View>
            ) : (
              <>
                <View
                  style={[
                    styles.button,
                    {
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      height:
                        jobAcceptedView === true ||
                        endTrip === true ||
                        lastJob === true
                          ? '2%'
                          : '10%',
                    },
                  ]}
                  activeOpacity={0.8}
                  // onPress={() => setModalOpen(true)}
                  // disabled={
                  //   jobAcceptedView === true || endTrip === true || lastJob === true
                  // }
                >
                  {jobAcceptedView === false &&
                    endTrip === false &&
                    lastJob === false && (
                      <Text style={styles.text}>Offline</Text>
                    )}
                </View>
              </>
            )}
          </>
        )}
        {loading && <TNActivityIndicator />}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  menuButton: {
    position: 'absolute',
    top: 28,
    right: 10,
    padding: 10,
    backgroundColor: 'rgba(243, 244, 246, 100)',
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
    zIndex: 1,
  },
  button2: {
    position: 'absolute',
    top: 28,
    left: 10,
    backgroundColor: 'rgba(243, 244, 246, 100)',
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
  },
  btn2Text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    top: 6,
  },

  item: {
    position: 'absolute',
    width: 100,
    height: 200, // this is the diameter of circle
  },
  dot: {
    width: '100%',
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
