import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = () => {
  const [minute, setminute] = useState(5);
  const [second, setsecond] = useState(59);
  useEffect(() => {
    const interval = setInterval(() => {
      if (second <= 0) {
        if (minute <= 0) {
          return;
        }
        setminute(minute - 1);
        setsecond(60);
      } else {
        setsecond(second - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [second, minute]);

  return (
    <View
      style={{
        marginTop: "7.5%",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {"0" + minute + ":"} {second >= 10 ? second : "0" + second}
        {/* {'0' + minute + ':' + second} */}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({});
