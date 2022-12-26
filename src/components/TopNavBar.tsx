import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text, Menu, MenuButton, MenuList, MenuItem  } from '@chakra-ui/react';
import { BiHomeSmile, BiSearchAlt } from 'react-icons/bi';
import { useBreakpointValue } from '@chakra-ui/react'
import AutoCompleteList from './AutoCompleteList';
import { MdOutlineDataSaverOff } from 'react-icons/md';
import { CgMenu } from 'react-icons/cg';



export default function TopNavBar( amplifySignOut: any) {

    const isMobile = useBreakpointValue({ base: true, md: false });
    const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    

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
    
    // This function encodes the user's input to be used in the API call that return a list of "autocomplete" results.
    const encodeSearchInput = (input: string) => {
        let encodedUserInput = encodeURIComponent(input);
        // Limit the number of results to 10
        encodedUserQueryUrl = baseUrl + encodedUserInput + '&limit=10';
        return encodedUserQueryUrl;
    }
   
    /* This function is called when the user clicks the search button. It's using Rapid API's "Realty in US" to get the search results. 
    This first search step is to receive a proper query to then use on another API. The query depends on what the user wants to search.
    i.e. zip code, city, a specific address */
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

    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        setSelectedItem(event.target.value);
    }

    const handleSelSearch = (e: any) => {
        console.log(selectedItem);
    }
        //Removed padding from TopNavBar Container. App already has padding.
    return (
        <Container maxW="container.xl" m="20px 10px 40px 10px" p={0}>
            {/* aligns items in NavBar to the top */}
            <Flex alignItems='flex-start'>
                {/* Logo should go here */}
                {isMobile ? (<Heading size="4xl" m={1} fontSize="16px">WRE</Heading>) 
                : (<Heading size="4xl" m={1} fontSize="16px">WittyRE</Heading>)}
                <Spacer />
                <Stack maxW='400px' marginRight={2} minW={isMobile ? '150px' : isTablet ? '300px' : '400px'}>
                    {/* Search bar */}
                    <Stack direction='row' spacing={2}>
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
                    {/* Search results */}
                    {searchResults.length > 0 ? (
                    <Stack direction='row' spacing={2}>
                        <AutoCompleteList data={searchResults}/>
                        <IconButton 
                            aria-label='Search Homes'
                            onClick={(e) => {handleSelection}}
                            colorScheme="teal"
                            variant="outline"
                            size="md"
                            ml="10px"
                            icon={<MdOutlineDataSaverOff />}
                        ></IconButton>
                    </Stack>
                    ) : (null)}
                </Stack>
                <Spacer />
                {/* Mobile Menu */}
                {isMobile ? (
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<CgMenu />} />
                    <MenuList minW="320px">
                        <MenuItem minH="40px" onClick={amplifySignOut.amplifySignOut}>Sign out</MenuItem>
                        <MenuItem minH="40px">About</MenuItem>
                    </MenuList>
                </Menu>
                ):(
                <Stack direction="row" spacing={2}>
                    <Button leftIcon={<BiHomeSmile />}>Homes</Button>
                    <Button variant="outline" onClick={amplifySignOut.amplifySignOut}>Sign out</Button>       
                    <Button variant="link">About</Button>
                </Stack>
                )
                }
            </Flex>
        </Container>
    );
}