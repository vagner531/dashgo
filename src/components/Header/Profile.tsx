import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Vaner Nascimento</Text>
      <Text color="gray.300" fontSize="small">
        vagnersantos@gmail.com
      </Text>
    </Box>

    <Avatar
      size="md"
      p="1"
      borderWidth="1px"
      borderColor="#fff"
      name="Vagner Nascimento"
      src="https://github.com/vagner531.png"
    />
  </Flex>
  );
}