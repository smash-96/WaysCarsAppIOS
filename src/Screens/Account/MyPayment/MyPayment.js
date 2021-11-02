import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import ScreenHeader from "../../../Components/Custom/ScreenHeader";
import SvgCheckIcon from "../../../assets/check_icon.svg";

const change = true;
const MyPayment = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenHeader
        title={"My Payment"}
        backPress={() => props.navigation.goBack()}
      />

      <TouchableOpacity
        onPress={() => console.log("Bank Button Pressed")}
        activeOpacity={0.8}
        style={{
          marginTop: Dimensions.get("window").height * 0.08,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "94%",
            height: 150,
            //borderWidth: 1.5,
            borderColor: "lightblue",
            alignSelf: "center",
            backgroundColor: "white",

            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          {change === true ? (
            <>
              {/* 1 */}
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000000DE",
                  }}
                >
                  Payment method
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#000000DE",
                    }}
                  >
                    Lloyds Bank
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000DE",
                    }}
                  >
                    ***567
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#000000DE",
                    }}
                  >
                    Updated
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000DE",
                    }}
                  >
                    21 Apr 2021
                  </Text>
                </View>
              </View>

              {/* 2 */}
              <View
                style={{
                  flex: 0.2,
                  flexDirection: "column",
                  paddingLeft: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "green",
                    }}
                  >
                    Valid
                  </Text>
                  <View>
                    <SvgCheckIcon width={30} height={30} />
                  </View>
                </View>
              </View>

              {/* 3 */}
              <View
                style={{
                  flex: 0.2,
                }}
              />
            </>
          ) : (
            <View
              style={{
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                No bank details added yet
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("BankLetter")}
        activeOpacity={0.8}
        style={{
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "94%",
            height: 150,
            //borderWidth: 1.5,
            borderColor: "lightblue",
            alignSelf: "center",
            backgroundColor: "white",

            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          {change === true ? (
            <>
              {/* 1 */}
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000000DE",
                  }}
                >
                  Bank Letter
                </Text>

                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "#000000DE",
                  }}
                >
                  Lloyds Bank
                </Text>

                <View
                  style={{
                    flex: 1,
                  }}
                />
              </View>

              {/* 2 */}
              <View
                style={{
                  flex: 0.2,
                  flexDirection: "column",
                  paddingLeft: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "green",
                    }}
                  >
                    Valid
                  </Text>
                  <View>
                    <SvgCheckIcon width={30} height={30} />
                  </View>
                </View>
              </View>

              {/* 3 */}
              <View
                style={{
                  flex: 0.2,
                }}
              />
            </>
          ) : (
            <View
              style={{
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Bank Letter
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          width: "94%",
          height: 100,
          borderWidth: 1,
          borderColor: "black",
          justifyContent: "space-between",
          alignSelf: "center",
          padding: 20,
          bottom: "3%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#000000DE",
            fontWeight: "bold",
          }}
        >
          {change === true ? "My Payment option" : "Add payment option"}
        </Text>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("PaymentMethod")}
        >
          <Icon name="plus" 
          //type="font-awesome-5" 
          size={40} color={"gray"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyPayment;

const styles = StyleSheet.create({});
