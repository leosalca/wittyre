import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Select, Spacer, Stack, Text } from '@chakra-ui/react';

export default function AutoCompleteList(list: {data: any}) {
    console.log(list.data.length);
    return (
        <Select placeholder='Select option' maxW='356px'>
            {list.data.map((item: any, index: number) => (
                <option key={index} value={item}>
                    {item.area_type === 'postal_code' ? (
                            <Text>{item.postal_code} {item.city} {item.state_code} {item.country}</Text>
                    ) : item.area_type === 'address' ? (
                            <Text>{item.full_address}</Text>
                    ) : item.area_type === 'city' ? (
                            <Text>{item.city} {item.state_code} {item.country}</Text>
                    ) : item.area_type === 'street' ? (
                            <Text>{item.street} {item.city} {item.state_code} {item.country}</Text>
                    ) : item.area_type === 'neighborhood' ? (
                            <Text>{item.neighborhood} {item.city} {item.state_code} {item.country}</Text>
                    ) : (
                            <Text>{item.area_type}</Text>
                    )}
                </option>
            ))}
        </Select>
    );
}
