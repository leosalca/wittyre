import * as React from 'react'
import { Box, Flex, Heading, Image, Link, Spacer, Stack, Text } from '@chakra-ui/react'

export default function PropertyCard() {
  return (
        <Box boxShadow="md" rounded="md" p="1" maxW='sm'>
            <Image src="https://bit.ly/2Z4KKcF" alt="Segun Adebayo" />
            <Box p="6">
                <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
                    $ 1,900,000
                </Text>
                <Text fontSize="md" color="gray.500" lineHeight="short">
                    4 beds 2 baths 1,400 sqft
                </Text>
                <Text fontSize="md" color="gray.500" lineHeight="short">
                    1234 Main St, Anytown, CA 12345
                </Text>
                <Stack direction="row" spacing={4} align="center">
                    <Link
                        href="#"
                        color="teal.500"
                        fontWeight="semibold"
                        fontSize="md"
                        _hover={{ color: 'teal.600' }}
                    >
                        View
                    </Link>
                    <Spacer />
                    <Link
                        href="#"
                        color="teal.500"
                        fontWeight="semibold"   
                        fontSize="md"
                        _hover={{ color: 'teal.600' }}
                    >
                        Edit
                    </Link>
                </Stack>
            </Box>
        </Box>
  )
}
