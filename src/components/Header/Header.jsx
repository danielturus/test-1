import * as React from "react";
import { Link } from "@mui/material";
import { styled } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  marginTop: 16,
  marginLeft: 8,
  marginRight: 8,
  justifyContent: "flex-end"
});

export function Header() {
  return <Wrapper >
    <Link>Just want to Pay</Link>
    </Wrapper>;
}
