import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { auth, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider } from "../../config/firebase";
import { signInWithCredential } from "firebase/auth";
import { Icon } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [otp, setOtp] = useState("");

  
  const sendOtp = async () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      setVerificationId(confirmation.verificationId);
      Alert.alert("OTP Sent", "Check your phone for the OTP.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP.");
    }
  };

  
  const verifyOtp = async () => {
    if (!verificationId) return Alert.alert("Error", "No OTP request found.");
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential); 
      Alert.alert("Success", "Logged in successfully!");
    } catch (error) {
      console.error("OTP Verification Failed:", error);
      Alert.alert("Error", "Invalid OTP.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <MaterialCommunityIcons name="chat" size={44} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mfine Clone</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Sign In with Phone</Text>
      <TouchableOpacity style={{ backgroundColor: "white", padding: 10, marginBottom: 10 }}>

        <TextInput
          placeholder="Enter Phone Number (+91XXXXXXXXXX)"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={{ borderWidth: 1, padding: 10, marginBottom: 10, color: 'black' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={sendOtp} style={{ backgroundColor: "white", padding: 10 }}>
        <Text style={{ color: "black", textAlign: "center" }}>Send OTP</Text>
      </TouchableOpacity>

      {verificationId && (
        <>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
          />
          <TouchableOpacity onPress={verifyOtp} style={{ backgroundColor: "green", padding: 10, marginTop: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
      <View id="recaptcha-container"></View>
    </View>
  );
};

export default LoginScreen;
