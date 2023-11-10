import styled from "@emotion/styled";
import Link from "@mui/material/Link";

export const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.palette.text.primary};
  width: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => `${theme.palette.text.secondary} !important`};
  }
`;
