import React, { useEffect, useState } from "react";

import { MoonIcon, SunIcon, ArrowForwardIcon,  PresenceTransition,  } from "native-base";
import {
  AspectRatio,
  Box,
  ZStack,
  VStack,
  Text,
  Heading,
  Image,
  Center,
  Button,
  FormControl,
  Input,
  Link,
  HStack,
  View,
  ScrollView,
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
          onClick={() => {
            toggleDarkMode();
          }}
          style={{ margin: "10" }}
          color="#FCFCFC"
        />
      ) : (
        <SunIcon
          size={"30.0"}
          onClick={() => {
            toggleDarkMode();
          }}
          style={{ margin: "10" }}
        />
      )}
    </View>
  );
}

const LandingPage = ({ navigation }) => {
  const toggleDarkMode = useStore((state) => state.toggleMode);
  const dark = useStore((state) => state.darkMode);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Box flex={"1"}>
      <UseColorMode />
      <View
      flex={"1"}
        style={{
          width: "100%",
          backgroundColor: dark === true ? "#000000" : "#FCFCFC",
        }}
      >
        <Center>
          <VStack>
            <PresenceTransition
              visible={isOpen}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1500,
                },
              }}
            >
              <Text textAlign="center"  fontSize="5xl" mb="1" color="info.600">
                BlockDesk
              </Text>
            </PresenceTransition>
            <Text textAlign="center"  fontSize="sm" color={dark == true ? "white" : "black"}>
              Trade anytime anywhere
            </Text>
            <Center>
              <Image
                source={{
                  uri: "https://github.com/dmrt2002/images/blob/main/hd--removebg-preview.png?raw=true",
                }}
                alt="Alternate Text"
                height={{ base: 400, md: 400, lg: 400 }}
                width={{ base: 400, md: 400, lg: 500 }}
                borderRadius={"lg"}
              />
            </Center>
            <Box flexWrap={"wrap"}>
              <Text
                color={dark === true ? "white" : "black"}
                mx="20"
                fontSize={"md"}
              >
                Trade with confidence on the world’s fastest and most secure
                crypto exchange
              </Text>
            </Box>
          </VStack>
            <Button
              mt="10"
              px="10"
              colorScheme="indigo"
              endIcon={<ArrowForwardIcon size="4" />
              }
              onPress={() => navigation.navigate('Login')}
            >
              Join In
            </Button>
        </Center>
      </View>
    </Box>
  );
};

export default LandingPage;
