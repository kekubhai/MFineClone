import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DoctorsScreen from "./doctors";
import ExploreScreen from "./home";

export const ProfileScreen = () => {
  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#F5F5F5" }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={{ uri: "https://via.placeholder.com/100" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>John Doe</Text>
        <Text style={{ color: "gray" }}>johndoe@example.com</Text>
      </View>
      <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Personal Information</Text>
        <Text style={{ color: "gray", marginTop: 5 }}>Phone: +91 9876543210</Text>
        <Text style={{ color: "gray", marginTop: 5 }}>Gender: Male</Text>
        <Text style={{ color: "gray", marginTop: 5 }}>Age: 29</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: "#FF7043", padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "#D32F2F", padding: 10, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const LabTestsScreen = () => {
  const labTests = [
    { name: "Complete Blood Count (CBC)", price: "₹500" },
    { name: "Lipid Profile", price: "₹800" },
    { name: "Liver Function Test (LFT)", price: "₹900" },
    { name: "Kidney Function Test (KFT)", price: "₹850" },
    { name: "Thyroid Function Test (TFT)", price: "₹700" },
    { name: "Blood Glucose Test", price: "₹400" },
    { name: "Vitamin D Test", price: "₹1200" },
    { name: "Iron Studies", price: "₹1000" },
    { name: "Electrolyte Panel", price: "₹750" },
    { name: "Urine Routine Test", price: "₹300" },
    { name: "Hemoglobin A1c (HbA1c)", price: "₹600" },
    { name: "Calcium Test", price: "₹550" },
  ];

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "#F5F5F5" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Lab Tests Available</Text>
      {labTests.map((test, index) => (
        <View key={index} style={{ backgroundColor: "#fff", padding: 10, margin: 10, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{test.name}</Text>
          <Text style={{ color: "gray" }}>{test.price}</Text>
          <TouchableOpacity style={{ backgroundColor: "#FF7043", padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={ExploreScreen} options={{
      tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={size} color={color} />)
    }} />
    <Tab.Screen name="Doctors" component={DoctorsScreen} options={{
      tabBarIcon: ({ color, size }) => (<Ionicons name="medkit-outline" size={size} color={color} />)
    }} />
    <Tab.Screen name="Lab Tests" component={LabTestsScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialIcons name="science" size={size} color={color} />)
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialIcons name="person-outline" size={size} color={color} />)
    }} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MFine Home" component={MainTabs} />
      <Drawer.Screen name="Consult Now" component={DoctorsScreen} />
      <Drawer.Screen name="Lab Tests" component={LabTestsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
