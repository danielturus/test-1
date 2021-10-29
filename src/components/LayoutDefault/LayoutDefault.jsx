import * as React from "react";
import { styled } from "@mui/material";
import { Header } from "../Header/Header";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column"
});

export function LayoutDefault({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
