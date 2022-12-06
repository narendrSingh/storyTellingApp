import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import { StyleSheet } from 'react-native-web';
 import { RFValue } from 'react-native-responsive-fontsize';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

const BottomTabNavigator = ()=>{
    return (
        <Tab.Navigator
          labeled={false}
          barStyle={styles.bottomTabStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Feed") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Create Story") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              }
              return (
                <Ionicons
                  name={iconName}
                  size={RFValue(25)}
                  color={color}
                  style={styles.icons}
                />
              );
            }
          })}
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
        >
          <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
          <Tab.Screen name="Create Story" component={CreateStory} options={{headerShown:false}}/>
        </Tab.Navigator>
      );
    };    
const styles=StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:"#2f345d",
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRghtRadius:30,
        overflow:'hidden',
        position:"absolute",
    },
    icons:{
        width:RFValue(30),
        height:RFValue(30)
    }
})
