import {
  Box,
  Text,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useQuery } from "react-query";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    
    return data;
  })


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                bgColor="purple.800"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

         { isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
         ) : error ? (
          <Flex justify="center">
           <Text>Falha ao obter dados do usuários.</Text> 
          </Flex>
         ) : (
          <>
          <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "4", "6"]} color="gray.300" width="8">
                <Checkbox colorScheme="purple" />
              </Th>
              <Th>Usuário</Th>
              {isWideVersion && <Th>Data de cadastro</Th>}
              <Th width="8"></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="purple" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Vagner Nascimento</Text>
                  <Text fontSize="sm" color="gray.300">
                    vagnersantos@gmail.com
                  </Text>
                </Box>
              </Td>
              {isWideVersion && <Td>14 de Outubro, 2023</Td>}
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  bgColor="pink.600"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  {isWideVersion ? "Editar" : ''}
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Pagination />
          </>
         ) }
        </Box>
      </Flex>
    </Box>
  );
}
