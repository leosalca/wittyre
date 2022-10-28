import * as React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import TopNavBar from './TopNavBar'
import SideNavMenu from './SideNavMenu'
import MainContainer from './MainContainer'

export default function AppContainer() {
    return (
        <Container maxW="100%" centerContent>
            <TopNavBar />
            <Flex direction="row" flexWrap="nowrap">
                <SideNavMenu />
                <MainContainer />
            </Flex>
        </Container>
    )
}
