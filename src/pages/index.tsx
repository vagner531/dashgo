import { Flex, Input, Button, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
          <Input
            name="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />

          <Button type="submit" mt="6" bgColor="purple.800">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
