import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import tw from 'tailwind-react-native-classnames';
import {getCurrentLocation, locationPermission} from '../Utils/locationHelper';
import mapStyle from '../Screens/MapScreen/styles';
import mapStyle2 from '../Screens/MapScreen/styles2';
//import DeviceInfo from 'react-native-device-info';
import {useIsEmulator} from 'react-native-device-info';

import {GOOGLE_MAPS_APIKEY} from '@env';

import {useSelector, useDispatch} from 'react-redux';
import {setUserData, selectUserData} from '../redux/slices/UserInfoSlice';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 31.552094953842936;
const LONGITUDE = 74.34618461877108;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = props => {
  const {result} = useIsEmulator();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef();

  console.log('Device Result', result);

  useEffect(() => {
    locationPermission()
      .then(res => {
        getCurrentLocation()
          .then(location => {
            if (location) {
              setLatitude(location.latitude);
              setLongitude(location.longitude);

              dispatch(
                setUserData({
                  driverLocation: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  },
                }),
              );

              setLoading(false);
            }
          })
          .catch(err => {
            console.log('Location not available', err);
            //for simulator
            dispatch(
              setUserData({
                driverLocation: {
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                },
              }),
            );
            setLoading(false);
          });
      })
      .catch(err => {
        console.log('CATCH ERROR', err);
      });

    console.log(latitude, longitude);
    //setLoading(false);
  }, [loading]);

  const getMapRegion = () => ({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const pickupMapRegion = () => ({
    latitude: userData?.pickupLocation?.latitude,
    longitude: userData?.pickupLocation?.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const dropoffMapRegion = () => ({
    latitude: userData?.dropoffLocation?.latitude,
    longitude: userData?.dropoffLocation?.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const simulatedGetMapRegion = () => ({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  //show on simulator
  if (loading === false && result === false) {
    return (
      <View style={{height: '100%'}}>
        {props.online === true ? (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={simulatedGetMapRegion()}
            customMapStyle={mapStyle}>
            {/* {latitude && longitude && (
              )} */}
            <Marker
              coordinate={simulatedGetMapRegion()}
              title="Marker"
              description={'I am a location Marker'}
              identifier="myMarker"
            />

            {userData?.pickupLocation?.latitude &&
              userData?.pickupLocation?.longitude && (
                <Marker
                  coordinate={pickupMapRegion()}
                  title="Marker"
                  description={'I am pcikup location Marker'}
                  identifier="pickup"
                />
              )}

            {userData?.dropoffLocation?.latitude &&
              userData?.dropoffLocation?.longitude && (
                <Marker
                  coordinate={dropoffMapRegion()}
                  title="Marker"
                  description={'I am dropoff location Marker'}
                  identifier="dropoff"
                />
              )}

            {userData?.pickupLocation && userData?.dropoffLocation && (
              <MapViewDirections
                origin={userData?.pickupLocation}
                destination={userData?.dropoffLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
                resetOnChange={false}
                onStart={params => {
                  console.log('onStart', params);
                }}
                onReady={result => {
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {top: 300, right: 40, bottom: 220, left: 40},
                  });
                }}
                onError={err => {
                  console.log('My MapViewDirections Error', err);
                }}
              />
            )}
          </MapView>
        ) : (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={simulatedGetMapRegion()}
            customMapStyle={mapStyle2}>
            {userData?.driverLocation?.latitude &&
              userData?.driverLocation?.longitude && (
                <Marker
                  coordinate={simulatedGetMapRegion()}
                  title="Marker"
                  description={'I am a location Marker'}
                  identifier="myMarker"
                />
              )}
          </MapView>
        )}
      </View>
    );
  }

  if (loading === false && result === true) {
    return (
      <View style={{height: '100%'}}>
        {props.online === true ? (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={getMapRegion()}
            customMapStyle={mapStyle}>
            {latitude && longitude && (
              <Marker
                coordinate={getMapRegion()}
                title="Marker"
                description={'I am a location Marker'}
                identifier="myMarker"
              />
            )}

            {userData?.pickupLocation?.latitude &&
              userData?.pickupLocation?.longitude && (
                <Marker
                  coordinate={pickupMapRegion()}
                  title="Marker"
                  description={'I am pcikup location Marker'}
                  identifier="pickup">
                  <Image
                    source={require('../assets/location-icon-pickup.png')}
                    style={{height: 35, width: 22}}
                  />
                </Marker>
              )}

            {userData?.dropoffLocation?.latitude &&
              userData?.dropoffLocation?.longitude && (
                <Marker
                  coordinate={dropoffMapRegion()}
                  title="Marker"
                  description={'I am dropoff location Marker'}
                  identifier="dropoff">
                  <Image
                    source={require('../assets/location-icon-drop.png')}
                    style={{height: 35, width: 22}}
                  />
                </Marker>
              )}

            {userData?.pickupLocation && userData?.dropoffLocation && (
              <MapViewDirections
                origin={userData?.pickupLocation}
                destination={userData?.dropoffLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
                resetOnChange={false}
                strokeColor="#64a4e1"
                strokeWidth={5}
                onStart={params => {
                  console.log('onStart', params);
                }}
                onReady={result => {
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {top: 300, right: 40, bottom: 220, left: 40},
                  });
                }}
                onError={err => {
                  console.log('My MapViewDirections Error', err);
                }}
              />
            )}
          </MapView>
        ) : (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={getMapRegion()}
            customMapStyle={mapStyle2}>
            {latitude && longitude && (
              <Marker
                coordinate={getMapRegion()}
                title="Marker"
                description={'I am a location Marker'}
                identifier="myMarker"
              />
            )}
          </MapView>
        )}
      </View>
    );
  }

  if (loading === true) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
