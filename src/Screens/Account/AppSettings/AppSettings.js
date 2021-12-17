import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setAppData, selectAppData} from '../../../redux/slices/AppStateSlice';
import Line from '../../../Components/Custom/Line';
import SvgCheckIcon from '../../../assets/check_icon.svg';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import NavigationIcon from '../../../assets/buttons/navigation.svg';
import NightModeIcon from '../../../assets/buttons/night-mode.svg';
import ExpandIcon from '../../../assets/expand.svg';
import RetractIcon from '../../../assets/retract.svg';
import TickIcon from '../../../assets/buttons/checked-tick.svg';
import BlankTickIcon from '../../../assets/buttons/unchecked-tick.svg';
import ScreenHeader from '../../../Components/Custom/ScreenHeader';

const ExpandableComponent = ({index, item, onClickFunction, setSubValues}) => {
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 40,
          paddingRight: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {item.category_name === 'Navigation' ? (
            <NavigationIcon />
          ) : (
            <NightModeIcon />
          )}
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 12,
            }}>
            {item.category_name}
          </Text>
        </View>

        <View>{item.isExpanded ? <RetractIcon /> : <ExpandIcon />}</View>
      </TouchableOpacity>

      <View
        style={{
          paddingLeft: 12,
          paddingRight: 12,
        }}>
        <Line
          lineColor={'#B2B4B8'}
          topSpace={Dimensions.get('screen').height * 0.02}
          bottomSpace={Dimensions.get('screen').height * 0.022}
        />
      </View>

      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item?.subcategory?.map((value, key) => {
          // console.log("SUB ITEM", value);
          return (
            <View key={key}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 66,
                  paddingRight: 40,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: value.selected ? 'black' : '#ADADAD',
                  }}>
                  {value.val}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSubValues(index, key)}>
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
                  }}>
                  <Line
                    lineColor={'#D2D2D2'}
                    topSpace={Dimensions.get('screen').height * 0.021}
                    bottomSpace={Dimensions.get('screen').height * 0.021}
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

const AppSettings = props => {
  const dispatch = useDispatch();
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [nightModePressed, setNightModePressed] = useState(false);
  const [gmapsPressed, setGmapsPressed] = useState(true);
  const [wazePressed, setWazePressed] = useState(false);
  const appData = useSelector(selectAppData);

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false),
    );
    setListDataSource(array);
  };

  const setSubValues = (index, key) => {
    const array = [...listDataSource];

    console.log('BEFORE ARRAY', array[1].subcategory);
    // array[index].subcategory.map(
    //   (value, placeindex) => {
    //     if (placeindex === key) {
    //       console.log('PLACEHOLDER AND KEY1', placeindex, key);
    //       array[index].subcategory[key]['selected'] =
    //         !array[index].subcategory[key]['selected'];
    //     } else {
    //       console.log('PLACEHOLDER AND KEY2', placeindex, key);
    //       if (array[index].subcategory[key]['selected']){
    //         array[index].subcategory[key]['selected'] =
    //         !array[index].subcategory[key]['selected'];
    //       }
    //       //array[index].subcategory[key]['selected'] = false;
    //     }
    //   },
    //   // placeindex === key
    //   //   ? (array[index].subcategory[key]["selected"] =
    //   //       !array[index].subcategory[key]["selected"])
    //   //   : (array[index].subcategory[key]["selected"] = false)
    // );
    console.log('AFTER ARRAY', array[1].subcategory);
    // setListDataSource(updatedArray);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
      }}>
      <ScreenHeader
        title={'App settings'}
        backPress={() => props.navigation.goBack()}
      />

      <View
        style={{
          marginTop: Dimensions.get('window').height * 0.1,
        }}>
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
    </View>
  );
};

export default AppSettings;

const CONTENT = [
  {
    isExpanded: true,
    category_name: 'Navigation',
    subcategory: [
      {id: 1, val: 'Google Maps', selected: true},
      {id: 2, val: 'Waze', selected: false},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Night mode',
    subcategory: [
      {id: 1, val: 'Auto', selected: false},
      {id: 2, val: 'Off', selected: true},
      {id: 3, val: 'Always on', selected: false},
    ],
  },
];
