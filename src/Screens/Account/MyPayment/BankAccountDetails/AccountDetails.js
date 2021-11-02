import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import ScreenHeader from "../../../../Components/Custom/ScreenHeader";
import SingleButton from "../../../../Components/Custom/SingleButton";
import BankList from "../../../../Components/BankList";

const formSchema = yup.object({
  name: yup.string().required(),
  date: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  postcode: yup.string().required(),
  bank: yup.string().required(),
  sortcode: yup.string().required(),
  accountnumber: yup.string().required(),
});

const placeHolders = {
  name: "John Carter",
  date: "5th November 1900",
  address: "Address",
  city: "City",
  postcode: "Post Code",
  bank: "Bank",
  sortcode: "Sort Code",
  accountnumber: "Account Number",
};
const AccountDetails = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bankVal, setBankVal] = useState(null);
  const formSubmit = () => {
    console.log("Form Submitted!");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Modal transparent={true} visible={modalOpen}>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "50%",
            top: Dimensions.get("window").height * 0.3,
          }}
        >
          <BankList setModalOpen={setModalOpen} setBankVal={setBankVal} />
        </View>
      </Modal>

      <KeyboardAvoidingView>
        <ScrollView>
          <ScreenHeader
            title={"Bank account details"}
            backPress={() => props.navigation.goBack()}
          />
          <View style={styles.container}>
            <Formik
              initialValues={{
                name: "",
                date: "",
                address: "",
                city: "",
                postcode: "",
                bank: "",
                sortcode: "",
                accountnumber: "",
              }}
              //validationSchema={formSchema}
              onSubmit={formSubmit}
            >
              {(formikProps) => (
                <>
                  {[
                    "name",
                    "date",
                    "address",
                    "city",
                    "postcode",
                    "bank",
                    "sortcode",
                    "accountnumber",
                  ].map((element, i) => {
                    return element === "bank" ? (
                      <TouchableOpacity
                        key={i}
                        onPress={() => setModalOpen(true)}
                        activeOpacity={1}
                      >
                        <View style={styles.txtInput}>
                          <Text
                            style={{
                              backgroundColor: "#ffffff",
                              color: bankVal !== null ? "black" : "gray",
                              fontSize: 19,
                            }}
                          >
                            {bankVal !== null ? bankVal : placeHolders[element]}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TextInput
                        key={i}
                        style={styles.txtInput}
                        placeholder={placeHolders[element]}
                        placeholderTextColor="gray"
                        onChangeText={formikProps.handleChange(element)}
                        onBlur={formikProps.handleBlur(element)}
                        //value={formikProps.values.name}
                        keyboardType="default"
                      />
                    );
                  })}

                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: Dimensions.get("window").height * 0.04,
                    }}
                  >
                    <SingleButton
                      text={"Submit"}
                      btnPressed={formikProps.handleSubmit}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  txtInput: {
    left: 20,
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1.4,
    width: "80%",
    paddingVertical: 14,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 19,
    paddingLeft: "2%",
  },
});
