import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const menu = [
    {
      id: 0,
      name: "Help Center",
      icon: (
        <MaterialCommunityIcons
          name="comment-multiple"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
    },

    {
      id: 1,
      icon: (
        <MaterialCommunityIcons
          name="clipboard-text"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "My bookings",
    },
    {
      id: 2,
      icon: (
        <Ionicons
          name="location-sharp"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "Manage Addresses",
    },
    {
      id: 3,
      icon: (
        <MaterialCommunityIcons
          name="information"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "About OW Plus Company",
    },
    {
      id: 4,
      icon: (
        <Ionicons
          name="md-pricetag"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "Refer & Earn",
    },
    {
      id: 5,
      icon: (
        <Entypo
          name="share"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "Share",
    },
    {
      id: 6,
      icon: (
        <Ionicons
          name="star"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "My Rating",
    },
    {
      id: 7,
      icon: (
        <Entypo
          name="wallet"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "My Wallet",
    },
    {
      id: 8,
      icon: (
        <MaterialCommunityIcons
          name="logout"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
        />
      ),
      name: "Logout",
      press:handleLogout
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={{ marginTop: 10 }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
              gap: 3,
            }}
            onPress={item.name=="Logout" ? handleLogout:null}
          >
            {item.icon}
            <Text style={{ fontSize: 17 }}>{item.name}</Text>
          </Pressable>
        </View>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 6,
          }}
        />
      </>
    );
  };

  const handleLogout = () => {
    auth.signOut();
    navigation.replace("Login");
  };
  return (
    <>
      <SafeAreaView style={{ marginTop: 30 }}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center" }}>
            <FontAwesome name="user" size={54} color="gray" />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 18 }}
            >
              John Doe
            </Text>
          </View>
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <FlatList
        data={menu}
        renderItem={renderItem}
        scrollEnabled
        keyExtractor={(item) => item.id}
        onRefresh={() => console.log("refreshing")}
        refreshing={false}
      />
    </>
  );
};

export default ProfileScreen;
