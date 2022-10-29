import * as React from "react";
import { Box, Container, Flex, Heading, Input, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";

export default function MainContainer() {
    return (
        <Container maxW="container.xl" centerContent>
            <Box 
                display="grid"  
                gridGap={1}
                gridTemplateColumns="repeat(auto-fill, minmax(270px, 1fr))"
                w="100%"
                >
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </Box>
        </Container>
    );
}   