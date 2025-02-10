import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 15,
  },
});
import { ScrollView } from "react-native-gesture-handler";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./home";
import DoctorsScreen from "./doctors";
import ProfileScreen from "./profile";
import DoctorSelectionScreen from "@/components/doctors/DoctorList";
import DoctorCard from "@/components/doctors/DoctorCard";
import ExploreScreen from "./home";
import { LabTestsScreen } from "./labtests";
import TabTwoScreen from "./cosultNow";
import LoginScreen from "../login";
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Explore" component={HomeScreen} options={{
      tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />)
    }} />
    <Tab.Screen name="Lab Tests" component={LabTestsScreen} options={{
      tabBarIcon: ({ color, size }) => (<Ionicons name="flask-outline" size={size} color={color} />)
    }} />
    <Tab.Screen name="Consult Now" component={LoginScreen} options={{
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
    <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>MFine Clone</Text>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="cart-outline" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="notifications-outline" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
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
      <Drawer.Screen name="Consult Now" component={DoctorSelectionScreen} />
      <Drawer.Screen name="Book Health Packages" component={HomeScreen} />
      <Drawer.Screen name="Order Lab Test" component={HomeScreen} />
      <Drawer.Screen name="Order Medicines" component={HomeScreen} />
      <Drawer.Screen name="MFine Membership" component={HomeScreen} />
    </Drawer.Navigator>
  );
}


const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIcon: {
    padding: 4,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#fff',
  },
  serviceCard: {
    width: '33.33%',
    padding: 8,
  },
  serviceImageContainer: {
    position: 'relative',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
  },
  serviceTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    color: '#333',
  },
  discountBadge: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  newBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  cosmeticBanner: {
    backgroundColor: '#E3F2FD',
    flexDirection: 'row',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    padding: 16,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  bannerImage: {
    width: 120,
    height: 120,
  },
  healthChecksSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  viewAllButton: {
    color: '#007AFF',
    fontSize: 14,
  },
  healthCheckCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testsCount: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  healthCheckTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  originalPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#007AFF',
  },
});

