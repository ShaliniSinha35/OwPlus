import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
  ImageBackground
} from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
const { width } = Dimensions.get("window");
import { Foundation } from "@expo/vector-icons";
import { Card } from "@rneui/themed";


const Home = () => {
  const images = [
    require("../assets/banner/b4.png"),
    require("../assets/banner/b3.png"),
    require("../assets/banner/b1.png"),
    require("../assets/appliance/a1.png"),
  ];

  const list = [
    {
      id: "0",
      image: require("../assets/banner/b1.png"),
      name: "Car Repair",
    },
    {
      id: "1",
      image: require("../assets/appliance/a1.png"),
      name: "AC Repair",
    },
    {
      id: "3",
      image: require("../assets/appliance/a2.png"),
      name: "Tap Repair",
    },
    {
      id: "4",
      image: require("../assets/appliance/a3.png"),
      name: "Chimney Repair",
    },
    {
      id: "5",
      image: require("../assets/appliance/a4.png"),
      name: "Washing Machine Repair",
    },
    {
      id: "6",
      image: require("../assets/appliance/a5.png"),
      name: "Refrigerator Repair",
    },
    {
      id: "7",
      image: require("../assets/appliance/a6.png"),
      name: "Water Purifier Repair",
    },
    {
      id: "8",
      image: require("../assets/appliance/a7.png"),
      name: "Microwave Repair",
    },
    {
      id: "9",
      image: require("../assets/appliance/a8.png"),
      name: "Television Repair",
    },
    {
      id: "10",
      image: require("../assets/appliance/a9.png"),
      name: "Geyser Repair",
    },
  ];

  const offers = [
    {
      id: "0",
      title: "Car Repair",
      offer: "72% off",
      image: require("../assets/banner/b5.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "1",
      title: "Car Repair",
      offer: "40%",
      image: require("../assets/banner/b5.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "2",
      title: "Car Repair",
      offer: "40%",
      image: require("../assets/banner/b5.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "3",
      title: "Car Repair",
      offer: "40%",
      image: require("../assets/banner/b5.png"),
      price: "Rs 100",
      rating: "4.8",
    },
  ];

  const quickService = [
    {
      id: "0",
      title: "AC Repair",
      offer: "72% off",
      image: require("../assets/banner/b7.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "1",
      title: "Tap Repair",
      offer: "40%",
      image: require("../assets/banner/b8.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "2",
      title: "AC Repair",
      offer: "40%",
      image: require("../assets/banner/b7.png"),
      price: "Rs 100",
      rating: "4.8",
    },
    {
      id: "3",
      title: "Tap Repair",
      offer: "40%",
      image: require("../assets/banner/b8.png"),
      price: "Rs 100",
      rating: "4.8",
    },
  ];

  const applianceRepair = [
    {
      id: "0",
      image: require("../assets/appliance/a1.png"),
      name: "Ac Service & Repair",
    },
    {
      id: "1",
      image: require("../assets/appliance/a2.png"),
      name: "Tap Repair",
    },
    {
      id: "3",
      image: require("../assets/appliance/a3.png"),
      name: "Chimney Repair",
    },
    {
      id: "4",
      image: require("../assets/appliance/a4.png"),
      name: "Washing Machine Repair",
    },
    {
      id: "5",
      image: require("../assets/appliance/a5.png"),
      name: "Refrigerator Repair",
    },
    {
      id: "6",
      image: require("../assets/appliance/a6.png"),
      name: "Water Purifier Repair",
    },
    {
      id: "7",
      image: require("../assets/appliance/a7.png"),
      name: "Microwave Repair",
    },
    {
      id: "8",
      image: require("../assets/appliance/a8.png"),
      name: "Television Repair",
    },
    {
      id: "9",
      image: require("../assets/appliance/a9.png"),
      name: "Geyser Repair",
    },
  ];

  const newService = [
    {
      id: "0",
      name: "Car Repair",
      image: require("../assets/banner/b5.png"),
      new: "yes",
    },
    {
      id: "1",
      image: require("../assets/appliance/a1.png"),
      name: "Ac Service & Repair",
      new: "yes",
    },
    {
      id: "2",
      image: require("../assets/appliance/a2.png"),
      name: "Tap Repair",
    },
    {
      id: "3",
      image: require("../assets/appliance/a3.png"),
      name: "Chimney Repair",
    },
    {
      id: "4",
      image: require("../assets/appliance/a4.png"),
      name: "Washing Machine Repair",
    },
    {
      id: "5",
      image: require("../assets/appliance/a5.png"),
      name: "Refrigerator Repair",
    },
    {
      id: "6",
      image: require("../assets/appliance/a6.png"),
      name: "Water Purifier Repair",
    },
    {
      id: "7",
      image: require("../assets/appliance/a7.png"),
      name: "Microwave Repair",
    },
    {
      id: "8",
      image: require("../assets/appliance/a8.png"),
      name: "Television Repair",
      new: "yes",
    },
    {
      id: "9",
      image: require("../assets/appliance/a9.png"),
      name: "Geyser Repair",
    },
  ];

  const DATA = [
    {
      coverImageUri: require("../assets/banner/b1.png"),
    },
    {
      coverImageUri: require("../assets/appliance/a1.png"),
    },
    {
      coverImageUri: require("../assets/appliance/a4.png"),
    },
    {
      coverImageUri: require("../assets/banner/b3.png"),
    },
    {
      coverImageUri: require("../assets/banner/b5.png"),
    },
 
  ];

  const banner2 = [
    {
      coverImageUri: require("../assets/banner/b10.png"),
    },
    {
      coverImageUri: require("../assets/banner/b11.png"),
    },
  ];

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView
        style={{
          paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: "white",
         
        }}
      >
        {/* logo */}
        <View
          style={{
            alignItems: "center",
            // flexDirection: "row",
            // justifyContent: "space-between",
            padding: 1,
          }}
        >
          <Image
            style={{ width: 160, height: 70 }}
            source={require("../assets/logo.jpg")}
          />
          {/* <View style={{ flexDirection: "row", marginHorizontal: 4, gap: 15 }}>
          
            <MaterialIcons name="logout" size={24} color="black" />
          </View> */}
        </View>

        {/* search */}
        <View
          style={{
            backgroundColor: "#00008b",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="black"
            />
            <TextInput placeholder="Search owPlus.in" />
          </Pressable>
          <Feather name="mic" size={24} color="#FEBE10" />
        </View>

        <ScrollView>
          {/* address */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              padding: 10,
              backgroundColor: "#AFEEEE",
            }}
          >
            <Ionicons name="location-outline" size={24} color="black" />

            <Pressable>
              <Text>Deliver to Kankarbagh, Patna, Bihar-800020</Text>
            </Pressable>

            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>
          {/* service slider */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                  source={item.image}
                />

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "500",
                    marginTop: 5,
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          {/* banner slider */}
          <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
          
            />
          </View>


          {/* most booked services */}
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            Most Booked Services
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ textAlign: "center" }}>
                    <Foundation name="star" size={15} color="#FEBE10" />{" "}
                    {item.rating}
                  </Text>
                  <Text style={{ textAlign: "center" }}>{item.price}</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#FEBE10",
                    paddingVertical: 5,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>


          {/* quick home repairs */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
              Quick home repairs
            </Text>

            <View style={{ marginRight: 10, marginTop: 5 }}>
              <Text style={{ color: "#FEBE10", fontSize: 15 }}>See All</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {quickService.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ textAlign: "center" }}>
                    <Foundation name="star" size={15} color="#FEBE10" />{" "}
                    {item.rating}
                  </Text>
                  <Text style={{ textAlign: "center" }}>{item.price}</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#FEBE10",
                    paddingVertical: 5,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <View style={{ marginTop: 8 }}>
            <Image
              source={require("../assets/banner/b13.png")}
              style={{ width: "100%", height: 340, resizeMode: "cover" }}
            ></Image>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
              Appliance repair
            </Text>

            <View style={{ marginRight: 10, marginTop: 5 }}>
              <Text style={{ color: "#FEBE10", fontSize: 15 }}>See All</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {applianceRepair.map((item, index) => (
              <Card
                key={item.id}
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ width: 133, height: 100, resizeMode: "contain" }}
                    resizeMode="contain"
                    source={item.image}
                  />
                  {/* <Text >Pranshu Chittora</Text> */}
                </View>
              </Card>
            ))}
          </ScrollView>


          {/* new & noteworthy */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
              New & noteworthy
            </Text>

            <View style={{ marginRight: 10, marginTop: 5 }}>
              <Text style={{ color: "#FEBE10", fontSize: 15 }}>See All</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newService.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text style={{ fontWeight: 500 }}>{item.name}</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#FEBE10",
                    paddingVertical: 3,
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                    borderRadius: 2,
                    position: "absolute",
                    top: 20,
                    left: 0,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    New
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>


{/* banner2 slider */}
          <View style={{ marginTop: 15 }}>
            <SliderBox
              images={images}
              autoplayInterval={3000}
              autoPlay
              circleLoop
              dotColor={"#13274F"}
              ImageComponentStyle={{ width: "100%" }}

            />
          </View>


          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />


{/* latest services */}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
              Latest Services
            </Text>

            <View style={{ marginRight: 10, marginTop: 5 }}>
              <Text style={{ color: "#FEBE10", fontSize: 15 }}>See All</Text>
            </View>
          </View>


         

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newService.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text style={{ fontWeight: 500 }}>{item.name}</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#FEBE10",
                    paddingVertical: 3,
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                    borderRadius: 2,
                    position: "absolute",
                    top: 20,
                    left: 0,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    New
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>




          {/* refer and earn */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

         <View style={styles.imgContainer}>
               <Image source={require("../assets/refer.png")} style={{width:180,height:100,resizeMode:"contain"}}>   
               </Image>

               <View style={{padding:10,paddingRight:45}}>
                <Text style={{fontWeight:"bold", textAlign:"center",fontSize:18}}>
                  Refer and get
                </Text>
                <Text style={{fontWeight:"bold", textAlign:"center",fontSize:18}}>
                  free services
                </Text>
                <Text style={{ textAlign:"center",fontSize:10}}>
                  Invite & get Rs 100*
                </Text>
               </View>
          </View>
      
       




        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },

  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    // borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    // width: width * 0.9,
    height: width * 0.5,
    width: width,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  imgContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },


});

export default Home;
