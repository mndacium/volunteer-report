import * as React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledLink, StyledLoginLink, StyledLogoLink } from "./styled";
import Container from "@mui/material/Container";

export const Header = () => {
  const router = useRouter();

  const userNavItems = React.useMemo(
    () => [
      {
        item: "Reports",
        href: "/reports",
        isActive: router.pathname === "/reports",
      },
      {
        item: "Volunteers",
        href: "/volunteers",
        isActive: router.pathname === "/volunteers",
      },
      {
        item: "Join us",
        href: "/download",
        isActive: false,
      },
    ],
    [router]
  );

  const adminNavItems = React.useMemo(
    () => [
      {
        item: "Manage reports",
        href: "/admin/reports",
        isActive: router.pathname === "/admin/reports",
      },
      {
        item: "Manage users",
        href: "/admin/users",
        isActive: router.pathname === "/admin/users",
      },
      {
        item: "Manage categories",
        href: "/admin/categories",
        isActive: router.pathname === "/admin/categories",
      },
    ],
    [router]
  );

  const isAdmin = React.useMemo(
    () => router.pathname.includes("/admin"),
    [router]
  );

  return (
    <Container>
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <StyledLogoLink
            href="/"
            flexGrow={1}
            display="flex"
            underline="none"
            color="none"
          >
            <Typography variant="h6" fontWeight="700" color="text.primary">
              VOLUNTEER&nbsp;
            </Typography>
            <Typography variant="h6" fontWeight="700" color="text.secondary">
              REPORT
            </Typography>
          </StyledLogoLink>
          <Box display="flex" gap="4rem" alignItems="center">
            {(isAdmin ? adminNavItems : userNavItems).map(
              ({ item, href, isActive }) => (
                <StyledLink
                  key={item}
                  href={href}
                  underline="none"
                  isActive={isActive}
                >
                  <Typography>{item}</Typography>
                </StyledLink>
              )
            )}
            <StyledLoginLink href={isAdmin ? "/" : "/login"} underline="none">
              <Typography fontWeight="400">
                {isAdmin ? "Log out" : "Log in"}
              </Typography>
            </StyledLoginLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
