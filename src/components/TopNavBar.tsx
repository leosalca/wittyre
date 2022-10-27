import * as React from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text } from '@chakra-ui/react';
import { BiHomeSmile } from 'react-icons/bi';



export default function TopNavBar() {
    return (
        <Container maxW="container.xl" m="0 10px 20px 10px">
            <Flex>
                <Heading size="md">WittyRE</Heading>
                <Spacer />
                <Input placeholder="Search Homes" width="auto"/>
                <Spacer />
                <Stack direction="row" spacing={4}>
                    <IconButton aria-label="Home" icon={<BiHomeSmile />} />
                </Stack>
            </Flex>
        </Container>
    );
}