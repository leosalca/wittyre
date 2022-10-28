import * as React from 'react'
import { Container, Flex, IconButton } from '@chakra-ui/react'
import { GoGraph } from 'react-icons/go'
import { TbMapSearch } from 'react-icons/tb'

export default function SideNavMenu() {
  return (
    <Flex direction="column" height="100%" gap="10px">
        <IconButton aria-label="Show maps" icon={<TbMapSearch />}/>
        <IconButton aria-label="Show charts" icon={<GoGraph />} size="md" />
    </Flex>

  )
}