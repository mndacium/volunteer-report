import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

export const Wrapper = styled.div`
  .MuiCircularProgress-root {
    width: 13rem !important;
    height: 13rem !important;
  }
`;

export const BackgroundCircullarProgress = styled(CircularProgress)`
  position: absolute;
  z-index: 1;
  right: 0;
  svg {
    color: #a0d4a2;
    circle {
      stroke-dashoffset: 0px !important;
    }
  }
`;

export const ForegroundCircullarProgress = styled(CircularProgress)`
  position: relative;
  z-index: 2;
  svg {
    color: var(--color_050);
    circle {
    }
  }
`;
