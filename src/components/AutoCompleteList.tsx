import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Flex, GridItem, Heading, IconButton, Input, Link, Select, Spacer, Stack, Text } from '@chakra-ui/react';
import { BiStreetView } from 'react-icons/bi';

export default function AutoCompleteList(list: {data: any}) {
    console.log(list.data.length);

    const printOptionString = ({area_type, postal_code, street, city, state_code, country, full_address, neighborhood}: {area_type: string; postal_code: string; street: string; city: string; state_code: string; country: string; full_address: string; neighborhood: string}) => {
        let optionString = area_type === 'postal_code' ? postal_code.concat(' ', city, ' ', state_code, ' ', country) 
        : area_type === 'address' ? full_address
        : area_type === 'city' ? city.concat(' ', state_code, ' ', country)
        : area_type === 'street' ? street.concat(' ', city, ' ', state_code, ' ', country)
        : area_type === 'neighborhood' ? neighborhood.concat(' ', city, ' ', state_code, ' ', country)
        : area_type;

        return optionString;
    }

    return (
        <Select placeholder='Select option' maxW='356px'>
            {list.data.map((item: any, index: number) => (
                <option key={index} value={item}>
                    {printOptionString(item)}
                </option>
            ))}
        </Select>
    );
}
