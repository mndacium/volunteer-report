import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { FooterWrapper, StyledLink } from "./styled";
import { navItems } from "../navItems";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Stack rowGap={2}>
        <Box display="flex">
          <Link
            href="/"
            display="flex"
            underline="none"
            color="none"
            flexGrow={1}
          >
            <Typography variant="h6" fontWeight="700" color="white">
              VOLUNTEER&nbsp;
            </Typography>
            <Typography variant="h6" fontWeight="700" color="text.secondary">
              REPORT
            </Typography>
          </Link>
          <Box display="flex" gap="4rem" alignItems="center">
            {navItems.map(({ item, href }) => (
              <StyledLink key={item} href={href} underline="none" color="white">
                <Typography>{item}</Typography>
              </StyledLink>
            ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" color="white">
          <Typography fontWeight="400" flexGrow={1} fontSize="0.875rem">
            2023 © All rights reserved
          </Typography>
          <IconButton color="inherit" href="mailto:polina.berest@nure.ua">
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com/berest_polinka?igshid=MzMyNGUyNmU2YQ=="
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Stack>
    </FooterWrapper>
  );
};
