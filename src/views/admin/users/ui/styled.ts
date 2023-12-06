import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

export const WrapperStack = styled(Stack)`
  border: ${({ theme }) => `1px solid ${theme.palette.secondary.main}`};
  border-radius: 0.5rem;
`;

export const ContentStack = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
`;
