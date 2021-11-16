import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import { COLORS, FONTS } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import logo from "../assets/images/logo.jpg";

export default function Login({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  let opacityValue = new Animated.Value(0)
  let imageValue = new Animated.Value(0)
  let heightValue = new Animated.Value(0)

  Animated.timing(
    opacityValue,
    {
      toValue: 1,
      duration: 500,
      delay: 200,
      easing: Easing.linear,
      useNativeDriver: true
    }
  ).start();

  Animated.timing(
    imageValue,
    {
      toValue: 1,
      duration: 300,
      delay: 850,
      easing: Easing.linear,
      useNativeDriver: true
    }
  ).start();

  Animated.timing(
    heightValue,
    {
      toValue: 1,
      duration: 350,
      delay: 50,
      easing: Easing.linear,
      useNativeDriver: true
    }
  ).start();

  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const image = imageValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const height = heightValue.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -150],
  })

  return (
    <View style={{ flex: 1, backgroundColor: "#12171b" }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.Image
          source={logo}
          style={{
            height: 400,
            marginTop: 40,
            opacity: image,
          }}
          resizeMode="contain"
        />
      </View>
      <Animated.View
        style={[
          styles.body,
          {
            opacity: opacity,
            transform: [{
              translateY: height,
            }],
          }
        ]}
      >
        <Text style={{ ...FONTS.h1 }}>Nike Store</Text>
        <View style={{ marginVertical: 40 }}>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Your email id"
              placeholderTextColor={COLORS.gray}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={COLORS.gray}
                secureTextEntry={securePassword}
              />
              <FontAwesome
                name={securePassword ? "eye-slash" : "eye"}
                size={24}
                color="black"
                style={{
                  position: "absolute",
                  top: "25%",
                  right: 0,
                }}
                onPress={() => {
                  setSecurePassword(!securePassword);
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row-reverse", marginTop: 10 }}
          >
            <Text style={styles.forgetPasswordText}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 40,
  },
  input: {
    marginVertical: 10,
    fontFamily: "CarmenSans-SemiBold",
    fontSize: 18,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  inputLabel: {
    fontFamily: "CarmenSans-SemiBold",
    fontSize: 20,
  },
  forgetPasswordText: {
    fontFamily: "CarmenSans-Regular",
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.black,
    marginVertical: 10,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "CocoGothic-Bold",
    fontSize: 20,
  },
});
