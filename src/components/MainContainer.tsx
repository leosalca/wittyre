import * as React from "react";
import { Container } from "@chakra-ui/react";
import PropertyCardRepeater from "./PropertyCardRepeater";

export default function MainContainer() {
    return (
        <Container maxW="container.xl">
          <PropertyCardRepeater />
        </Container>
    );
}   