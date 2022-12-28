import * as React from "react";
import { Container } from "@chakra-ui/react";
import PropertyCardRepeater from "./PropertyCardRepeater";
import UserACRContainer from "./userACRContainer/UserACRContainer";

export default function MainContainer() {
    return (
        <Container maxW="container.xl">
          <PropertyCardRepeater />
          <UserACRContainer />
        </Container>
    );
}   