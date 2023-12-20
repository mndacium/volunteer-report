import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ButtonLink } from "@/components/button-link";
import { WrapperContainer, StyledTextField } from "./styled";

export const LoginPageView = () => {
  return (
    <WrapperContainer maxWidth="md">
      <Stack gap={6} width="100%" alignItems="center">
        <Stack gap={2} alignItems="center">
          <Typography fontSize="1.25rem" fontWeight="600" color="text.primary">
            Join us in making a differences
          </Typography>
          <Typography fontSize="1rem" fontWeight="400" color="text.primary">
            Authorize as an Administrator
          </Typography>
        </Stack>
        <Stack gap={3} width="100%">
          <StyledTextField label="Email" variant="outlined" fullWidth />
          <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </Stack>
        <ButtonLink text="Log In" href="/admin/reports" />
      </Stack>
    </WrapperContainer>
  );
};
