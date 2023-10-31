import styled from "@emotion/styled";
import Link from "@mui/material/Link";

export const StyledLink = styled(Link)`
  color: "white";
  font-size: 0.875rem;
  transition: all 0.2s;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 1rem 1.5rem;
  color: white;
  margin-top: 3rem;
`;
