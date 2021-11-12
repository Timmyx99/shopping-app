import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar
} from "react-native";
import { COLORS } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import logo from "../assets/images/logo.jpg";

export default function Login({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "#12171b" }}>
    <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={logo}
          style={{ height: 400, marginTop: 40 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Log-in</Text>
        <View style={{ padding: 20 }}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "CocoGothic-Bold",
    fontSize: 40,
  },
  body: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
    margin: 10,
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
