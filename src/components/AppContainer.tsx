import * as React from 'react'
import { Container } from '@chakra-ui/react'
import TopNavBar from './TopNavBar'
import MainContainer from './MainContainer'

export default function AppContainer() {
    return (
        <Container maxW="container.xl" centerContent>
            <TopNavBar />
            <MainContainer />
        </Container>
    )
}
