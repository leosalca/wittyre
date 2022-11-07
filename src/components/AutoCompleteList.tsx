import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Spacer, Stack, Text } from '@chakra-ui/react';

export default function AutoCompleteList(list: {list: any}) {
    console.log(list.list);
    return (
        <Box>
            <Stack>
                {/* {list.list.map((item: any, index: number) => (
                    <Text key={index}>{item}</Text>
                ))} */}

                
            </Stack>
        </Box>
    );
}
