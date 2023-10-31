import styled from "@emotion/styled";
import Link from "@mui/material/Link";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.875rem;
  transition: all 0.2s;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
