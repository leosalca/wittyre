import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text } from '@chakra-ui/react';
import { BiHomeSmile, BiSearchAlt } from 'react-icons/bi';
import { useBreakpointValue } from '@chakra-ui/react'
import AutoCompleteList from './AutoCompleteList';
import { MdCalculate } from 'react-icons/md';




export default function TopNavBar() {

    const isMobile = useBreakpointValue({ base: true, md: false });
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    

    // useEffect(() => {}, []);
        

    let baseUrl = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=',
    encodedUserQueryUrl = '';

    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '848f4a027dmsh350df67252ac206p16221fjsn63d91afaef1c',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };
    
    const encodeSearchInput = (input: string) => {
        let encodedUserInput = encodeURIComponent(input);
        encodedUserQueryUrl = baseUrl + encodedUserInput + '&limit=10';
        return encodedUserQueryUrl;
    }
   
    const handleSearch = () => {
        const searchUrl = encodeSearchInput(searchInput);
        console.log(searchUrl);
        fetch(searchUrl, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setSearchResults([...response.autocomplete]);
        })
        .catch(err => console.error(err)); 
    }

    return (
        <Container maxW="container.xl" m="0 10px 40px 10px">
            <Flex alignItems='flex-start'>
                <Heading size="md">WittyRe</Heading>
                <Spacer />
                <Stack maxW='400px'>
                    <Stack direction='row' spacing={1} minW={isMobile ? '250px' : '400px'}>
                        <Input 
                            placeholder="Search Homes" 
                            onChange={event => setSearchInput(event.target.value)}
                        />
                        <IconButton 
                            aria-label='Search Homes'
                            onClick={handleSearch} 
                            colorScheme="teal" 
                            variant="solid" 
                            size="md" 
                            ml="10px"
                            icon={<BiSearchAlt />}
                        ></IconButton>
                    </Stack>
                    {searchResults.length > 0 ? (
                    <Stack direction='row' spacing={1} minW={isMobile ? '250px' : '400px'}>
                        <AutoCompleteList data={searchResults} />
                        <IconButton 
                            aria-label='Search Homes'
                            onClick={handleSearch} 
                            colorScheme="teal" 
                            variant="outline" 
                            size="md" 
                            ml="10px"
                            icon={<MdCalculate />}
                        ></IconButton>
                    </Stack>
                    ) : (null)}
                </Stack>
                <Spacer />
                {isMobile ? (
                <Stack direction="row" align="center">
                    <IconButton aria-label="Home" icon={<BiHomeSmile />} />
                </Stack>
                ):(
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