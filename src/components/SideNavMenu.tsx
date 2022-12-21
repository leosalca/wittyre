import * as React from 'react'
import { Container, Flex, IconButton } from '@chakra-ui/react'
import { GoGraph } from 'react-icons/go'
import { TbMapSearch } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import { useBreakpointValue } from '@chakra-ui/react'

export default function SideNavMenu() {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Flex direction="column" height="100%" gap="10px" m="1">
        {isMobile ? (<IconButton aria-label="Home" icon={<BiHomeSmile />} size="md" />) : (<></>)}
        <IconButton aria-label="Show maps" icon={<TbMapSearch />}/>
        <IconButton aria-label="Show charts" icon={<GoGraph />} size="md" />
    </Flex>

  )
}