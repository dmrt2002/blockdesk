import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

function Example() {
  const [selected, setSelected] = React.useState(1);
  let navigation = useNavigation()
  return (
      <Box position={'fixed'} bottom='0' flex={1} bg="white" width={"100vw"} alignSelf="center">
        <HStack space={"22"} bg="indigo.800"   shadow={6}>
        <Pressable onPress={() => navigation.push('Dashboard')} cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1}>
            <Center>
            <MaterialIcons name="dashboard" size={24} color="white" />
              <Text color="white" fontSize="12">
                Dashboard
              </Text>
            </Center>
          </Pressable>
          <Pressable onPress={() => navigation.push('Trade')} cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} >
            <Center>
            <AntDesign name="profile" size={24} color="white" />
              <Text color="white" fontSize="12">
                Trades
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => navigation.push('Account')}>
            <Center>
            <MaterialCommunityIcons name="account" size={24} color="white" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
  );
}

    export default () => {
        return (
            <Center flex={1} px="3">
                <Example />
            </Center>
        );
    };