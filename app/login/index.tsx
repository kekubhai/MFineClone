import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Colors from '@/constants/Colors'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function LoginScreen ()  {
  const router=useRouter()
  return (
    <View >
   <View style={{
    display:'flex',
    alignItems:'center',
    marginTop:40,
   }}>
  
   </View>
   <View style={{
    padding:25,
    backgroundColor:'white',
    height: '100%',
   }}>
    <Text style={{
        
         fontWeight:"bold",
         textAlign:"center",
    }}> Stay on Track,Stay Healthy ! </Text>
    <Text  style={{
      color:'white',
      textAlign:'center',
      marginTop:70,
    }}>Track Your meds, Take care of yourself</Text>
<TouchableOpacity style={styles?.button}>
  <Text onPress={()=>router.push('/login/signin')} style={{
    textAlign:'center',
    fontSize:16,
    color:'black'
  }} >Continue</Text>
 
</TouchableOpacity>
<Text style={{
  marginTop:2,
  color:'white'
}}>Note: By on clicking on Continue ,you will agree to our agreements</Text>
   </View>
    </View>
  )
}

const styles=StyleSheet.create({
  image:{
    width:210,
    height:450,
    borderRadius:32,
    
  },
  button:{
    padding:15,
    backgroundColor:'white',
    borderRadius:99,
    marginTop:20,
  }

})
