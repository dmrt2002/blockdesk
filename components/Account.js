import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "native-base";
import useStore from "../store";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Center,
  Icon,
  IconButton,
  Flex,
  Spacer,
  View,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "./Footer";

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
  const [Name, setName] = useState("");
  let user = useStore((state) => state.name);

  useEffect(() => {
    setName(user);
  }, []);
  return (
    <Box rounded="lg" my={{ md: "10" }} height={"95vh"}>
      <Flex
        height={{ md: "80vh" }}
        style={{ justifyContent: "Center", alignItems: "Center" }}
      >
        <Flex
          style={{ justifyContent: "Center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            mx={{ md: 1 }}
            bg={dark == true ? "dark.50" : "light.100"}
            rounded="sm"
            direction={{ base: "column", md: "row" }}
            mb="2.5"
            px="3"
            mt="1.5"
            space={5}
          >
            <Flex
              width={{ base: 200, md: 300 }}
              height={{ md: 100 }}
              direction={{ base: "column", md: "row" }}
              mb="2.5"
              mt="1.5"
            >
              {dark == true ? (
                <Avatar
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://github.com/dmrt2002/images/blob/main/hd--removebg.jpg?raw=true",
                  }}
                >
                  RS
                </Avatar>
              ) : (
                <Avatar
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://thumbs.dreamstime.com/b/blockchain-gradient-linear-vector-icon-blockchain-gradient-linear-vector-icon-encrypted-data-blocks-storage-recording-information-234897316.jpg",
                  }}
                >
                  RS
                </Avatar>
              )}
              <Spacer />
              <Box
                style={{ display: "inlineFlex", justifyContent: "flexStart" }}
                alignSelf="center"
                _text={{
                  fontSize: "3xl",
                  fontWeight: "medium",
                  color: "trueGray.500",
                  letterSpacing: "lg",
                }}
              >
                {Name}
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark == true ? "dark.50" : "light.100"}
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
                  fontSize: "2xl",
                  fontWeight: "bold",
                  color: "info.600",
                  letterSpacing: "sm",
                }}
              >
                19,211.15 USD
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
                Wallet
              </Box>
            </Center>
          </Stack>
        </Flex>

        <Flex
          style={{ justifyContent: "Center" }}
          direction={{ base: "column", md: "row" }}
          width={{ md: 1200 }}
        >
          <Stack
            mx={{ md: 1 }}
            bg={dark == true ? "dark.50" : "light.100"}
            rounded={{ base: "sm", md: "3xl" }}
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
                  icon={<Icon as={Ionicons} name="notifications-outline" />}
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
                    fontSize: "lg",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Notification
                </Box>
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark == true ? "dark.50" : "light.100"}
            rounded={{ base: "sm", md: "3xl" }}
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
                  icon={<Icon as={MaterialCommunityIcons} name="license" />}
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
                    fontSize: "lg",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Terms & Conditions
                </Box>
              </Box>
            </Flex>
          </Stack>

          <Stack
            mx={{ md: 1 }}
            bg={dark == true ? "dark.50" : "light.100"}
            rounded={{ base: "sm", md: "3xl" }}
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
                  icon={<Icon as={FontAwesome} name="line-chart" />}
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
                    fontSize: "lg",
                    fontWeight: "medium",
                    color: "trueGray.500",
                    letterSpacing: "lg",
                  }}
                >
                  Charts
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Flex>

        <Stack
          rounded="sm"
          direction={{ base: "column" }}
          mb="2.5"
          px="3"
          mt="1.5"
          space={5}
        >
          <Flex
            style={{ alignItems: "Center", justifyContent: "Center" }}
            direction={{ base: "column" }}
            mb="2.5"
            mt="1.5"
          >
            <Box alignItems="center">
              <Button
                colorScheme="indigo"
                variant="solid"
                endIcon={
                  <Icon
                    as={MaterialIcons}
                    name="logout"
                    size="sm"
                    color="#fcfcfc"
                  />
                }
              >
                Logout
              </Button>
              <Footer />
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default () => {
  const dark = useStore((state) => state.darkMode);
  return (
    <Box bg={dark == true ? "black" : "white"}>
      <UseColorMode />
      <Center flex={1} px="3">
        <Example />
      </Center>
    </Box>
  );
};
