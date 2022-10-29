import * as React from 'react'
import PropertyCard from './PropertyCard'
import { SimpleGrid } from '@chakra-ui/react'

export default function PropertyCardRepeater() {
  return (
    <SimpleGrid minChildWidth="280px" spacing="30px">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
    </SimpleGrid>
  )
}
