import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Footer from '../components/Footer'

import {
  Avatar,
  Box,
  Stack,
  Center,
  Heading,
  Icon,
  IconButton,
  ScrollView,
  VStack,
  Divider,
  Flex,
  Spacer,
  View,
  Spinner 
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useStore from "../store";
import { MoonIcon, SunIcon } from "native-base";
import axios from "axios";

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

function Example() {
  const dark = useStore((state) => state.darkMode);
  const [ coin, setCoin ] = useState({})
  const [ Name, setName ] =  useState('')
  const [ Url, setUrl ] = useState('')
  const [loaded, setLoading ] = useState(false)
  const route = useRoute();
  useEffect(() => {
    (async () => {
      console.log(route.params);
      let coin = route.params.coin;
      setName(coin)
      let url = route.params.otherParam;
      setUrl(url)
      let res = await axios.get(`https://api.blockchair.com/${coin}/stats?key=G___6X1IuCHQEQBrzffATZBIPNfebhD1`)
      let myObj = res.data.data
      setCoin(myObj)
      setLoading(true)
    })();
  }, []);
  return (
    <Box>
    {loaded == true ? (
  <Box  minHeight={"100vh"}>
    <ScrollView>
      <Box flex="1">
        <Flex
          style={{ justifyContent: "Center" }}
          direction={{ base: "column", md: "row" }}
          width={{ md: 1200 }}
        >
          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              <Avatar
                bg="indigo.500"
                alignSelf="center"
                size="lg"
                source={{
                  uri: Url,
                }}
              >
                RS
              </Avatar>
              <Spacer />
              <Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Explorers
                </Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "3xl",
                    fontWeight: "medium",
                    letterSpacing: "lg",
                    color: "info.600",
                  }}
                >
                  {Name}
                </Box>
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Center
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              <Box
                alignSelf="center"
                style={{ textAlign: "center" }}
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "trueGray.500",
                  letterSpacing: "sm",
                }}
              >
                {coin.market_price_usd}
              </Box>
              <Box
                alignSelf="center"
                style={{ textAlign: "center" }}
                _text={{
                  fontSize: "sm",
                  fontWeight: "medium",
                  color: "info.600",
                  letterSpacing: "sm",
                }}
              >
                Market price
              </Box>
            </Center>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "column" }}
              mb="2.5"
              mt="1.5"
            >
              <Box>
                <Flex
                  width={{ base: 200, md: 350 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "sm",
                      fontWeight: "medium",
                      color: "trueGray.500",
                      letterSpacing: "lg",
                    }}
                  >
                    Circulation
                  </Box>

                  <Spacer />

                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "xl",
                      fontWeight: "bold",
                      letterSpacing: "lg",
                      color: "info.600",
                    }}
                  >
                    19,083,477 
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Flex
                  width={{ base: 200, md: 350 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "sm",
                      fontWeight: "medium",
                      letterSpacing: "lg",
                      color: "trueGray.600",
                    }}
                  >
                    Market cap
                  </Box>

                  <Spacer />

                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "xl",
                      fontWeight: "bold",
                      letterSpacing: "sm",
                      color: "info.600",
                    }}
                  >
                    367.777 Billion$
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Flex
                  width={{ base: 200, md: 350 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "sm",
                      fontWeight: "medium",
                      letterSpacing: "lg",
                      color: "trueGray.500",
                    }}
                  >
                    Dominance
                  </Box>

                  <Spacer />

                  <Box
                    alignSelf="center"
                    _text={{
                      fontSize: "xl",
                      fontWeight: "bold",
                      letterSpacing: "lg",
                      color: "info.600",
                    }}
                  >
                    40.55%
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Stack>
        </Flex>

        <Flex
          style={{ justifyContent: "Center" }}
          direction={{ base: "column", md: "row" }}
          width={{ md: 1200 }}
        >
          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              style={{ alignItems: "Center" }}
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              <Box alignItems="center">
                <IconButton
                  icon={<Icon as={MaterialIcons} name="enhanced-encryption" />}
                  borderRadius="full"
                  _icon={{
                    color: "orange.500",
                    size: "2xl",
                  }}
                  _hover={{
                    bg: "info.600:alpha.20",
                  }}
                  _pressed={{
                    bg: "info.600:alpha.20",
                    _icon: {
                      name: "enhanced-encryption",
                    },
                    _ios: {
                      _icon: {
                        size: "2xl",
                      },
                    },
                  }}
                  _ios={{
                    _icon: {
                      size: "2xl",
                    },
                  }}
                />
              </Box>
              <Spacer />
              <Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    letterSpacing: "lg",
                    color: "trueGray.500",
                  }}
                >
                  Blocks
                </Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "3xl",
                    fontWeight: "medium",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.blocks}
                </Box>
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              style={{ alignItems: "Center" }}
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              <Box alignItems="center">
                <IconButton
                  icon={<Icon as={Ionicons} name="wallet-outline" />}
                  borderRadius="full"
                  _icon={{
                    color: "orange.500",
                    size: "2xl",
                  }}
                  _hover={{
                    bg: "info.600:alpha.20",
                  }}
                  _pressed={{
                    bg: "info.600:alpha.20",
                    _icon: {
                      name: "wallet-outline",
                    },
                    _ios: {
                      _icon: {
                        size: "2xl",
                      },
                    },
                  }}
                  _ios={{
                    _icon: {
                      size: "2xl",
                    },
                  }}
                />
              </Box>
              <Spacer />
              <Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Addressing
                </Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "3xl",
                    fontWeight: "medium",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  42,673,395
                </Box>
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark === false ? "light.100" : "dark.50"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              style={{ alignItems: "Center" }}
              width={{ base: 200, md: 350 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              <Box alignItems="center">
                <IconButton
                  icon={
                    <Icon as={MaterialCommunityIcons} name="bank-transfer" />
                  }
                  borderRadius="full"
                  _icon={{
                    color: "orange.500",
                    size: "3xl",
                  }}
                  _hover={{
                    bg: "info.600:alpha.20",
                  }}
                  _pressed={{
                    bg: "info.600:alpha.20",
                    _icon: {
                      name: "bank-transfer",
                    },
                    _ios: {
                      _icon: {
                        size: "2xl",
                      },
                    },
                  }}
                  _ios={{
                    _icon: {
                      size: "2xl",
                    },
                  }}
                />
              </Box>
              <Spacer />
              <Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Transactions
                </Box>
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "3xl",
                    fontWeight: "medium",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.transactions}
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Flex>
        <Heading
          style={{ color: "#0284c7", textAlign: "Center" }}
          fontWeight="bold"
          size="md"
          py="2"
        >
          24 Hours Statstics{" "}
        </Heading>
        <Stack
          style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
          mx={{ md: 1 }}
          bg={dark === false ? "light.100" : "dark.50"}
          direction={{ base: "column", md: "row" }}
          px="3"
          mt="1.5"
          space={5}
        >
          <Flex
            style={{ alignItems: "Center", justifyContent: "space-between" }}
            width={{ md: 1200 }}
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            mt="1.5"
          >
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Transactions
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.transactions_24h}
                </Box>
              </Flex>
            </Box>

            {/* ROW 2 of Main Stack*/}
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Blocks
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.blocks_24h}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>
        {/*2nd column */}
        <Stack
          mx={{ md: 1 }}
          bg={dark === false ? "light.100" : "dark.50"}
          direction={{ base: "column", md: "row" }}
          px="3"
          space={5}
        >
          <Flex
            style={{ alignItems: "Center", justifyContent: "space-between" }}
            width={{ md: 1200 }}
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            mt="1.5"
          >
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Transactions per sec
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.nodes}
                </Box>
              </Flex>
            </Box>

            {/* ROW 2 of Main Stack*/}
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Avg time btw Blocks
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  11min 25sec
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>

        {/*3rd column */}
        <Stack
          mx={{ md: 1 }}
          bg={dark === false ? "light.100" : "dark.50"}
          direction={{ base: "column", md: "row" }}
          px="3"
          space={5}
        >
          <Flex
            style={{ alignItems: "Center", justifyContent: "space-between" }}
            width={{ md: 1200 }}
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            mt="1.5"
          >
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Median Transaction Fee
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.median_transaction_fee_24h}USD
                </Box>
              </Flex>
            </Box>

            {/* ROW 2 of Main Stack*/}
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Volume
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.volume_24h}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>

        {/*4th column */}
        <Stack
          style={{
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
          mx={{ md: 1 }}
          mb="100"
          bg={dark === false ? "light.100" : "dark.50"}
          direction={{ base: "column", md: "row" }}
          px="3"
          space={5}
        >
          <Flex
            style={{ alignItems: "Center", justifyContent: "space-between" }}
            width={{ md: 1200 }}
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            mt="1.5"
          >
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Avg Transaction Fee
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  1.65 USD
                </Box>
              </Flex>
            </Box>

            {/* ROW 2 of Main Stack*/}
            <Box>
              <Flex
                style={{ alignItems: "Center" }}
                width={{ base: 200, md: 400 }}
                direction={{ base: "column", md: "row" }}
                mb="2.5"
                mt="1.5"
              >
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Hashrate
                </Box>
                <Spacer />
                <Box
                  alignSelf="center"
                  _text={{
                    fontSize: "sm",
                    fontWeight: "bold",
                    color: "info.600",
                    letterSpacing: "lg",
                  }}
                >
                  {coin.hashrate_24h} Eh/s (SHA-256)
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </ScrollView>
    <Footer />
    </Box> ) :(
        <Center bg={dark == true ? "black" : "white"} height={"100vh"}>
          <Spinner size="lg" />
        </Center>
      )}
  </Box>
  );
}

export default () => {
  const dark = useStore((state) => state.darkMode);
  return (
    <Box bg={dark === true ? "#000000" : "#FCFCFC"}>
      <UseColorMode />
      <Center flex={1} px="3">
        <Example />
      </Center>
    </Box>
  );
};
