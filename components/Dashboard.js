import React, { useEffect, useState } from "react";
import { ScrollView, useColorMode } from "native-base";
import { MoonIcon, SunIcon, Spinner , Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Footer from "./Footer";
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Icon,
  View,
  Image,
} from "native-base";
import useStore from "../store";
import axios from "axios";

function UseColorModeAndImage() {
  const toggleDarkMode = useStore((state) => state.toggleMode);
  const dark = useStore((state) => state.darkMode);

  return (
    <View
      _text={{ textAlign: "center" }}
      style={{
        padding: "0",
        backgroundColor: dark === true ? "#000000" : "#FCFCFC",
      }}
    >
      {dark == true ? (
        <MoonIcon
          size={"30.0"}
          marginLeft={"85vw"}
          onClick={() => {
            toggleDarkMode();
          }}
          style={{ zIndex: "1000", margin: "10" }}
          color="#000000"
        />
      ) : (
        <SunIcon
          size={"30.0"}
          marginLeft={"85vw"}
          onClick={() => {
            toggleDarkMode();
          }}
          style={{ zIndex: "1000", margin: "10" }}
          color="#FCFCFC"
        />
      )}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?cs=srgb&dl=pexels-david-mcbee-730564.jpg&fm=jpg",
        }}
        style={{
          position: "absolute",
          boxShadow: "inset 0 0 100px black",
          marginLeft: "0",
          top: "0",
        }}
        alt="Alternate Text"
        height={"40vh"}
        width={"100vw"}
        borderRadius={"lg"}
      />
    </View>
  );
}

const Dashboard = () => {
  const dark = useStore((state) => state.darkMode);
  const [apiData, setData] = useState([]);
  const [loaded, setLoading] = useState(false);
  let navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let res = await axios.get(
        "https://api.blockchair.com/stats?key=G___6X1IuCHQEQBrzffATZBIPNfebhD1"
      );
      let myObj = res.data.data;
      console.log(myObj);
      let objs = Object.keys(myObj).map((k) => ({
        label: k,
        id: k,
        blocks: myObj[k]?.data?.blocks,
        Src: "",
        price: myObj[k]?.data?.market_price_usd,
      }));
      let arrayOfSrc = [
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
        "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
        "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022",
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
        "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022",
        "https://cryptologos.cc/logos/dash-dash-logo.png?v=022",
      ];
      let data = objs.slice(0, 7);
      for (let i = 0; i < data.length; i++) {
        data[i].Src = arrayOfSrc[i];
      }
      let sol = {
        id: "solana",
        blocks: "126403265",
        key: "solana",
        label: "Solana",
        Src: "https://cryptologos.cc/logos/solana-sol-logo.png?v=022",
        price: "32.68",
      };
      data.push(sol);
      setData(data);
      setLoading(true);
    })();
  }, []);

  return (
      // <ScrollView contentContainerStyle={{flexGrow: 1}} >
    <Box h='full'>
      {loaded == true ? (
        <Box h='full' bg={dark === true ? "#000000" : "#FCFCFC"}>
            <UseColorModeAndImage />
            <Box
            mt='40'
              height={"full"}
              bg={dark === true ? "#000000" : "#FCFCFC"}
              style={{
                width: "100%",
                borderTopRightRadius: "50px",
                borderTopLeftRadius: "50px",
                // marginTop: "30vh",
              }}
            >
              {/* <ScrollView> */}
                <Box>
                  <FlatList
                    mt="5"
                    data={apiData}
                    renderItem={({ item }) => (
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: "gray.600",
                        }}
                        borderColor="coolGray.200"
                        pl="4"
                        pr="5"
                        py="2"
                      >
                        <Pressable
                          onPress={() => {
                            navigation.navigate("Details", {
                              coin: item.label,
                              otherParam: item.Src,
                            });
                          }}
                        >
                          <HStack space={3} justifyContent="space-between">
                            <Avatar
                              size="48px"
                              source={{
                                uri: item.Src,
                              }}
                            />
                            <VStack alignItems={"flex-start"}>
                              <Text
                                color={dark === true ? "white" : "black"}
                                bold
                                fontSize={"xl"}
                                textTransform={"capitalize"}
                              >
                                {item.label}
                              </Text>
                              <Text color={dark === true ? "white" : "black"}>
                                <span style={{ fontWeight: "600" }}>
                                  Blocks
                                </span>
                                : {item.blocks}
                              </Text>
                            </VStack>
                            <Spacer />
                            <Text
                              fontSize="md"
                              color="info.600"
                              fontWeight="bold"
                              alignSelf="flex-start"
                            >
                              ${item.price}
                            </Text>
                          </HStack>
                        </Pressable>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
        </Box>
      ) : (
        <Center bg={dark == true ? "black" : "white"} height={"100vh"}>
          <Spinner size="lg" />
        </Center>
      )}
    </Box>
  );
};

export default Dashboard;
