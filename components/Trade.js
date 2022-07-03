import React, { useEffect, useState } from "react";
import { ScrollView, useColorMode } from "native-base";
import { MoonIcon, SunIcon, Spinner } from "native-base";
import Footer from './Footer'
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  IconButton,
  Icon,
  View,
  Image,
} from "native-base";
import useStore from "../store";


function UseColorMode() {
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
          color="#FCFCFC"
        />
      ) : (
        <SunIcon
          size={"30.0"}
          marginLeft={"85vw"}
          onClick={() => {
            toggleDarkMode();
          }}
          style={{ zIndex: "1000", margin: "10" }}
          color="#000000"
        />
      )}
    </View>
  );
}
const Example = () => {
    const dark = useStore((state) => state.darkMode);
    const data = [{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      coin: "BitCoin",
      invested: "90003",
      quantity: "200",
      avg: "46",
      price:"60890",
      dec:"55",
      ltp:"32.67"
    }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        coin: "DogeCoin",
        invested: "10003",
        quantity: "100",
        avg: "20",
        price:"6890",
        dec:"80",
        ltp:"23.56"
      }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        coin: "Etherium",
        invested: "30003",
        quantity: "300",
        avg: "49",
        price:"40890",
        dec:"33",
        ltp:"37.6"
      },{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        coin: "Solana",
        invested: "30003",
        quantity: "100",
        avg: "49",
        price:"9890",
        dec:"44",
        ltp:"29.1"
      },{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        coin: "BitCash",
        invested: "50003",
        quantity: "80",
        avg: "36",
        price:"60210",
        dec:"24",
        ltp:"56.3"
      }];
      let name = useStore((state) => state.name)
      useEffect(() => {
        console.log(name)
      }, [])
    return <Box  height={"100vh"}>
        <Box >
        <Heading color={dark == true ? "white" : "black"} mb="10">
            Active(5)
        </Heading>
        <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="1" h='full' flex={1} _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} pt="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <VStack>
                  <Text  color={dark === true ? "white" : "black"} bold fontSize={"xl"}>
                    {item.coin}
                  </Text>
                  <Text color={dark === true ? "white" : "black"} fontSize={"sm"}>
                    {item.invested}
                  </Text>
                  <Text color={dark === true ? "white" : "black"} fontSize={"xs"}>
                    {item.quantity} Qty {item.avg} Avg 
                  </Text>
                </VStack>
                <Spacer />
                <VStack>
                <Text color={"red.600"} fontSize="lg" alignSelf="flex-end">
                  -${item.price}
                </Text>
                <Text color={"red.600"} fontSize="md"  alignSelf="flex-end">
                  -({item.dec}%)
                </Text>
                <Text color={dark == true ? "white" : "black"} fontSize="xs"  alignSelf="flex-end">
                  ${item.ltc}(+3.45%) LTP
                </Text>
                </VStack>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
            </Box>
            <Footer />
      </Box>;
  };
  
      export default () => {
        const dark = useStore((state) => state.darkMode);
          return (
              <Box bg={dark === true ? "#000000" : "#FCFCFC"} flex={1} px="3">
                <UseColorMode/>
                  <Example />
              </Box>
          );
      };