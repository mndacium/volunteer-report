import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.palette.text.primary};
  border-color: ${({ theme }) => theme.palette.text.primary};
  width: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  border-radius: 0;
  text-transform: none;

  &:hover {
    color: ${({ theme }) => `${theme.palette.text.secondary} !important`};
  }
`;
