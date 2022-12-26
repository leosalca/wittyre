import * as React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import TopNavBar from './TopNavBar'
import SideNavMenu from './SideNavMenu'
import MainContainer from './MainContainer'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsmobile from '../aws-exports'

Amplify.configure(awsmobile)

export default function AppContainer() {
    return (
        <Authenticator>
            {({ signOut, user }) => ( 
                <Container maxW="100%" centerContent>
                    <TopNavBar amplifySignOut = {signOut} />
                    <Flex w="100%" direction="row" flexWrap="nowrap">
                        <SideNavMenu />
                        <MainContainer />
                    </Flex>
                </Container>
            )}
        </Authenticator>
    )
}
