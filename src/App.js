import * as React from "react";
import { Container } from "@mui/material";
import { Card } from "./components/Card/Card";
import { LayoutDefault } from "./components/LayoutDefault/LayoutDefault";

export default function App() {
  return (
    <LayoutDefault withFooter>
      <Container>
        <Card />
      </Container>
      Hello from App, inside of LayoutDefault
    </LayoutDefault>
  );
}
