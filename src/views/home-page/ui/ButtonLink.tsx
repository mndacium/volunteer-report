import Typography from "@mui/material/Typography";
import { StyledLink } from "./styled";

interface Props {
  href: string;
  text: string;
}

export const ButtonLink = ({ href, text }: Props) => (
  <StyledLink href={href} underline="none">
    <Typography>{text}</Typography>
  </StyledLink>
);
