import { Flex, Grid, GridItem, Icon, Input } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

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

                <Grid>
                    <GridItem

                    >

                    </GridItem>
                </Grid>

            </Flex>
        </Flex>
    )
}