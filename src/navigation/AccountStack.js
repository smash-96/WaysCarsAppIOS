import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../Screens/Account/Account";
import MyPayment from "../Screens/Account/MyPayment/MyPayment";
import AppSettings from "../Screens/Account/AppSettings/AppSettings";
import BankLetter from "../Screens/Account/MyPayment/BankLetter/BankLetter";
import PaymentMethod from "../Screens/Account/MyPayment/PaymentMethod/PaymentMethod";
import CodeVerification from "../Screens/Account/MyPayment/CodeVerfication/CodeVerification";
import AccountDetails from "../Screens/Account/MyPayment/BankAccountDetails/AccountDetails";
import BrowsePhotos from "../Screens/Account/MyPayment/BankLetter/BrowsePhoto/BrowsePhotos";
import UsePhoto from "../Screens/Account/MyPayment/BankLetter/UsePhoto/UsePhoto";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Account"}>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyPayment"
        component={MyPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppSettings"
        component={AppSettings}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BankLetter"
        component={BankLetter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowsePhotos"
        component={BrowsePhotos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UsePhoto"
        component={UsePhoto}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CodeVerification"
        component={CodeVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
