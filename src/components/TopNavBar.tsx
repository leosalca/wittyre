import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text } from '@chakra-ui/react';
import { BiHomeSmile } from 'react-icons/bi';
import { useBreakpointValue } from '@chakra-ui/react'



export default function TopNavBar() {

    const isMobile = useBreakpointValue({ base: true, md: false })
    const [searchInput, setSearchInput] = React.useState('');

    let baseUrl = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=',
        encodedUserQueryUrl = '';

    const handleSearchInput = (input: string) => {
        let encodedUserQuery = encodeURIComponent(input);
        encodedUserQueryUrl = baseUrl + encodedUserQuery + '&limit=10';
        return encodedUserQueryUrl;
    }

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '848f4a027dmsh350df67252ac206p16221fjsn63d91afaef1c',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      };
    
   
    
    const handleSearch = () => {
        const searchUrl = handleSearchInput(searchInput);
        console.log(searchUrl);
        fetch(searchUrl, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err)); 
    }

    return (
        <Container maxW="container.xl" m="0 10px 40px 10px">
            <Flex>
                <Heading size="md">WittyRe</Heading>
                <Spacer />
                <Input  placeholder="Search Homes" width="auto"
                    onChange={event => setSearchInput(event.target.value)}
                />
                <Button onClick={handleSearch} colorScheme="teal" variant="solid" size="md" ml="10px">Search</Button>
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