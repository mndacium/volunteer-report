import * as React from "react";
import { useRouter } from "next/router";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CategoryStatistic } from "./ui";

const volunteer = {
  id: 1,
  name: "Volunteer",
  about:
    "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  img: "https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const statistic = {
  numberOfReports: 27,
  totalValue: 27000,
  valueByCategory: {
    "Category 1": 18900,
    "Category 2": 2700,
    "Category 3": 5400,
  },
};

export const VolunteerDetailedPageView = () => {
  const router = useRouter();

  const [isMonthDropdownOpened, setIsMonthDropdownOpened] =
    React.useState(false);

  const toggleMonthDropdownOpen = React.useCallback(
    () => setIsMonthDropdownOpened(!isMonthDropdownOpened),
    [isMonthDropdownOpened]
  );

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "7rem", marginBottom: "6rem" }}
    >
      <Stack flexDirection="row" justifyContent="space-between" mb={6}>
        <Button
          onClick={router.back}
          color="inherit"
          sx={{ fontWeight: "400" }}
        >
          &lt; back
        </Button>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
          color="text.primary"
        >
          DETAILED STATISTICS FOR
          <br />
          {volunteer.name}
        </Typography>
        <div style={{ width: "68px" }} />
      </Stack>
      <Stack gap={12}>
        <Button
          startIcon={<FilterAltOutlinedIcon />}
          endIcon={
            isMonthDropdownOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
          onClick={toggleMonthDropdownOpen}
          color="secondary"
          sx={{ textTransform: "none", fontWeight: "400", width: "120px" }}
        >
          Month
        </Button>
        <Stack justifyContent="center" flexDirection="row" gap={12}>
          <Stack gap={2}>
            <Typography variant="h3" color="text.secondary" fontWeight="700">
              {statistic.numberOfReports}
            </Typography>
            <Typography variant="h5" color="text.primary" fontWeight="400">
              Number of <br />
              reports
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Typography variant="h3" color="text.secondary" fontWeight="700">
              {statistic.totalValue}
            </Typography>
            <Typography variant="h5" color="text.primary" fontWeight="400">
              Total value
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <Stack gap={8} flexDirection="row" justifyContent="center">
            {Object.entries(statistic.valueByCategory).map(([key, value]) => (
              <CategoryStatistic
                key={key}
                category={key}
                value={value}
                maxValue={statistic.totalValue}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
