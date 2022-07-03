import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon, } from "native-base";
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
  FormControl, Input, Link, HStack
} from "native-base";
import { View } from "react-native-web";
import useStore from "../store";
import { useNavigation } from "@react-navigation/native";

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

const Home = () => {
  const toggleDarkMode = useStore((state) => state.toggleMode);
  const dark = useStore((state) => state.darkMode);
  const [Name, setName] = useState('');
  const [errors, setErrors] = React.useState('')
  const ChangeName = (event) => {
    setName(event.target.value);
    useStore.setState({name: event.target.value })
  }; 
  const navigation = useNavigation()
  const onSubmit = () => {
    if(Name.length == 0 || Name.length < 3) {
        setErrors('Enter a valid UserName and Password')
    }
    else {
        navigation.push('Dashboard')
    }
  }

  return (
    <Box>
      <UseColorMode />
      <View
       className="overflow"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: dark === true ? "#000000" : "#FCFCFC",
        }}
      >
        <Center height={"90vh"}>
        <Heading size="lg" fontWeight="600" color={dark === true ? "#FCFCFC" : "#000000"}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>User Name</FormControl.Label>
            <Input value={Name} color={dark === true ? "white" : "black"} onChange={ChangeName}  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" color={dark === true ? "white" : "black"} />
          </FormControl>
          <Text color="red">
                {errors}
          </Text>
          <Button onPress={onSubmit} mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
          </HStack>
        </VStack>
        </Center>
      </View>
      </Box>
  );
};

export default Home;