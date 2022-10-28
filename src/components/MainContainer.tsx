import * as React from "react";
import { Box, Container, Flex, Heading, Input, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";

export default function MainContainer() {
    return (
        <Container maxW="container.xl" centerContent>
            <Flex flexWrap="wrap" flexFlow="center">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </Flex>
        </Container>
    );
}   