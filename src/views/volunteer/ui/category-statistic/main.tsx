import Typography from "@mui/material/Typography";
import {
  BackgroundCircullarProgress,
  ForegroundCircullarProgress,
  Wrapper,
} from "./styled";
import Box from "@mui/material/Box";

interface Props {
  category: string;
  value: number;
  maxValue: number;
}

export const CategoryStatistic = ({ category, value, maxValue }: Props) => {
  const valueInPercentage = (value / maxValue) * 100;

  return (
    <Wrapper>
      <Box
        className="box-wrapper"
        sx={{ position: "relative", display: "inline-flex" }}
        mb={3}
      >
        <ForegroundCircullarProgress
          variant="determinate"
          thickness={5}
          value={valueInPercentage}
        />
        <BackgroundCircullarProgress
          variant="determinate"
          thickness={5}
          value={100}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight="500" color="text.primary">
            {value}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6" fontWeight="600">
          {category}
        </Typography>
      </Box>
    </Wrapper>
  );
};
