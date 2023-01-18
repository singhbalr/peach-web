import React from "react";
import { useColorScheme } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { PRIVATESCREENS } from "@shared-constants";
import { palette } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import SearchScreen from "@screens/search/SearchScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();

const PrivateRoutes = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case PRIVATESCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case PRIVATESCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case PRIVATESCREENS.NOTIFICATION:
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case PRIVATESCREENS.PROFILE:
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.black : palette.white,
        },
      })}
    >
      <Tab.Screen name={PRIVATESCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={PRIVATESCREENS.SEARCH} component={SearchScreen} />
      <Tab.Screen
        name={PRIVATESCREENS.NOTIFICATION}
        component={NotificationScreen}
      />
      <Tab.Screen name={PRIVATESCREENS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default PrivateRoutes;
