import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

export const WrapperContainer = styled(Container)`
  height: calc(100vh - 7rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTextField = styled(TextField)`
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 400;
  }
`;
