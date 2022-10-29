import * as React from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text } from '@chakra-ui/react';
import { BiHomeSmile } from 'react-icons/bi';
import { useBreakpointValue } from '@chakra-ui/react'



export default function TopNavBar() {

    const isMobile = useBreakpointValue({ base: true, md: false })


    return (
        <Container maxW="container.xl" m="0 10px 40px 10px">
            <Flex>
                <Heading size="md">WittyRe</Heading>
                <Spacer />
                <Input placeholder="Search Homes" width="auto"/>
                <Spacer />
                {isMobile
                    ?(
                    <Stack direction="row" spacing={4} align="center">
                        <IconButton aria-label="Home" icon={<BiHomeSmile />} />
                    </Stack>
                    ) 
                    :(
                    <Stack direction="row" spacing={4}>
                        <Button leftIcon={<BiHomeSmile />}>Homes</Button>
                        <Button variant="outline">Sign In</Button>
                        <Button variant="ghost">Sign Up</Button>
                        <Button variant="link">About</Button>
                    </Stack>
                    )
                }
            </Flex>
        </Container>
    );
}