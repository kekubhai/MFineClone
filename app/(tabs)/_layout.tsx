import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./home";
import DoctorsScreen from "./doctors";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Explore" component={HomeScreen} options={{
      tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />)
    }} />
    <Tab.Screen name="Lab Tests" component={DoctorsScreen} options={{
      tabBarIcon: ({ color, size }) => (<Ionicons name="flask-outline" size={size} color={color} />)
    }} />
    <Tab.Screen name="Consult Now" component={ProfileScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialIcons name="chat" size={size} color={color} />)
    }} />
    <Tab.Screen name="Medicines" component={HomeScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialIcons name="local-pharmacy" size={size} color={color} />)
    }} />
    <Tab.Screen name="My Orders" component={DoctorsScreen} options={{
      tabBarIcon: ({ color, size }) => (<Ionicons name="receipt-outline" size={size} color={color} />)
    }} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => (
  <>
  <View style={{ backgroundColor: 'lightskyblue', padding: 20, paddingTop: 50 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Ionicons name="person-circle-outline" size={40} color="white" />
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Arpit</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="add-circle-outline" size={30} color="white" />
          <Text style={{ color: 'white', fontSize: 12 }}>Mom</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="add-circle-outline" size={30} color="white" />
          <Text style={{ color: 'white', fontSize: 12 }}>Dad</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="add-circle-outline" size={30} color="white" />
          <Text style={{ color: 'white', fontSize: 12 }}>Wife</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="add-circle-outline" size={30} color="white" />
          <Text style={{ color: 'white', fontSize: 12 }}>Sister</Text>
        </View>
        
      </View>
      
    </View>
    <View style={{  }}>
          <Ionicons name="add-circle" size={30} color="white" />
          <Text style={{ color: 'white', fontSize: 12 }}>Add family</Text>
        </View>
  </View>
  <TouchableOpacity style={{ marginTop: 20, padding:20,borderWidth:20 }} onPress={() => navigation.navigate('Share')}>
      <Ionicons name='share-social-outline' size={24} color="white" />
      <Text style={{ color: 'white', fontSize: 16, }}>Share the App</Text>
    </TouchableOpacity>

    <ScrollView style={{ marginTop: 20 , padding: 20}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Mfine care Services</Text>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('MFine Home')}>
            <Ionicons name="home-outline" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Consult Now')}>
            <FontAwesome name="stethoscope" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Consult Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Book Health Packages')}>
            <MaterialIcons name="medical-services" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Book Health Packages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Order Lab Test')}>
            <FontAwesome5 name="microscope" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Order Lab Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Order Medicines')}>
            <MaterialCommunityIcons name="pill" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Order Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('MFine Membership')}>
            <Fontisto name="heartbeat" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>MFine Membership</Text>
          </TouchableOpacity>  
          <Text style={{color:'white',fontSize:20,marginTop:20,fontWeight:'bold'}}>Records</Text>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' ,}} onPress={() => navigation.navigate('MFine Home')}>
            <Ionicons name="bag-outline" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Consult Now')}>
          <MaterialCommunityIcons name="file-plus-outline" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Health files</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('Book Health Packages')}>
          <Ionicons name="receipt-outline" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{ color: 'white', fontSize: 16 }}>Invoices</Text>
          </TouchableOpacity>
        
        </ScrollView>
  </>
);export default function Layout() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="MFine Home" component={MainTabs} />
      <Drawer.Screen name="Consult Now" component={HomeScreen} />
      <Drawer.Screen name="Book Health Packages" component={HomeScreen} />
      <Drawer.Screen name="Order Lab Test" component={HomeScreen} />
      <Drawer.Screen name="Order Medicines" component={HomeScreen} />
      <Drawer.Screen name="MFine Membership" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
