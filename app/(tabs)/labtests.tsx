import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DoctorsScreen from "./doctors";
import profile, { ProfileScreen } from "./profile";
import ExploreScreen from "./home";

export const LabTestsScreen = () => {
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

  const testimonials = [
    { name: "Ramesh Kumar", rating: 5, feedback: "Excellent service and accurate reports!" },
    { name: "Sneha Sharma", rating: 4, feedback: "Quick and reliable testing!" },
    { name: "Amit Verma", rating: 5, feedback: "Very professional and timely reports." },
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
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>User Testimonials</Text>
      {testimonials.map((testimonial, index) => (
        <View key={index} style={{ backgroundColor: "#fff", padding: 10, margin: 10, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{testimonial.name}</Text>
          <Text>{"⭐".repeat(testimonial.rating)}</Text>
          <Text style={{ color: "gray" }}>{testimonial.feedback}</Text>
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

