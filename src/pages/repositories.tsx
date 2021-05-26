import { Box, Button, Divider, Flex, Grid, GridItem, HStack, Icon, Input, Link, Text } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function Repositories(){
    return (
        <Flex
            width="100vw"
            height="100%"
            mx="auto"
        >
            <Flex
                direction="column"
                my="4"
                mx="auto"
            >
                <Icon 
                    mx="auto"
                    as={AiOutlineGithub} 
                    fontSize="6xl"
                    my="8"
                    color="gray.50"
                />
                <Input 
                    width={1100}
                    mx="auto"
                    bg="gray.800"
                    color="gray.50"
                    border="underline"
                    placeholder="Pesquise aqui seus repositórios preferidos"
                />

                <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={4}
                >
                    <GridItem 
                        bgColor="gray.800"
                        borderRadius="4"
                        width="100%"
                        height="100%"
                        maxWidth="360px"
                        maxHeight="200px"
                        p="4"
                    >
                        <Flex 
                            direction="column"
                        >
                            <Box color="gray.50">
                                <Text 
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Nome do repositório
                                </Text>
                                <Link 
                                    color="gray.400" 
                                    position="relative"
                                    float="right"
                                    as="span"
                                    href=""
                                    isExternal
                                >   
                                    <Icon as={FiExternalLink} color="orange.200"/>
                                </Link>
                                <Divider colorScheme="gray"/>
                                <Text 
                                    color="gray.500" 
                                    fontWeight="light"
                                    fontSize="sm"
                                    my="2"
                                >
                                    Lorem ipsum dolor sit amet Lorem ipsum dolor 
                                    sit amet consectetur adipisicing elit. cta fugiat 
                                    odit!
                                </Text>
                                
                            </Box>
                            <Flex color="gray.200" fontWeight="light" justify="space-between">
                                <Button variant="unstyled" fontSize="sm" ><Text>#tag1</Text></Button>
                                <Button variant="unstyled" fontSize="sm"><Text>#tagtagtag2</Text></Button>
                                <Button variant="unstyled" fontSize="sm" ><Text>#tagtagatgatag3</Text></Button>
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>

            </Flex>
        </Flex>
    )
}