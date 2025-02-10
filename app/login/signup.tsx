import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { auth, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider } from "../../config/firebase";
import { signInWithCredential } from "firebase/auth";

const SignupScreen: React.FC = () => {
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

  // Function to verify OTP and sign up user
  const verifyOtp = async () => {
    if (!verificationId) return Alert.alert("Error", "No OTP request found.");
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential); // ✅ Correct Firebase method
      Alert.alert("Success", "Account created successfully!");
    } catch (error) {
      console.error("OTP Verification Failed:", error);
      Alert.alert("Error", "Invalid OTP.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 ,backgroundColor:'white'}}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10,color:'white' }}>Sign Up with Phone</Text>
      <TextInput
        placeholder="Enter Phone Number (+91XXXXXXXXXX)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, color: "white" }}
      />
      <TouchableOpacity onPress={sendOtp} style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Send OTP</Text>
      </TouchableOpacity>

      {verificationId && (
        <>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            style={{ borderWidth: 1, padding: 10, marginTop: 10, borderRadius: 5 }}
          />
          <TouchableOpacity onPress={verifyOtp} style={{ backgroundColor: "green", padding: 10, marginTop: 10, borderRadius: 5 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Verify OTP & Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
      <View id="recaptcha-container"></View>
    </View>
  );
};

export default SignupScreen;
