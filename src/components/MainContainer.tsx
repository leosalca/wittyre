import * as React from "react";

import { Box, Container, Flex, Heading, Input, Link, Spacer, Stack, Text } from "@chakra-ui/react";

export default function MainContainer() {
    return (
        <Container maxW="container.xl">
            <Flex>
                <Box>
                    <Text fontSize="2xl">Welcome to WittyRE!</Text>
                    <Text fontSize="xl">We are a real estate company that is here to help you find your dream home.</Text>
                </Box>
            </Flex>
        </Container>
    );
}   