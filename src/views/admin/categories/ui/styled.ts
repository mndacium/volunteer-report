import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const WrapperStack = styled(Stack)`
  border: ${({ theme }) => `1px solid ${theme.palette.secondary.main}`};
  border-radius: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 400;
  }
`;
