import { FormEvent, useState } from "react";
import { Button, Flex, Icon, Input, InputGroup, InputLeftAddon, InputRightElement, Link, Text, VStack } from "@chakra-ui/react";

import { useRouter } from "next/router";

import { AiOutlineLock, AiOutlineGithub, AiOutlineEye, AiFillEyeInvisible } from 'react-icons/ai'


export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent){
    event.preventDefault();    
  }

  const handleClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
    >
      <Flex
        as="form"
        flexDir="column"
        mx="auto"
        px="12"
        pb="16"
        pt="8"
        width="100%"
        maxWidth="400px"
        borderColor="gray.600"
        bg="gray.800"
        borderRadius="8"
        onSubmit={handleSubmit}
      >
        <Text 
          fontSize="xl"
          fontWeight="600"
          textAlign="center"
          color="gray.50"
          width="100%"
          pb="8"
        >
          <Icon as={AiOutlineGithub} fontSize="6xl"/>
        </Text>
      
        <VStack spacing="6">
          <InputGroup >
            <InputLeftAddon children="@" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="e-mail"
              autoComplete="off"
              color="gray.50"
              fontSize="md"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <InputGroup >
            <InputLeftAddon children={<Icon as={AiOutlineLock} />} />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="senha"
              color="gray.50"
              fontSize="md"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            {password && ( 
              <InputRightElement >
                <Button 
                  onClick={handleClick} 
                  bg="transparent"
                  _focus={{}}
                  _hover={{}}
                  _active={{}}
                >
                  {showPassword ? 
                    <Icon as={AiFillEyeInvisible} color="gray.50"/> 
                    : 
                    <Icon as={AiOutlineEye} color="gray.50"/>
                  }
                </Button>
              </InputRightElement>
            )}
        </InputGroup>
        </VStack>

        <Button 
          mt="16"
          width="100%" 
          type="submit"
          bg="gray.300"
          fontWeight="semibold"
          _hover={
            {
              bg: "gray.500",
              color:"gray.100"
            }
          }
        >
          <Text fontWeight="semibold">Entrar</Text>
        </Button>
      </Flex>  

      <Button type="button" onClick={() => router.push('/repositories')}>Repositories</Button>
    </Flex>
    )
}
