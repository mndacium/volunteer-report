import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledLink, StyledLoginLink } from "./styled";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { navItems } from "../navItems";

export const Header = () => {
  return (
    <Container>
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link
            href="/"
            flexGrow={1}
            display="flex"
            underline="none"
            color="none"
          >
            <Typography variant="h6" fontWeight="700">
              VOLUNTEER&nbsp;
            </Typography>
            <Typography variant="h6" fontWeight="700" color="text.secondary">
              REPORT
            </Typography>
          </Link>
          <Box display="flex" gap="4rem" alignItems="center">
            {navItems.map(({ item, href }) => (
              <StyledLink key={item} href={href} underline="none">
                <Typography>{item}</Typography>
              </StyledLink>
            ))}
            <StyledLoginLink href="/sign-in" underline="none">
              <Typography fontWeight="400">Log in</Typography>
            </StyledLoginLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
