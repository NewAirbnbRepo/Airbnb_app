import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import  Colors  from '@/constants/Colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';
import  FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


const Layout = () => {
  return (

    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: 'mon-sb',
      }
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
        ),
      }} />
       <Tabs.Screen name='bookings' options={{
        tabBarLabel: 'Bookings',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='checkmark-circle-outline' color={color} size={32}/>
        ),
      }} />
      <Tabs.Screen name='Wishlist' options={{
        tabBarLabel: 'Wishlist',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name='heart' color={color} size={35}/>
        ),
      }} />
       <Tabs.Screen name='profile' options={{
        tabBarLabel: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name='user' color={color} size={36}/>
        ),
      }} />
      
    </Tabs>
  );
};


export default Layout;
